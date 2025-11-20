import React from "react";
import { useTranslation } from "react-i18next";
import "./Vision.css";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="vision-container">
      <div className="vision-content">
        {/* Left Section: Images */}
        <div className="vision-images">
          <img src="images/robot.png" alt={t('vision.imageAlt')} className="vision-image" />
        </div>

        {/* Right Section: Text */}
        <div className="vision-text">
          <div className="vision-badge">{t('vision.badge')}</div>
          <h1 className="vision-title">{t('vision.title')}</h1>
          <p className="vision-description">
            {t('vision.description1')}
          </p>
          <p className="vision-description">
            {t('vision.description2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
