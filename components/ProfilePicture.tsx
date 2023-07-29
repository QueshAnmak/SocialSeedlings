import React from 'react';

enum ProfilePictureSize
{
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  src: string;
  size?: ProfilePictureSize;
};

const ProfilePicture = ( { src, size=ProfilePictureSize.SMALL }: Props ) =>
{
  /**
   * Image of the user.
   */
  return (
    <div>
      <img src={ src } alt="" />
    </div>
  );
};

export default ProfilePicture;