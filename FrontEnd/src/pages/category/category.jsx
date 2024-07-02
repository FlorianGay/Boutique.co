import { useContext, useState } from 'react';
import { CategoryContext } from '../../context/categoryContext';
import './category.scss';
import ProductSmall from '../../components/product/productSmall';
import axios from 'axios';

function Category() {
  const categoryList = useContext(CategoryContext);
  const [productListFiltered, setProductListFiltered] = useState(null);

  const fetchProductByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/category/${categoryId}`);
      setProductListFiltered(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (category) => {
    fetchProductByCategory(category);
  };

  console.log(categoryList);
  return (
    <main>
      <h2 className="category_title">Choissiez une catégorie : </h2>
      <div className="category_gallery">
        {categoryList.map((category) => (
          <button onClick={() => handleClick(category._id)} key={category._id}>
            <figure>
              <img src={category.image} alt={category.name} />
              <figcaption>{category.name}</figcaption>
            </figure>
          </button>
        ))}
      </div>
      <div className="product_gallery">
        {productListFiltered?.map((product, index) => (
          <ProductSmall {...product} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Category;
