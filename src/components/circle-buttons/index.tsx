import './index.css';

import React, { FC } from 'react';
interface CircleButtonProps {
  value: number;
  onClick: () => void;
}
const CircleButton: FC<CircleButtonProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="circleButton"
    >
      {value}
    </button>
  );
};

export default CircleButton;
