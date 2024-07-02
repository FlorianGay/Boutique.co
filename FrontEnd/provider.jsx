/* eslint-disable react/prop-types */
import { ProductProvider } from "./src/context/productContext"


const AllProvider = ({children}) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}

export default AllProvider