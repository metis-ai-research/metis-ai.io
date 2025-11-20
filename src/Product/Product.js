import React from "react";
import { useTranslation } from "react-i18next";
import "./Product.css";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="product-container">
      <div className="product-grid">
        <div className="product-left">
          <div className="product-badge">{t('product.badge')}</div>
          <h2 className="product-title"
              dangerouslySetInnerHTML={{
                __html: t('product.title').replace(/\n/g, '<br />')
              }}
          />
          <p className="product-description">
            {t('product.description')}
          </p>
        </div>
        <div className="product-right">
          <div className="product-feature">
            <img
              src="images/rocket.svg"
              alt={t('product.features.ai.alt')}
              className="product-icons"
            />
            <h4>{t('product.features.ai.title')}</h4>
            <p>
              {t('product.features.ai.description')}
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/design.svg"
              alt={t('product.features.design.alt')}
              className="product-icons"
            />
            <h4>{t('product.features.design.title')}</h4>
            <p>
              {t('product.features.design.description')}
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/experience.svg"
              alt={t('product.features.experience.alt')}
              className="product-icons"
            />
            <h4>{t('product.features.experience.title')}</h4>
            <p>
              {t('product.features.experience.description')}
            </p>
          </div>
          <div className="product-feature">
            <img
              src="images/diverse.svg"
              alt={t('product.features.team.alt')}
              className="product-icons"
            />
            <h4>{t('product.features.team.title')}</h4>
            <p>
              {t('product.features.team.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
