import React from 'react';
import './Travel.scss';
import FirstBlock from "../FirstBlockTravel";
import SecondBlock from "../SecondBlockTravel";

function Travel() {

    return (
        <main className="site-wrapper">
            <div className="site-content container">
                <div className="site-content__main-content">
                    <FirstBlock/>
                    <SecondBlock/>
                </div>
                <section className="site-content__your-choice site-content__choice-clients">
                    <h2 className="your-choice__main-question">Чому Travel?</h2>
                    <div className="your-choice__reasons">
                        <div className="reasons__switches-wrapper">
                            <a href="index.js" className="switches-wrapper__switch-left reasons-switch general-switch">.</a>
                        </div>
                        <div className="reasons__part-tourism-market">
                            <div className="part-tourism-market__icon"/>
                            <div className="part-tourism-market__text general-properties-text">
                                <span className="change-color number-first">6,4%</span>
                                <span className="text__part">ринку внутрішнього туризму</span>
                            </div>
                        </div>
                        <div className="reasons__author-tours">
                            <div className="author-tours__icon"/>
                            <div className="author-tours__text general-properties-text">
                                <span className="change-color number-second">282</span>
                                <span className="text__author"> Авторських турів та екскурсій</span>
                            </div>
                        </div>
                        <div className="reasons__many-tourists">
                            <div className="many-tourists__icon"/>
                            <div className="many-tourists__text general-properties-text">Більше <span className="change-color">197 000</span> туристів
                            </div>
                        </div>
                        <div className="reasons__partnership">
                            <div className="partnership__icon"/>
                            <div className="partnership__text general-properties-text">
                                <span className="text__partner">Партнерство з</span>
                                <span className="change-color number-third">560</span>
                                <span className="word-agent"> турагентами</span>
                            </div>
                        </div>
                        <div className="reasons__switches-wrapper">
                            <a href="index.js" className="switches-wrapper__switch-right reasons-switch general-switch">.</a>
                        </div>
                    </div>
                    <div className="your-choice__hidden-block">
                        <div className="hidden-block__hidden-switches hidden-block__first-block-switches">
                            <div className="hidden-switches__angle-left"/>
                            <div className="hidden-switches__blue-indicator"/>
                            <div className="hidden-switches__grey-indicator"/>
                            <div className="hidden-switches__angle-right"/>
                        </div>
                    </div>
                </section>
                <section className="site-content__our-clients">
                    <h2 className="our-clients__title">Наші клієнти</h2>
                    <div className="our-clients__companies">
                        <div className="companies__switches-wrapper">
                            <a href="index.js" className="switches-wrapper__switch-left companies-switch general-switch">.</a>
                        </div>
                        <div className="companies__first-company"/>
                        <div className="companies__second-company"/>
                        <div className="companies__third-company"/>
                        <div className="companies__fourth-company"/>
                        <div className="companies__fifth-company"/>
                        <div className="companies__sixth-company"/>
                        <div className="companies__switches-wrapper">
                            <a href="index.js" className="switches-wrapper__switch-right companies-switch general-switch">.</a>
                        </div>
                    </div>
                    <div className="our-clients__hidden-block">
                        <div className="hidden-block__hidden-switches hidden-block__second-block-switches">
                            <div className="hidden-switches__angle-left"/>
                            <div className="hidden-switches__blue-indicator"/>
                            <div className="hidden-switches__grey-indicator hidden-switches__first-indicator"/>
                            <div className="hidden-switches__grey-indicator hidden-switches__second-indicator"/>
                            <div className="hidden-switches__grey-indicator hidden-switches__third-indicator"/>
                            <div className="hidden-switches__angle-right"/>
                        </div>
                    </div>
                </section>
                <section className="site-content__tour-ordering-rules">
                    <h3 className="tour-ordering-rules__title">Правила замовлення турів</h3>
                    <div className="tour-ordering-rules__info">Замовлення туру відбувається у три основні етапи: запит, бронювання (підтвердження), оплата. У випадку відсутності місць пропонується додатковий проміжний етап між запитом та бронюванням: резерв (включення до списку очікування). Запит на наявність вільних місць в турах можна подати через: сайт (форма …</div>
                    <div className="tour-ordering-rules__read-more travel-read-more">
                        <a href="index.js" className="read-more__text">Читати більше</a>
                        <span className="read-more__arrow-down"/>
                    </div>
                </section>
            </div>
        </main>
    );}

export default Travel;