import { useContext } from "react"
import ProductSmall from "../../components/product/productSmall"
import SliderIndicators from "../../components/slider/sliderIndicators"
import { ProductContext } from "../../context/productContext"
import './home.scss'

function Home() {

    const sliderImage = [
        {
            "image": 'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_1.webp',
            alt: 'image 1'
        },
        {
            "image": 'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_2.webp',
            alt: 'image 1'
        },
        {
            "image": 'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_3.webp',
            alt: 'image 1'
        },
        {
            "image": 'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_4.webp',
            alt: 'image 1'
        }
    ]

    const {productList} = useContext(ProductContext) 
    console.log(productList)

    return (
        <main>
            <SliderIndicators list={sliderImage}/>
            <section className="best_rating_article">
                <h3>Découvrez nos articles les plus appréciés</h3>
                <div className="product_gallery">
                    {productList.map((product, index) => ( <ProductSmall {...product} key={index} />))}
                </div>
            </section>
        </main>
    )
}

export default Home