/* eslint-disable react/prop-types */
import { CategoryProvier } from "./src/context/categoryContext"
import { ProductProvider } from "./src/context/productContext"


const AllProvider = ({children}) => {
    return (
        <ProductProvider>
            <CategoryProvier>
                {children}
            </CategoryProvier>
        </ProductProvider>
    )
}

export default AllProvider