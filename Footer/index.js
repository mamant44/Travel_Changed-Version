import React from 'react';
import './Footer.scss';

function Footer() {

    return (
    <footer className="footer-wrapper">
        <div className="footer-wrapper__top-block container">
            <nav className="top-block__left-block">
                <div className="left-block__column-tours general-footer-columns">
                    <a href="index.js" className="column-tours__main-title footer-general-title">Тури</a>
                    <a href="index.js" className="column-tours__tours">Популярні тури</a>
                    <a href="index.js" className="column-tours__tours">Тури на Синевир</a>
                    <a href="index.js" className="column-tours__tours">Тури на Новий Рік</a>
                    <a href="index.js" className="column-tours__tours">Тури на Різдво</a>
                    <a href="index.js" className="column-tours__tours">Тури в Карпати</a>
                    <a href="index.js" className="column-tours__tours">На бринзу до Рахова</a>
                    <a href="index.js" className="column-tours__angle footer-right-angles">&#8250;</a>
                </div>
                <div className="left-block__column-propositions general-footer-columns">
                    <div className="column-propositions__main-title">
                        <a href="index.js" className="main-title__text footer-general-title">Пропозиції</a>
                        <a href="index.js" className="main-title__angle footer-right-angles">&#8250;</a>
                    </div>
                    <a href="index.js" className="column-propositions__proposition">Турагентам</a>
                    <a href="index.js" className="column-propositions__proposition">Школам</a>
                    <a href="index.js" className="column-propositions__proposition">Корпоративи</a>
                    <a href="../Transport/index.js" className="column-propositions__proposition" target="_blank">Транспорт</a>
                    <a href="index.js" className="column-propositions__proposition">Відгуки</a>
                    <div className="column-propositions__blog footer-general-title">
                        <a href="index.js" className="blog__text">Блог</a>
                        <a href="index.js" className="blog__angle-right footer-right-angles">&#8250;</a>
                    </div>
                </div>
            </nav>
            <div className="top-block__right-block">
                <form className="right-block" action="#" name="footer-form" method="get">
                    <div className="right-block__column-contacts general-footer-columns">
                        <div className="column-contacts__block-contacts">
                            <a href="index.js" className="block-contacts__title-contacts footer-general-title">Контакти</a>
                            <a href="index.js" className="block-contacts__angle-right footer-right-angles">&#8250;</a>
                        </div>
                        <div className="column-contacts__phone-number">
                            <span className="phone-number__icon"/>
                            <a href="index.js" className="phone-number__number">+38 (032) 255 36 55</a>
                        </div>
                        <div className="column-contacts__mobile-phone-numbers">
                            <div className="mobile-phone-numbers__icon"/>
                            <div className="mobile-phone-numbers__number-wrapper">
                                <a href="index.js" className="number-wrapper__number">+38 (096) 481 36 70</a>
                                <a href="index.js" className="number-wrapper__number">+38 (063) 366 78 64</a>
                                <a href="index.js" className="number-wrapper__number">+38 (066) 825 99 36</a>
                            </div>
                        </div>
                        <div className="column-contacts__mail-wrapper">
                            <span className="mail-wrapper__icon"/>
                            <a href="index.js" className="mail-wrapper__mail">travel.channel@gmail.com</a>
                        </div>
                        <div className="column-contacts__messengers">
                            <a href="index.js" className="messengers__skype messengers">.</a>
                            <a href="index.js" className="messengers__viber messengers">.</a>
                            <a href="index.js" className="messengers__telegram messengers">.</a>
                            <a href="index.js" className="messengers__whatsup messengers">.</a>
                            <a href="index.js" className="messengers__facebook-messenger messengers">.</a>
                        </div>
                        <button className="column-contacts__order-call">Замовити дзвінок</button>
                    </div>
                    <div className="right-block__column-addresses">
                        <div className="column-addresses__addresses-wrapper">
                            <div className="addresses-wrapper__title-address">
                                <a href="index.js" className="title-address__text footer-general-title">Адреса</a>
                                <a href="index.js" className="title-address__angle footer-right-angles">&#8250;</a>
                            </div>
                            <div className="addresses-wrapper__address">
                                <div className="address__icon"/>
                                <div className="address__text">Дніпро, вул. Олеся Гончара, 22</div>
                            </div>
                            <div className="addresses-wrapper__navigation">
                                <div className="navigation__icon"/>
                                <div className="navigation__text">GPS: 49.850562, 24.026892</div>
                            </div>
                            <div className="addresses-wrapper__map">
                                <a href="index.js" className="map__text">Показати на мапі</a>
                                <a href="index.js" className="map__angle-right footer-right-angles">&#8250;</a>
                            </div>
                            <div className="addresses-wrapper__questions">
                                <a href="index.js" className="questions__text footer-general-title">Питання? Скарги? Пропозиції?</a>
                                <a href="index.js" className="questions__angle footer-right-angles">&#8250;</a>
                            </div>
                            <div className="addresses-wrapper__write-letter">
                                <span className="write-letter__photo"/>
                                <a href="index.js" className="write-letter__letter general-show-more">Написати</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="top-block__third-block">
                <a href="index.js" className="third-block__switch">.</a>
            </div>
        </div>
        <div className="footer-wrapper__bottom-block-wrapper">
            <div className="bottom-block-wrapper__bottom-block">
                <div className="bottom-block__license bottom-block__license-offer">© 2020 ТОВ «Travel» | Ліцензія АЕ №555555</div>
                <a href="index.js" className="bottom-block__public-offer bottom-block__license-offer">Публічна оферта | Політика приватності</a>
                <div className="bottom-block__social-networks-wrapper">
                    <div className="social-networks-wrapper__title">Будьте з нами</div>
                    <div className="social-networks-wrapper__social-networks">
                        <a href="index.js" className="social-networks__facebook social-networks__general">.</a>
                        <a href="index.js" className="social-networks__instagram social-networks__general">.</a>
                        <a href="index.js" className="social-networks__youtube social-networks__general">.</a>
                        <a href="index.js" className="social-networks__telegram social-networks__general">.</a>
                        <a href="index.js" className="social-networks__hootsuite social-networks__general">.</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;