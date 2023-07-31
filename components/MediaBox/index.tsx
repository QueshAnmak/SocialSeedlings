import Image from "next/image";
import React, { useState } from 'react';
import styles from './index.module.css';
import { Blurhash } from "react-blurhash";

type Props = {
    src: string,
    alt?: string,
    blurhash?: string,
    bg?: boolean
};

const MediaBox = ( { src, alt = '', blurhash = '', bg = false }: Props ) =>
{
    const [isLoaded, setisLoaded] = useState(false)

    return (
        <div className={ styles.box }>

            <Blurhash
                hash={ blurhash }
                // height={ bg ? 600 : 440 }
                // width={ bg ? 400 : 300 }
                width={500}
                height={ 700 }
                className={`
                    ${styles.blurhash }
                    ${!bg && styles.nobg}
                 `}
                style={ {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    // width: '500px',
                    // height: '700px',
                    // marginRight: "-700px",
                } }
            />
           
            <Image
                src={ src }
                alt=""
                width={ 0 }
                height={ 0 }
                sizes="100vw"
                style={ {
                    width: '100%',
                    height: '100%',
                    objectFit: "contain",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    // zIndex: 1,
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                } }
                loading="lazy"
                onLoadingComplete={
                    () => setisLoaded( true )
                }
            />
        </div>
    );
};

export default MediaBox;