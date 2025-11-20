import React from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <div className="services-content">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="services-badge">{t('services.badge')}</div>

          {/* The Future of AI-Powered Personal Assistance */}
          <h1 className="services-title">
            {t('services.title')}
          </h1>

          {/* Our innovative solutions... */}
          <p className="services-description">
            {t('services.description')}
          </p>

          {/* Contact Us Button */}
          <button className="contact-button">{t('services.contactButton')}</button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="images/ai-image.png"
            alt={t('services.imageAlt')}
            className="services-image w-full h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
