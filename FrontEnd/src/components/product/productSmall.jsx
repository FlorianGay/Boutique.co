/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import './productSmall.scss'
import RatingStars from "../ratingStars/ratingStars"


function ProductSmall({image, name, category, rating, price}) {
    return (
        <figure className="product_small">
            <Link>
            <div className="product_img">
                <img src={image} alt={name} />
            </div>
                <figcaption>
                    <h5>{name}</h5>
                    <p>{category}</p>
                    <p>{price} €</p>
                    <p> <RatingStars rating={rating} /> </p>
                </figcaption>
            </Link>
        </figure>
    )
}

export default ProductSmall