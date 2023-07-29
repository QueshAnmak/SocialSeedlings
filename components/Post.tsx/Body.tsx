import MediaBox from "@components/MediaBox";
import React from 'react';

type Props = {
  media: string,
  description: string,
};

const Body = ( { media, description }: Props ) =>
{
  return (
    <div>
      <MediaBox src={ media } />
      <div>
        {description}
      </div>
    </div>
  );
};

export default Body;