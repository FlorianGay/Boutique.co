import SliderIndicators from "../../components/slider/sliderIndicators"

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

    return (
        <main>
            <SliderIndicators list={sliderImage}/>
        </main>
    )
}

export default Home