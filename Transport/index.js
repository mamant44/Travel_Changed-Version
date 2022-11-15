import React from "react";
import './Transport.scss'
import whiteBus2 from '../img/white-bus2.jpg';
import salon  from '../img/salon.jpg';
import reno from '../img/reno.jpg';
import mercedes from '../img/mercedes.jpg';
import littleBus from '../img/little-bus.jpg';
import whiteBus3 from '../img/white-bus3.jpg';
import whiteBus from '../img/white-bus.jpg';
import photoGirl2 from '../img/photo-girl2.jpg';
import photoGirl3 from '../img/photo-girl3.jpg';
import photoGirl4 from '../img/photo-girl4.jpg';

function Transport() {

        return (
            <main className="content-wrapper">
                <div className="page-content container">
                    <div className="page-content__main-column">
                        <div className="main-column__first-block">
                            <div className="first-block__top-block">
                                <a className="top-block__main-page" href="index.js">Головна</a>
                                <span className="top-block__dash">—</span>
                                <span className="top-block__transport-page">Транспорт</span>
                            </div>
                            <section className="first-block__bottom-block">
                                <div className="bottom-block__left-part">
                                    <div className="left-part__video-wrapper">
                                        <span className="video-wrapper__icon"/>
                                        <span className="video-wrapper__video">Відео</span>
                                    </div>
                                    <h3 className="left-part__name-transport">Neoplan Van Hool</h3>
                                </div>
                                <div className="bottom-block__right-part">
                                    <div className="right-part__indicators">
                                        <svg className="indicators__first" width="8" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="4" cy="4.909" rx="4" ry="4.018" fill="#fff"/></svg>
                                        <svg className="indicators__second" width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                        <svg className="indicators__third" width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                        <svg className="indicators__fourth" width="6" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".7" cx="3" cy="3.909" rx="3" ry="3.013" fill="#fff"/></svg>
                                    </div>
                                    <div className="right-part__switches">
                                        <a href="index.js" className="switches__left-switch switches__switch">.</a>
                                        <div className="switches__grey-line"/>
                                        <a href="index.js" className="switches__right-switch switches__switch">.</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="main-column__second-block">
                            <section className="second-block__bus-rental">
                                <h2 className="bus-rental__title service-rental__title">Оренда автобуса у Дніпрі</h2>
                                <div className="bus-rental__transport-options">
                                    <p className="transport-options__text">Пасажирські автобусні перевезення набувають все більшої популярності. Ми раді запропонувати вам оренду автобусів з нашого автопарку. На сьогодні це:</p>
                                    <ul className="transport-options__options">
                                        <li><span className="options__transport">міні-буси (Mercedes Benz Vito, Opel Vivaro);</span></li>
                                        <li><span className="options__transport">мікроавтобуси (Mercedes–Sprinter);</span></li>
                                        <li><span className="options__transport">великі автобуси (місткістю від 30 до 70 осіб, MercedesBenzVario, Isuzu, Neoplan, Setra, Volvo, VanHool). Вигідна оренда автобусів у Дніпрі</span></li>
                                    </ul>
                                </div>
                                <div className="bus-rental__manager-contacts">
                                    <div className="manager-contacts__text">Для замовлення і оренди автобусу у Дніпрі звертайтеся до менеджера Ігора:</div>
                                    <div className="manager-contacts__mail-address">
                                        <a href="index.js" className="mail-address__icon">.</a>
                                        <a href="index.js" className="mail-address__mail">travel.channel@gmail.com</a>
                                    </div>
                                    <div className="manager-contacts__mobile-number">
                                        <a href="index.js" className="mobile-number__icon">.</a>
                                        <a href="index.js" className="mobile-number__number">+38 (067) 212 95 88</a>
                                    </div>
                                    <div className="manager-contacts__viber">
                                        <a href="index.js" className="viber__icon">.</a>
                                        <a href="index.js" className="viber__number">+38 (093) 511 56 88</a>
                                    </div>
                                </div>
                            </section>
                            <section className="second-block__service-buses">
                                <h2 className="service-buses__title service-rental__title">Автобуси, що обслуговують тури «Travel»</h2>
                                <div className="service-buses__text">
                                    <p className="text">Щоб вам було цікаво і комфортно подорожувати з туроператором «Travel», ми якомога ретельніше продумуємо усі деталі наших турів. Важливими є не лише туристичні об’єкти, а й транспорт, який ми використовуємо для здійснення автобусних турів. Для наших туристів – тільки найкраще.</p>
                                    <p className="text">Наші тури обслуговують комфортні автобуси євро-класу. Тож кожна мандрівка буде і цікавою, і комфортною.</p>
                                    <p className="text">Під час автобусної мандрівки протягом довгого часу доводиться перебувати у транспорті. Тому ми надзвичайно відповідально ставимося як до вибору транспортних засобів, так і до вибору перевізників і водіїв.</p>
                                </div>
                                <div className="service-buses__manager-contacts">
                                    <div className="manager-contacts__text">Для замовлення і оренди автобусу у Дніпрі звертайтеся до менеджера Ігора:</div>
                                    <div className="manager-contacts__mail-address">
                                        <a href="index.js" className="mail-address__icon">.</a>
                                        <a href="index.js" className="mail-address__mail">travel.channel@gmail.com</a>
                                    </div>
                                    <div className="manager-contacts__mobile-number">
                                        <a href="index.js" className="mobile-number__icon">.</a>
                                        <a href="index.js" className="mobile-number__number">+38 (067) 212 95 88</a>
                                    </div>
                                    <div className="manager-contacts__viber">
                                        <a href="index.js" className="viber__icon">.</a>
                                        <a href="index.js" className="viber__number">+38 (093) 511 56 88</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="main-column__third-block">
                            <div className="third-block__photo-big-buses full-width-banner">
                                <img className="photo-big-buses photo-big-buses__first" src={whiteBus2} alt="Фото внешнего вида автобуса"/>
                                <img className="photo-big-buses photo-big-buses__second" src={salon} alt="Фото салона Автобуса"/>
                            </div>
                            <div className="third-block__choice-buses">
                                <h2 className="choice-buses__title">Наші тури обслуговують комфортні автобуси євро-класу</h2>
                                <section className="choice-buses__photos-buses">
                                    <div className="photos-buses__first-row general-row">
                                        <div className="first-row__option first-row__option-first general-row__option">
                                            <div className="option__photo">
                                                <img className="photo-size" src={reno} alt="Фото мини-буса"/>
                                            </div>
                                            <div className="option__description">
                                                <h3 className="description__name">Mercedes Benz Vito Opel Vivaro</h3>
                                                <span className="description__info">Міні-бус (до 10 осіб)</span>
                                            </div>
                                        </div>
                                        <div className="first-row__option first-row__option-second general-row__option">
                                            <div className="option__photo">
                                                <img className="photo-size" src={mercedes} alt="Фото микроавтобуса"/>
                                            </div>
                                            <div className="option__description">
                                                <h3 className="description__name">Mercedes-Sprinter</h3>
                                                <span className="description__info">Мікроавтобуси (від 12 до 20 осіб)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="photo-buses__second-row general-row">
                                        <div className="second-row__option general-row__option">
                                            <div className="option__photo">
                                                <img className="mobile-tablet-picture" src={littleBus} alt="Фото автобуса до 30 осiб"/>
                                            </div>
                                            <div className="option__description">
                                                <h3 className="description__name">Mercedes Benz Vario Isuzu</h3>
                                                <span className="description__info">Автобуси (до 30 осіб)</span>
                                            </div>
                                        </div>
                                        <div className="second-row__option general-row__option">
                                            <div className="option__photo">
                                                <img className="mobile-tablet-picture" src={whiteBus3} alt="Фото автобуса до 56 осiб"/>
                                            </div>
                                            <div className="option__description">
                                                <h3 className="description__name">Neoplan Setra Volvo</h3>
                                                <span className="description__info">Автобуси (до 56 осіб)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="photo-buses__third-row general-row">
                                        <div className="third-row__option general-row__option">
                                            <div className="option__photo">
                                                <img className="mobile-tablet-picture" width="413" height="279" src={whiteBus} alt="Фото автобуса до 56 осiб"/>
                                            </div>
                                            <div className="option__description">
                                                <h3 className="description__name">Neoplan Setra Volvo</h3>
                                                <span className="description__info">Автобуси (до 56 осіб)</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="choice-buses__hidden-indicators">
                                    <div className="hidden-switches__blue-indicator"/>
                                    <div className="hidden-switches__grey-indicator"/>
                                    <div className="hidden-switches__grey-indicator"/>
                                    <div className="hidden-switches__grey-indicator"/>
                                    <div className="hidden-switches__grey-indicator"/>
                                </div>
                            </div>
                            <div className="third-block__manager-contacts">
                                <div className="manager-contacts__text">Співпраця з перевізниками, Ігор Овчаренко:</div>
                                <div className="manager-contacts__mail-address">
                                    <a href="index.js" className="mail-address__icon">.</a>
                                    <a href="index.js" className="mail-address__mail">travel.channel@gmail.com</a>
                                </div>
                                <div className="manager-contacts__mobile-number">
                                    <a href="index.js" className="mobile-number__icon">.</a>
                                    <a href="index.js" className="mobile-number__number">+38 (067) 212 95 88</a>
                                </div>
                                <div className="manager-contacts__viber">
                                    <a href="index.js" className="viber__icon">.</a>
                                    <a href="index.js" className="viber__number">+38 (093) 511 56 88</a>
                                </div>
                            </div>
                        </div>
                        <section className="main-column__fourth-block">
                            <form className="fourth-block__transport-rental" action="#" method="get">
                                <h2 className="transport-rental__title">Замовити оренду транспорту</h2>
                                <div className="transport-rental__registration-rent">
                                    <div className="registration-rent__first-row registration-rent__general-row">
                                        <input className="first-row__surname fields-general" type="text" id="second-name" value="Прізвище*" required/>
                                            <label htmlFor="second-name"/>
                                            <label htmlFor="first-name"/>
                                        <input className="first-row__name fields-general" type="text" id="first-name" value="Ім’я*" required/>
                                    </div>
                                    <div className="registration-rent__second-row registration-rent__general-row">
                                        <input className="second-row__mail-address fields-general" type="text" id="mail" value="Email"/>
                                            <label htmlFor="mail"/>
                                            <label htmlFor="telephone"/>
                                        <input className="second-row__telephone fields-general" type="text" id="telephone" value="Телефон*" required/>
                                    </div>
                                    <div className="registration-rent__third-row registration-rent__general-row">
                                        <div className="third-row__date-of-departure">
                                            <div className="date-of-departure__calendar"/>
                                            <div className="date-of-departure__select-date fields-general">
                                                <a href="index.js" className="select-date__date">Дата виїзду*</a>
                                                <a href="index.js" className="select-date__icon-choose">&#8250;</a>
                                            </div>
                                        </div>
                                        <div className="third-row__duration fields-general">
                                            <a href="index.js" className="duration__text">Тривалість*</a>
                                            <a href="index.js" className="duration__icon-choose">&#8250;</a>
                                        </div>
                                    </div>
                                    <div className="registration-rent__fourth-row registration-rent__general-row">
                                        <input className="fourth-row__route fields-general" type="text" id="route" value="Маршрут*" required/>
                                            <label htmlFor="route"/>
                                            <label htmlFor="passengers"/>
                                        <input className="fourth-row__number-passengers fields-general" type="text" id="passengers" value="Кількість пасажирів*" required/>
                                    </div>
                                    <div className="registration-rent__fifth-row registration-rent__general-row">
                                        <div className="fifth-row__age-passengers fields-general">
                                            <a href="index.js" className="age-passengers__text">Вікова група пасажирів*</a>
                                            <a href="index.js" className="age-passengers__icon-choose">&#8250;</a>
                                        </div>
                                        <label htmlFor="viber"/>
                                        <input className="fifth-row__viber fields-general" type="text" id="viber" value="Вайбер"/>
                                    </div>
                                    <textarea className="registration-rent__sixth-row" id="textarea">Ваш коментар</textarea>
                                    <label htmlFor="textarea"/>
                                </div>
                                <div className="transport-rental__bottom-block">
                                    <button className="bottom-block__button-write">Написати</button>
                                    <div className="bottom-block__description">* обов’язкове для заповнення поле</div>
                                </div>
                            </form>
                        </section>
                        <div className="main-column__fifth-block">
                            <form className="fifth-block" action="#" method="get">
                                <button className="fifth-block__button-order">Замовити Автобус</button>
                                <aside className="fifth-block__download-share-block">
                                    <div className="download-share-block__download">
                                        <a href="index.js" className="download__icon">.</a>
                                        <a href="index.js" className="download__text">Завантажити для друку</a>
                                    </div>
                                    <div className="download-share-block__share">
                                        <a href="index.js" className="share__text">Поділитись:</a>
                                        <a href="index.js" className="share__icon white">.</a>
                                    </div>
                                </aside>
                                <aside className="fifth-block__contacts-block">
                                    <div className="contacts-block__title-block">
                                        <span className="title-block__icon"/>
                                        <h2 className="title-block__text">Контакти</h2>
                                    </div>
                                    <div className="contacts-block__booking-manager">
                                        <div className="booking-manager__manager-contacts">
                                            <div className="manager-contacts__info-about-manager">
                                                <div className="info-about-manager__name">Анна Черненко</div>
                                                <div className="info-about-manager__position">спеціаліст з бронювання та керівник екскурсійних груп</div>
                                            </div>
                                            <div className="manager-contacts__mobile-numbers">
                                                <a href="index.js" className="mobile-numbers__number">+38-(032)-255-36-77</a>
                                                <a href="index.js" className="mobile-numbers__number">+38-(096)-481-36-55</a>
                                                <a href="index.js" className="mobile-numbers__number">+38-(093)-253-38-55</a>
                                                <a href="index.js" className="mobile-numbers__number">+38-(066)-825-99-55</a>
                                            </div>
                                            <div className="manager-contacts__mail">
                                                <a href="index.js">travel.channel@gmail.com</a>
                                            </div>
                                        </div>
                                        <div className="booking-manager__photo">
                                            <img className="photo__girl-first" src={photoGirl2} alt="Фото керівника екскурсійних груп"/>
                                            <img className="photo__girl-second" src={photoGirl3} alt="Фото керівника екскурсійних груп"/>
                                            <img className="photo__girl-third" src={photoGirl4} alt="Фото керівника екскурсійних груп"/>
                                        </div>
                                    </div>
                                </aside>
                            </form>
                            <section className="fifth-block__recommendations-block">
                                <div className="recommendations-block">
                                    <div className="recommendations-block__recommendations">
                                        <span className="recommendations__icon"/>
                                        <h2 className="recommendations__text">Нас рекомендують</h2>
                                    </div>
                                    <article className="recommendations-block__advisor recommendations-block__advisor-first recommendations-block__border-bottom">
                                        <div className="advisor__description-advisor">
                                            <div className="description__photo"/>
                                            <div className="description__info-about-advisor">
                                                <h3 className="info-about-advisor__name">Тетяна Вілсон</h3>
                                                <span className="info-about-advisor__position">туроператор «Тур»</span>
                                            </div>
                                        </div>
                                        <div className="advisor__recommendation">Наше агентство "Тур" співпрацює з операторам "Travel" впродовж 3 років...</div>
                                        <div className="advisor__read-more">
                                            <a href="index.js" className="read-more__more-about">Читати більше</a>
                                            <a href="index.js" className="read-more__angle-down">&#8250;</a>
                                        </div>
                                    </article>
                                    <article className="recommendations-block__advisor recommendations-block__advisor-second">
                                        <div className="advisor__description-advisor">
                                            <div className="description__photo"/>
                                            <div className="description__info-about-advisor">
                                                <h3 className="info-about-advisor__name">Тетяна Вілсон</h3>
                                                <span className="info-about-advisor__position">туроператор «Тур»</span>
                                            </div>
                                        </div>
                                        <div className="advisor__recommendation">Наше агентство "Тур" співпрацює з операторам "Travel" впродовж 3 років...</div>
                                        <div className="advisor__read-more">
                                            <a href="index.js" className="read-more__more-about">Читати більше</a>
                                            <span className="read-more__angle-down">&#8250;</span>
                                        </div>
                                    </article>
                                    <a href="index.js" className="recommendations-block__show-more">Показати ще</a>
                                    <div className="recommendations-block__hidden-switches">
                                        <a href="index.js" className="hidden-switches__angle-left hidden-switches__margin-top">.</a>
                                        <div className="hidden-switches__grey-indicator hidden-switches__margin-top"/>
                                        <div className="hidden-switches__grey-indicator hidden-switches__margin-top"/>
                                        <div className="hidden-switches__blue-indicator hidden-switches__margin-top"/>
                                        <div className="hidden-switches__grey-indicator hidden-switches__margin-top"/>
                                        <div className="hidden-switches__grey-indicator hidden-switches__margin-top"/>
                                        <div className="hidden-switches__grey-indicator hidden-switches__margin-top"/>
                                        <a href="index.js" className="hidden-switches__angle-right hidden-switches__margin-top">.</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <section className="page-content__tour-ordering-rules">
                        <h3 className="tour-ordering-rules__title">Правила замовлення турів</h3>
                        <div className="tour-ordering-rules__info">Замовлення туру відбувається у три основні етапи: запит, бронювання (підтвердження), оплата. У випадку відсутності місць пропонується додатковий проміжний етап між запитом та бронюванням: резерв (включення до списку очікування). Запит на наявність вільних місць в турах можна подати через: сайт (форма …</div>
                        <div className="tour-ordering-rules__read-more">
                            <a href="index.js" className="read-more__text">Читати більше</a>
                            <a href="index.js" className="read-more__arrow-down">.</a>
                        </div>
                    </section>
                </div>
            </main>
    );}

export default Transport;