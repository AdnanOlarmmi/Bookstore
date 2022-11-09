import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const onCheck = (e) => {
    e.preventDefault();
    dispatch(checkCategory());
  };

  return (
    <div>
      <button type="submit" onClick={onCheck}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
