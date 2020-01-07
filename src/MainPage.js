import React from 'react'
import './MainPage.scss'
import videoImg from './assets/videoImg.jpg'
import itemImg from './assets/itemImg.png'
import founderImg from './assets/founderImg.png'

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
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h4>
              <form action="">
                <div className="sectoin-header-wrapper__form">
                  <div className="sectoin-header-wrapper__form-input">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="sectoin-header-wrapper__form-input">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="sectoin-header-wrapper__form-button">
                    <button className="btn-primary">Get Started</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="section-outher sectoin-promo">
        <div className="section-inner">
          <div className="sectoin-promo-main">
            <div className="sectoin-promo-main__content">
              <h1>Grow up your business with servisica</h1>
              <div className="description__item">
                <h3>Why you should choose us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <h3>Why you should choose us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="sectoin-promo-main__video">
              <img src={videoImg} alt="" />
            </div>
          </div>
          <div className="sectoin-promo-secondary">
            <div className="description__item">
              <img src={itemImg} alt="" style={{ width: '70px' }} />
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>

            <div className="description__item">
              <img src={itemImg} alt="" style={{ width: '70px' }} />
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>

            <div className="description__item">
              <img src={itemImg} alt="" style={{ width: '70px' }} />
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-outher sectoin-founder">
        <div className="section-inner">
          <div className="sectoin-founder__img">
            <img src={founderImg} alt="" />
          </div>
          <div className="sectoin-founder__content">
            <p className="sectoin-founder__content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p className="sectoin-founder__content-name">Nicholas Nosov</p>
            <p className="sectoin-founder__content-position">
              Founder, Servisica
            </p>
          </div>
        </div>
      </div>

      <div className="section-outher sectoin-plans">
        <div className="section-inner">
          <h1 className="sectoin-plans__title">Choose your suitable plan</h1>
          <p className="sectoin-plans__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="sectoin-plans__list">
            <div className="sectoin-plans__list-item active">
              <h3 className="sectoin-plans__list-item_title">FREE</h3>
              <p className="sectoin-plans__list-item_price">
                $0<span>/mo</span>
              </p>
              <p className="sectoin-plans__list-item_description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="sectoin-plans__list-item_button">
                <a href="#0" className="btn-primary">
                  Get Started
                </a>
              </div>
            </div>

            <div className="sectoin-plans__list-item">
              <h3 className="sectoin-plans__list-item_title">PREMIUM</h3>
              <p className="sectoin-plans__list-item_price">
                $40<span>/mo</span>
              </p>
              <p className="sectoin-plans__list-item_description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="sectoin-plans__list-item_button">
                <a href="#0" className="btn-secondary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-outher sectoin-offer">
        <div className="section-inner">
          <h1 className="sectoin-offer__title">It's free, Get started today</h1>
          <p className="sectoin-offer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <a href="#0" className="btn-free">
            Get Started
          </a>
        </div>
      </div>

      <div className="section-outher sectoin-footer">
        <div className="section-inner">
          <div className="sectoin-footer__logo">Servisica</div>
          <ul className="sectoin-footer__nav">
            <li>
              <a href="#0">About Us</a>
            </li>
            <li>
              <a href="#0" className="active">
                Services
              </a>
            </li>
            <li>
              <a href="#0">FAQ</a>
            </li>
            <li>
              <a href="#0">Blog</a>
            </li>
            <li>
              <a href="#0">Contact Us</a>
            </li>
          </ul>
          <div className="sectoin-footer__links">
            <p className="sectoin-footer__links-copyright">
              Copyright © 2020 All Right Reserved
            </p>

            <ul className="sectoin-footer__links-help">
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href="#0">Terms of Services</a>
              </li>
              <li>
                <a href="#0">Security</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
