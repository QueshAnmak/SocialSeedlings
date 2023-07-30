import MediaBox from "@components/MediaBox";
import React from 'react';

import styles from "./Body.module.css";

type Props = {
  media: string,
  description: string,
};

const Body = ( { media, description }: Props ) =>
{
  return (
    <div className={ styles.body }>
      <MediaBox src={ media } />
        <div className={ styles.description }>
          { description }
        </div>
    </div>
  );
};

export default Body;