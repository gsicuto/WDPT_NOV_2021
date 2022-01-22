import React from 'react';
import { Title } from '../styles';

export const Today = ({todayFoods}) => {
  return <div>
    <h2>Todays Foods</h2>
    <ul>
      {todayFoods.map(({quantity, name, calories})=> <li>{quantity} {name} - {calories * quantity} Cal</li>)}
    </ul>
    <Title>TotalCalories: {todayFoods.reduce(
      (acc, {calories, quantity}) => {
        return acc += (calories * quantity)
        }, 0)
      } </Title>
  </div>;
};
