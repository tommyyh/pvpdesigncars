'use client';

import React from 'react';
import style from './image.module.scss';
import Image from 'next/image';

type ImageComponentType = {
  customClass: string;
  src: any;
  alt: any;
};

const ImageComponent = ({ customClass, src, alt }: ImageComponentType) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      className={`${style.blur} ${style.img} ${customClass}`}
      onLoad={(img: any) => img.target.classList.remove(style.blur)}
    />
  );
};

export default ImageComponent;
