import React from "react";
import "./Ambient.css";

// Ambient blue gradient blobs + grid — provides the V2 atmospheric background.
// Kept fixed so it anchors the whole page without repeating per-section.
const Ambient = () => (
  <div className="ambient" aria-hidden="true">
    <div className="ambient-blob ambient-blob--1" />
    <div className="ambient-blob ambient-blob--2" />
    <div className="ambient-blob ambient-blob--3" />
    <div className="ambient-grid" />
  </div>
);

export default Ambient;
