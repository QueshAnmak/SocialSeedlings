import MediaBox from "@components/MediaBox";
import React from 'react';

import styles from "./Body.module.css";
import unsplashPhotoResize from "../../utils/unsplashPhotoResize";

type Props = {
  mediaData: any,
  description: string,
  detailed?: boolean,
};

const Body = ( { mediaData, description, detailed=true }: Props ) =>
{
  return (
    <div className={ `
        ${ styles.body }
        ${ detailed ? styles.detailed : styles.compact}
    ` }>
      <MediaBox
        // src={ unsplashPhotoResize( mediaData.urls.regular, 360, 640 ) }
        src={ mediaData.urls.regular }
        alt={ mediaData.alt_description }
        blurhash={ mediaData.blur_hash }
        bg={ detailed }  
      />
      { description &&
        <div className={ styles.description }>
          { description }
        </div>}
    </div>
  );
};

export default Body;
