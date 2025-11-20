import React from "react";
import { useTranslation } from "react-i18next";
import "./Solution.css";

const Solution = () => {
  const { t } = useTranslation();

  return (
    <div className="solution-container">
      <div className="solution-content">
        {/* Title */}
        <h3 className="solution-badge">{t('solution.badge')}</h3>
        <h2 className="solution-title">{t('solution.title')}</h2>
        <p className="solution-description">
          {t('solution.description').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('solution.description').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        {/* Features */}
        <div className="solution-features">
          {/* Feature 1 */}
          <div className="solution-feature">
            <div className="text-left">
              <h6 className="feature-title">{t('solution.features.innovation.title')}</h6>
              <p className="feature-description">
                {t('solution.features.innovation.description')}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="solution-feature">
            <div className="text-left">
              <h4 className="feature-title">{t('solution.features.personalized.title')}</h4>
              <p className="feature-description">
                {t('solution.features.personalized.description')}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="solution-feature">
            <div className="text-left">
              <h4 className="feature-title">{t('solution.features.microsoft.title')}</h4>
              <p className="feature-description">
                {t('solution.features.microsoft.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
