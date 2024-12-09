'use client';

import React from 'react';
import style from './image.module.scss';
import Image from 'next/image';

type ImageComponentType = {
  customClass: string;
  src: string;
  alt: string;
};

const ImageComponent = ({ customClass, src, alt }: ImageComponentType) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      className={`${style.blur} ${style.img} ${customClass}`}
      // @ts-ignore
      onLoad={(img: string) => img.target.classList.remove(style.blur)}
    />
  );
};

export default ImageComponent;
