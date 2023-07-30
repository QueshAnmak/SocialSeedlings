import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

export enum ProfilePictureSize
{
  SMALL = '40',
  MEDIUM = '64',
  LARGE = '96',
  EXTRA_LARGE = '192',
}

type Props = {
  src: string;
  size?: ProfilePictureSize;
};

const ProfilePicture = ( { src, size = ProfilePictureSize.SMALL }: Props ) =>
{
  return (
    <div className={
      `${ styles.profilePicture }
      ${ styles[ size ] }` }
    >
      <Image
        src={ src }
        alt=""
        className={styles.image}
        width={size}
        height={ size }
        objectFit="cover"
      />
      </div>
  );
};

export default ProfilePicture;