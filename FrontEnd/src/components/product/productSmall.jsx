/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"


function ProductSmall() {
    return (
        <figure>
            <Link>
                <img src="" alt="" />
                <figcaption>
                    <h3>Nom de l'article</h3>
                    <p>Categorie de l'article</p>
                    <p>Note de l'article</p>
                    <p>Prix de l'article</p>
                </figcaption>
            </Link>
        </figure>
    )
}

export default ProductSmall