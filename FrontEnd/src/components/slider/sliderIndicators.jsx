/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import './sliderIndicators.scss'


function SliderIndicators(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideRight = () => {
        setCurrentIndex((currentIndex + 1) % props.list.length)
    }
    const slideLeft = () => {
        setCurrentIndex((currentIndex - 1 + props.list.length) % props.list.length)
    }

    const indicatorsItems = () => {
        const items = []
        for (let i = 0; i < props.list.length; i++) {
            items.push(
                <div className={`indicators_bar ${i === currentIndex ? 'active': ''}`} key={i}></div>
            )
        }
        return items
    }

    return (
        <section className="slider_indicators">
            <img className="slider_img" src={props.list[currentIndex].image} alt={props.list[currentIndex].alt} />
            <button className="arrow_left" onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="arrow_right" onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></button>
            <div className="indicators"> {indicatorsItems()} </div>
        </section>
    )
}

export default SliderIndicators