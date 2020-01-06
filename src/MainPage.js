import React from 'react'
import './MainPage.scss'

const MainPage = () => {
  return (
    <>
      <div className="section-outher sectoin-header">
        <div className="section-inner">
          <div className="sectoin-header-logo">Servisica</div>
          <div className="sectoin-header-content">
            <div className="sectoin-header-wrapper">
              <h1 className="sectoin-header-wrapper__title">
                We are here to help you out
              </h1>
              <h4 className="sectoin-header-wrapper__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <div className="sectoin-header-wrapper__form">
                <div className="sectoin-header-wrapper__form-input">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="sectoin-header-wrapper__form-input">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="sectoin-header-wrapper__form-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-outher sectoin-promo">
        <div className="section-inner">sectoin-promo</div>
      </div>

      <div className="section-outher sectoin-founder">
        <div className="section-inner">sectoin-founder</div>
      </div>

      <div className="section-outher sectoin-plans">
        <div className="section-inner">sectoin-plans</div>
      </div>

      <div className="section-outher sectoin-offer">
        <div className="section-inner">sectoin-offer</div>
      </div>

      <div className="section-outher sectoin-footer">
        <div className="section-inner">sectoin-footer</div>
      </div>
    </>
  )
}

export default MainPage
