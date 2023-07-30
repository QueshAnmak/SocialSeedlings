import Image from "next/image";
import React from 'react';
import styles from './MediaBox.module.css';

type Props = {
    src: string,
};

const MediaBox = ( { src }: Props ) =>
{
    return (
        <Image
            src={ src }
            alt=""
            width={ 0 }
            height={ 0 }
            sizes="100vw"
            style={ { width: '100%', height: 'auto' } }
            loading="lazy"
        />
    );
};

export default MediaBox;