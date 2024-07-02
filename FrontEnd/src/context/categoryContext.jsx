/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvier = ({ children }) => {
  const [categoryList, setCategoryList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategoryList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/category');
      setCategoryList(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>

  return (
    <CategoryContext.Provider value={categoryList}>
        {children}
    </CategoryContext.Provider>
  )

};
