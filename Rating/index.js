import React from 'react';
import Rating from "react-rating";
import './Rating.scss';

function CustomRating() {

    const SVGIcon = () =>
        <svg className="rating" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.983 4.535a.34.34 0 00-.268-.237L7.971 3.74 6.287.193A.333.333 0 005.989 0a.33.33 0 00-.298.196L4.028 3.753l-3.743.583a.34.34 0 00-.269.238.356.356 0 00.086.355L2.82 7.687l-.628 3.905a.351.351 0 00.133.34.319.319 0 00.35.027l3.342-1.855 3.352 1.834c.05.026.1.039.153.039a.343.343 0 00.322-.428l-.648-3.883 2.7-2.773a.352.352 0 00.088-.358z" fill="#FFB947"/></svg>;

    return (
        <Rating className="tour-rating__rating"
            emptySymbol={<SVGIcon href="#icon-star-empty" className="icon" />}
            fullSymbol={<SVGIcon href="#icon-star-full" className="icon" />}
        />
    );
}

export default CustomRating;
