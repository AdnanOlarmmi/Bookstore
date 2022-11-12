import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categorySlice);

  const dispatch = useDispatch();
  const onCheck = (e) => {
    e.preventDefault();
    dispatch(category());
  };

  return (
    <div className='categories'>
      <button type="submit" onClick={onCheck}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
