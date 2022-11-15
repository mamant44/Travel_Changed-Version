import React from 'react';
import './Tour.scss';
import CustomRating from "../Rating";

function Tour({styles, price, stars, specialClass}) {

    return (
    <div className={`row-list__tour-item row-list__${specialClass}`}>
        <div className={`tour-item__picture tour-item__${styles}`}>
            <div className="picture__hit-sale">
                <span className="hit-sale__text hit-novelty__text ">Хіт продажів</span>
            </div>
        </div>
        <div className="tour-item__tour-name-wrapper">
            <h3 className="tour-name-wrapper__tour-name">Манява — Драгобрат — полонина Перці </h3>
            <div className="tour-name-wrapper__tour-rating">
                <CustomRating start="0" stop="5" step={stars}/>
                <span className="tour-rating__reviews">14 відгуків</span>
            </div>
        </div>
        <div className="tour-item__date-time-tour">
            <div className="date-time-tour__choose-date">
                <div className="choose-date__icon-calendar"/>
                <div className="choose-date__date-wrapper">
                    <span className="date-wrapper__date">Сб - Нд, 16 - 17.11.2019</span>
                    <div className="date-wrapper__icon-choose"/>
                </div>
            </div>
            <div className="date-time-tour__tour-time-wrapper">
                <div className="tour-time-wrapper__tour-time">
                    <div className="tour-time__icon"/>
                    <span className="tour-time__time">1 день</span>
                </div>
                <div className="tour-time-wrapper__number-of-people">
                    <div className="number-of-people__icon"/>
                    <span className="number-of-people__number">10+</span>
                </div>
            </div>
        </div>
        <div className="tour-item__price-order-wrapper">
            <div className="price-order-wrapper__price">
                <span className="price__text">Ціна:</span>
                <span className="price__number">{price}</span>
                <span className="price__currency">грн</span>
                <div className="price__attention attention">
                    <span className="attention__text">20 грн</span>
                    <span className="attention__icon"/>
                </div>
            </div>
            <div className="price-order-wrapper__order-wrapper">
                <button className="order-wrapper__order-tour">Замовити Тур</button>
            </div>
        </div>
    </div>
    );
}

export default Tour;
