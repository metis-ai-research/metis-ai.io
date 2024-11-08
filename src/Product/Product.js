import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-container pt-24 pb-24">
      <div className="product-content">
        <div className="product-left">
          <div className="product-badge">Our Product</div>
          <h2 className="product-title">
            Transform <br />
            Your Ideas into <br />
            Reality
          </h2>
          <p className="product-description">
            At Metis AI Solutions, our product is the result of cutting-edge
            technology, thoughtful design, and years of expertise. Here’s what
            makes it unique:
          </p>
        </div>
        <div className="product-right">
          <div className="product-feature">
            <img
              src="images/rocket.svg"
              alt="Powered by Advanced AI"
              className="product-icons"
            />
            <h4>Powered by Advanced AI</h4>
            <p>
              We integrate state-of-the-art AI technology to deliver smarter,
              faster, and more efficient solutions designed for modern users.
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/design.svg"
              alt="Designed for Users"
              className="product-icons"
            />
            <h4>Designed for Users</h4>
            <p>
              User experience is our top priority. Our products are thoughtfully
              crafted with a deep understanding of user behavior, providing
              intuitive experiences.
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/experience.svg"
              alt="Highly Experienced"
              className="product-icons"
            />
            <h4>Highly Experienced</h4>
            <p>
              We excel at turning complex ideas into user-friendly products,
              leveraging industry-leading expertise in every solution.
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/diverse.svg"
              alt="Diverse Team"
              className="product-icons"
            />
            <h4>Diverse Team</h4>
            <p>
              Our global team brings together varied perspectives and expertise,
              helping us innovate and design products that cater to diverse
              audiences worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
