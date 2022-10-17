import React, { useEffect, useState } from 'react';
import style from './Profile.module.scss';
import { SUMMARY } from '../../lib/contents';
import Main from 'assets/bwbg.gif';
import useGlobalContext from '../../context/useGlobalContext';

export default function Profile() {
  const { scrollPosition } = useGlobalContext();

  const imageScale = 1.2 - scrollPosition / 500;

  return (
    <div className={style.container}>
      <figure className={style.figure_container}>
        <div className={style.img_container}>
          <img
            src={Main}
            alt="Kainy"
            style={{ transform: `scale(${imageScale > 1 ? imageScale : 1})` }}
          />
        </div>
        <figcaption>
          <b>Kainy</b> in the South of France back in 2019, and now she misses it so bad. Especially
          the croissants
        </figcaption>
      </figure>
      <div className={style.intro}>{SUMMARY}</div>
    </div>
  );
}
