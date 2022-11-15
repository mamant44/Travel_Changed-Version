import React from 'react'
import './SecondBlockTravel.scss'
import Tour from "../Tour";

function SecondBlock() {

    return (
        <div className="main-content__second-block">
            <div className="second-block__info-about-tours">
                <section className="info-about-tours__gallery">
                    <div className="gallery__top-block">
                        <div className="top-block__left-wrapper">Хіт продажів</div>
                        <div className="top-block__right-wrapper">
                            <div className="right-wrapper__indicators">
                                <a href="index.js" className="indicators__left">
                                    <svg width="6" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M5 1L1 5.5 5 10" stroke="#fff" strokeWidth="1.337" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </a>
                                <svg width="8" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="4" cy="4.909" rx="4" ry="4.018" fill="#fff"/></svg>
                                <svg width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                <svg width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                <svg width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                <a href="index.js" className="indicators__right">
                                    <svg width="6" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4.5L1 10" stroke="#fff" strokeWidth="1.337" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </a>
                            </div>
                            <div className="right-wrapper__switches-wrapper">
                                <div className="switches-wrapper__switches">
                                    <a href="index.js" className="switches__left-switch switches__switch">.</a>
                                    <div className="switches__grey-line"/>
                                    <a href="index.js" className="switches__right-switch switches__switch">.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__bottom-block">
                        <div className="bottom-block__left-wrapper">
                            <div className="left-wrapper__tour-name">
                                <h2 className="tour-name__title">Сиро-винний тур Закарпатським та <br/>Прикарпатським краями</h2>
                                <div className="tour-name__white-arrow"/>
                            </div>
                            <div className="left-wrapper__tour-places">палац Шенборна, Мукачівський замок, басейн і вино в Берегово,<br/> Селиська сироварня, озеро Синевир, водоспад Шипіт<span>
                                <a className="more-info" href="index.js">Більше</a></span>
                            </div>
                        </div>
                        <div className="bottom-block__right-wrapper">
                            <div className="right-wrapper__tour-price-block">
                                <div className="tour-price-block__tour-price">
                                    <div className="tour-price__price">745</div>
                                    <div className="tour-price__currency">/ грн</div>
                                </div>
                                <span className="tour-price-block__price-per-person">вартість з 1 особи</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="info-about-tours__menu-wrapper">
                    <div className="menu-wrapper__menu">
                        <div className="menu__gallery menu-general">
                            <span className="gallery__icon gallery-list-calendar__icon"/>
                            <a href="index.js" className="gallery__text gallery-list-calendar__text">Галерея</a>
                        </div>
                        <div className="menu__list menu-general">
                            <span className="list__icon gallery-list-calendar__icon list-calendar__icon"/>
                            <a href="index.js" className="list__text gallery-list-calendar__text">Список</a>
                        </div>
                        <div className="menu__calendar menu-general">
                            <span className="calendar__icon gallery-list-calendar__icon list-calendar__icon"/>
                            <a href="index.js" className="calendar__text gallery-list-calendar__text">Календар</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-block__all-tours">
                <form className="order-tour-form" action="#" name="order-tour" method="get">
                    <div className="all-tours__top-block">
                        <div className="top-block__available-tours">Доступно 40 турів</div>
                        <div className="top-block__show-tours">
                            <span className="show-tours__text show-sort__text">Показати тури</span>
                            <div className="show-tours__viewing-tours general-show-sort">
                                <span className="viewing-tours__number">12</span>
                                <div className="viewing-tours__icon-choose"/>
                            </div>
                        </div>
                        <div className="top-block__sort-by">
                            <span className="sort-by__text show-sort__text">Сортувати за</span>
                            <div className="sort-by__sort-wrapper general-show-sort">
                                <span className="sort-wrapper__text">Від найдешевшого</span>
                                <div className="sort-wrapper__icon-choose"/>
                            </div>
                        </div>
                    </div>
                    <section className="all-tours__bottom-block">
                        <div className="bottom-block__row-list bottom-block__row-list-first">
                            <Tour styles="first-picture" price="895" stars={1}/>
                            <Tour styles="second-picture" price="895"/>
                            <Tour styles="third-picture" specialClass="hidden-tablet" price="895"/>
                        </div>
                        <div className="bottom-block__row-list bottom-block__row-list-second">
                            <Tour styles="first-picture" price="895" stars={1}/>
                            <Tour styles="second-picture" specialClass="hidden-tablet" price="895"/>
                            <Tour styles="third-picture" price="895"/>
                        </div>
                        <div className="bottom-block__row-list bottom-block__row-list-third">
                            <Tour styles="first-picture" specialClass="hidden-tablet" price="895" stars={1}/>
                            <Tour styles="second-picture" price="895"/>
                            <Tour styles="third-picture" price="895"/>
                        </div>
                    </section>
                </form>
            </div>
            <div className="second-block__show-more">
                <a href="index.js" className="show-more__show general-show-more">Показати ще 12</a>
            </div>
        </div>
    );
}

export default SecondBlock;