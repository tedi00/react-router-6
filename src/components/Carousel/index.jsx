import React, {useState} from 'react';
/*
        items: [
          "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg",
          "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg",
          "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg",
          "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg",
          "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg"
        ],
        current: 0,
*/

export const Carousel = (props) => {

    const [items, setItems] = useState(props.items);
    const [current, setCurrent] = useState(props.current);

    const  setCarouselPosition = (pos) => {
        let transform = "" + (-100 * pos) + "%";
        document.documentElement.style.setProperty("--carousel-transform-size", transform);
        setCurrent(pos);
    }
    const  goLeft = () => {
        if(current === 0) {
            setCarouselPosition(items.length - 1);
        } else {
            setCarouselPosition(current - 1);
        }
    }
    const goRight = () => {
        if(current === (items.length - 1)) {
            setCarouselPosition(0);
        } else {
            setCarouselPosition(current + 1);
        }
    }

    const mappedItems = items.map((item, i) => {
        return <div key={i} className="item">{item}</div>
    })
    const dots = items.map((item, i) => {
        return <div key={i} onClick={() => {setCarouselPosition(i)}} className="carousel-dots"></div>
    });

    return (
        <div className="carousel-container">
            <div onClick={goLeft} className="arrow-left"></div>
            {mappedItems}
            <div onClick={goRight} className="arrow-right"></div>
            <div className="dot-container">{dots}</div>
        </div>
    );

}
