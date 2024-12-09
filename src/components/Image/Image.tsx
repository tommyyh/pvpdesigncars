'use client';

import React from 'react';
import style from './image.module.scss';
import Image from 'next/image';

const ImageComponent = ({ customClass, ...props }: any) => {
  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt}
      fill
      placeholder="blur"
      className={`${style.blur} ${style.img} ${customClass}`}
      onLoad={(img: any) => img.target.classList.remove(style.blur)}
    />
  );
};

export default ImageComponent;
