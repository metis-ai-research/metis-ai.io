import { useEffect, useRef, useState } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";

// Automated browsers (crawlers, screenshot tools) get the settled final state:
// they never scroll, so scroll-triggered content would otherwise stay hidden.
const automated = typeof navigator !== "undefined" && navigator.webdriver === true;

export const prefersReducedMotion = () =>
  automated || (typeof window !== "undefined" && window.matchMedia && window.matchMedia(REDUCED).matches);

export function useReducedMotion() {
  const [reduced, setReduced] = useState(prefersReducedMotion);
  useEffect(() => {
    const mq = window.matchMedia(REDUCED);
    const onChange = () => setReduced(automated || mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// One shared observer for every `.reveal` element on the page. Elements become
// `.is-in` once and stay that way; there are no exit animations on scroll-back.
let sharedObserver;
function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          sharedObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );
  return sharedObserver;
}

export function useRevealAll() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return undefined;
    document.documentElement.classList.add("motion");
    const observer = getObserver();
    const watch = () => document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => observer.observe(el));
    watch();
    // Language switches re-render nodes; pick up anything new.
    const mo = new MutationObserver(watch);
    mo.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
}

// Fires once when the element first enters the viewport.
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (automated || !("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.35, rootMargin: options.rootMargin ?? "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);
  return [ref, inView];
}

// Writes a 0..1 scroll progress for the element into the CSS variable `--p`.
// `start` and `end` are the viewport fractions where progress begins and ends,
// measured against the element's top edge.
export function useScrollProgress({ start = 1, end = 0.2 } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion()) {
      el.style.setProperty("--p", "1");
      return undefined;
    }
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh * start - rect.top) / (vh * (start - end));
      el.style.setProperty("--p", Math.min(1, Math.max(0, raw)).toFixed(4));
    };
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(el);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [start, end]);
  return ref;
}
