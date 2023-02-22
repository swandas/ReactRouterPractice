import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Category from './Category'

export default function Categories() {
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(category);
  };

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        {Object.keys(categories).map((category) => {
          return (
            <li key={category}>
              <button onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>

      <Routes>
        <Route
          path="/:category"
          element={<Category categories={categories} />}
        />
      </Routes>
    </main>
  );
}
