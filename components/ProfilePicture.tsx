import React from 'react';
import Image from 'next/image';
import styles from './ProfilePicture.module.css';

export enum ProfilePictureSize
{
  SMALL = '48',
  MEDIUM = '64',
  LARGE = '96',
}

type Props = {
  src: string;
  size?: ProfilePictureSize;
};

const ProfilePicture = ( { src, size = ProfilePictureSize.SMALL }: Props ) =>
{
  return (
    <div className={ `${ styles.profilePicture } ${ styles[size] }` }>
      <Image className={styles.image} src={ src } alt="" width={size} height={size} />
    </div>
  );
};

export default ProfilePicture;