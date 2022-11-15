import React from 'react';
import './Header.scss';

function Header() {

    return (
    <header className="header">
        <div className="header__header-wrapper container">
            <div className="header-wrapper__logo"/>
            <div className="header-wrapper__main-part">
                <div className="main-part__menu-first">
                    <div className="menu-first__search-block">
                        <label htmlFor="input-line"/>
                        <input className="search-block__input-line search-block__general" type="text" id="input-line" name="search" value="Знайти тур …"/>
                        <span className="search-block__microphone-icon search-block__general"/>
                        <div className="search-block__grey-line-wrapper search-block__general">
                            <div className="grey-line-wrapper__grey-line-long"/>
                        </div>
                        <span className="search-block__search-icon search-block__general"/>
                    </div>
                    <div className="menu-first__contact-number">
                        <span className="contact-number__phone-icon"/>
                        <a href="index.js" className="contact-number__phone-number">+38 (032) 255 36 55</a>
                        <span className="contact-number__icon-choose"/>
                    </div>
                    <div className="menu-first__user-account">
                        <div className="user-account__grey-line-wrapper">
                            <div className="grey-line-wrapper__grey-line-short"/>
                        </div>
                        <span className="user-account__user-icon"/>
                        <a href="index.js" className="user-account__entry">Вхід</a>
                    </div>
                    <div className="menu-first__select-currency">
                        <div className="select-currency__grey-line-wrapper">
                            <div className="grey-line-wrapper__grey-line-short"/>
                        </div>
                        <a href="index.js" className="select-currency__currency">UAH -</a>
                        <a href="index.js" className="select-currency__currency-sign">₴‎</a>
                        <span className="select-currency__icon-choose"/>
                    </div>
                    <div className="menu-first__select-language">
                        <div className="select-language__grey-line-wrapper">
                            <div className="grey-line-wrapper__grey-line-short"/>
                        </div>
                        <a href="index.js" className="select-language__language">UA</a>
                        <span className="select-language__icon-choose"/>
                        <div className="menu__hidden"/>
                    </div>
                </div>
                <nav className="main-part__menu-second">
                    <div className="menu-second__why-visit">
                        <a href="index.js" className="why-visit__visit">Чому відвідай</a>
                        <span  className="why-visit__icon-choose"/>
                    </div>
                    <div className="menu-second__tours-options">
                        <a href="index.js" className="tours-options__tours">Тури</a>
                        <span className="tours-options__icon-choose"/>
                    </div>
                    <a href="index.js" className="menu-second__places">Місця</a>
                    <a href="index.js" className="menu-second__events">Події</a>
                    <div className="menu-second__propositions-options">
                        <a href="index.js" className="propositions-options__propositions">Пропозиції</a>
                        <span className="propositions-options__icon-choose"/>
                    </div>
                    <a href="index.js" className="menu-second__questions">Є питання?</a>
                    <a href="index.js" className="menu-second__contacts">Контакти</a>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;