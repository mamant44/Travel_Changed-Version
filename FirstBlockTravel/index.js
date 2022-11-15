import React from 'react'
import './FirstBlockTravel.scss'

function FirstBlock() {

    return (
        <div className="main-content__first-block">
            <div className="first-block">
                <aside className="first-block__order-download">
                    <div className="order-download__order-tour order-download__order-download-tour">
                        <span className="order-tour__icon"/>
                        <a href="index.js" className="order-tour__order order-download__text">Замовити тур</a>
                        <span className="order-tour__arrow-right"/>
                    </div>
                    <div className="order-download__download-tours order-download__order-download-tour">
                        <span className="download-tours__icon"/>
                        <a href="index.js" className="download-tours__download order-download__text">Завантажити розклади турів</a>
                        <span className="download-tours__arrow-right"/>
                    </div>
                </aside>
                <form className="first-block__tour-selection first-block__general-properties" action="#" method="get">
                    <div className="tour-selection__selection">
                        <span className="selection__icon"/>
                        <a href="index.js" className="selection__selection-tour">Підбір туру</a>
                        <span className="selection__arrow-right"/>
                    </div>
                    <div className="tour-selection__filters">
                        <div className="filters__first-filter">
                            <div className="first-filter__date-of-departure first-filter__return-departure">
                                <div className="date-of-departure__icon return-departure__icon"/>
                                <a href="index.js" className="date-of-departure__departure return-departure__date">Дата виїзду</a>
                                <span className="date-of-departure__icon-choose return-departure__icon-choose"/>
                            </div>
                            <div className="first-filter__return-date first-filter__return-departure">
                                <div className="return-date__icon return-departure__icon"/>
                                <a href="index.js" className="return-date__return return-departure__date">Дата повернення</a>
                                <span className="return-date__icon-choose return-departure__icon-choose"/>
                            </div>
                        </div>
                        <div className="filters__second-filter">
                            <div className="second-filter__number-of-days second-filter__days-price">
                                <div className="number-of-days__duration days-price__text">Тривалість днів</div>
                                <div className="number-of-days__tour-duration-range days-price__range">
                                    <div className="tour-duration-range__first-circle duration-price__first-circle duration-price__circle"/>
                                    <div className="tour-duration-range__scale duration-price__scale"/>
                                    <div className="tour-duration-range__second-circle duration-price__second-circle duration-price__circle"/>
                                </div>
                                <div className="number-of-days__minimum-maximum days-price__minimum-maximum">
                                    <span className="minimum-maximum__minimum">від 1</span>
                                    <span className="minimum-maximum__maximum">до 14</span>
                                </div>
                            </div>
                            <div className="second-filter__price second-filter__days-price">
                                <div className="price__value days-price__text">Вартість, грн</div>
                                <div className="price__price-range days-price__range">
                                    <div className="price-range__first-circle duration-price__first-circle duration-price__circle"/>
                                    <div className="price-range__scale duration-price__scale"/>
                                    <div className="price-range__second-circle duration-price__second-circle duration-price__circle"/>
                                </div>
                                <div className="price__minimum-maximum days-price__minimum-maximum">
                                    <span className="minimum-maximum__minimum">від 0,00</span>
                                    <span className="minimum-maximum__maximum">до 3,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="filters__third-filter">
                            <div className="third-filter__direction-wrapper third-filter__wrapper">
                                <a href="index.js" className="direction-wrapper__direction direction-type-subjects__text">Напрямок</a>
                                <span className="direction-wrapper__icon-choose direction-type-subjects__icon"/>
                            </div>
                            <div className="third-filter__type-wrapper third-filter__wrapper">
                                <a href="index.js" className="type-wrapper__type direction-type-subjects__text">Тип</a>
                                <span className="type-wrapper__icon-choose direction-type-subjects__icon"/>
                            </div>
                            <div className="third-filter__subjects-wrapper third-filter__wrapper">
                                <a href="index.js" className="subjects-wrapper__subjects direction-type-subjects__text">Тематика</a>
                                <span className="subjects-wrapper__icon-choose direction-type-subjects__icon"/>
                            </div>
                        </div>
                        <div className="filters__clear-or-select">
                            <span className="clear-or-select__clear clear-select">Очистити</span>
                            <button className="clear-or-select__select clear-select">Підібрати</button>
                        </div>
                    </div>
                </form>
                <aside className="first-block__ad-block first-block__general-properties">
                    <div className="ad-block__ad-wrapper">
                        <div className="ad-wrapper__icon"/>
                        <span className="ad-wrapper__ad">Оголошення</span>
                    </div>
                    <div className="ad-block__info-about">
                        <div className="info-about__info">В карточці туру ви можете дізнатись вільні дати, тривалість туру, а також потрібну кількість людей.</div>
                        <div className="info-about__card">
                            <div className="card__photo"/>
                        </div>
                    </div>
                </aside>
                <aside className="first-block__gift-certificate">
                    <div className="gift-certificate__icons">
                        <div className="icons__line"> &#822;</div>
                        <div className="icons__icon"/>
                        <div className="icons__line"> &#822;</div>
                    </div>
                    <div className="gift-certificate__text">Подарунковий <br/> сертифікат</div>
                </aside>
                <section className="first-block__news-block first-block__general-properties">
                    <div className="news-block__news">
                        <div className="news-mailing__icon"/>
                        <h2 className="news__title news-mailing-reviews__title">Новини</h2>
                    </div>
                    <article className="news-block__first-news news-block__news-general">
                        <h3 className="first-news__news news-general">Додано нову подорож «Шафран-тур на Драгобрат»</h3>
                        <span className="first-news__date date-general">22.11.2019</span>
                    </article>
                    <article className="news-block__second-news news-block__news-general">
                        <h3 className="second-news__news news-general">Оновлення дизайну сайту</h3>
                        <span className="second-news__date date-general">22.11.2019</span>
                    </article>
                    <article className="news-block__third-news news-block__news-general ">
                        <h3 className="third-news__news news-general">Показ весільних суконь на Балу св. Валентина</h3>
                        <span className="third-news__date date-general">22.11.2019</span>
                    </article>
                    <a href='index.js' className="news-block__all-news general-show-more">Показати всі новини</a>
                </section>
                <section className="first-block__reviews-block first-block__general-properties">
                    <div className="reviews-block__reviews">
                        <div className="reviews__icon"/>
                        <h2 className="reviews__title news-mailing-reviews__title">Відгуки</h2>
                    </div>
                    <article className="reviews-block__first-review">
                        <div className="first-review__person-review">
                            <div className="person-review__photo-person-first"/>
                            <div className="person-review__info-about-review">
                                <h3 className="info-about-review__username info-about-review__first-user">Григоряш Вероніка</h3>
                                <div className="info-about-review__date-rating-review info-about-review__first-date">
                                    <span className="date-rating-review__date">22.11.2019</span>
                                    <time className="date-rating-review__time">22:10</time>
                                    <span className="date-rating-review__rating">
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#E9E9E9"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="first-review__tour">
                            <div className="tour__first-part">Тур: <span className="tour-color">Сиро-Винний тур </span></div>
                            <span className="tour__second-part tour-color">Закарпатським та Прикарпатськи…</span>
                        </div>
                        <div className="first-review__review">Чудовий тур! Отримала безліч вражень, обов’язково спробую ще!</div>
                    </article>
                    <article className="reviews-block__second-review">
                        <div className="second-review__person-review">
                            <div className="person-review__photo-person-second">
                                <div className="photo-person-second__photo">КП</div>
                            </div>
                            <div className="person-review__info-about-review">
                                <h3 className="info-about-review__username info-about-review__second-user">Кононієнко Петро</h3>
                                <div className="info-about-review__date-rating-review info-about-review__second-date">
                                    <span className="date-rating-review__date">22.11.2019</span>
                                    <time className="date-rating-review__time">14:09</time>
                                    <span className="date-rating-review__rating">
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>
                                        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#E9E9E9"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="second-review__tour">Тур: <span className="tour-color tour-color__second"> 10 родзинок Закарпаття</span></div>
                        <div className="second-review__review">Від туру залишились тільки позитивні емоції. Дякую організаторам!</div>
                    </article>
                    <a href="index.js" className="reviews-block__all-reviews general-show-more">Показати всі відгуки</a>
                </section>
                <aside className="first-block__mailing-choice first-block__general-properties">
                    <div className="mailing-choice__mailing">
                        <div className="mailing__icon news-mailing__icon"/>
                        <span className="mailing__title news-mailing-reviews__title">Розсилка</span>
                    </div>
                    <div className="mailing-choice__choice">
                        <a href="index.js" className="choice__tourist-agent general-show-more">Я — турист</a>
                        <a href="index.js" className="choice__tourist-agent general-show-more">Я — турагент</a>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default FirstBlock;