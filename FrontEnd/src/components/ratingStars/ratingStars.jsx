/* eslint-disable react/prop-types */
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function RatingStars(props) {

    const starsList = (rating) => {
        let stars = []

        for (let i = 0; i < 5; i++) {
            if ( i < rating) {
                stars.push(
                    <FontAwesomeIcon icon={faStar} style={{color : 'orange'}} key={i}/>
                )
            } else {
                stars.push(
                    <FontAwesomeIcon icon={faStar} style={{color : 'white'}} key={i}/>
                )
            }
        }
        return stars
    }

    return (
        <>
        {starsList(props.rating)}
        </>
    )
}

export default RatingStars