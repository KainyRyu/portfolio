import React from 'react';
import style from './TopBtln.module.scss';

export default function TopBtn() {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  return (
    <button className={style.container} onClick={handleButtonClick}>
      ↑
    </button>
  );
}
