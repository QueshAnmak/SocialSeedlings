import React from 'react';
import ProfilePicture, { ProfilePictureSize } from "@components/ProfilePicture";
import styles from "./Head.module.css";
import getRelativeTime from "../../utils/getRelativeTime";
import IconButton from "@components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

type Props = {
  profilePicture: string;
  name: string;
  postedAt: Date;
};

const Head = ( { profilePicture, name, postedAt }: Props ) =>
{
  const postedAtRelative = getRelativeTime( postedAt );

  return (
    <div className={ styles.head }>

      <Link
        href={ `/user/${ name }` }
        className="no-underline"
      >
        <div
          className={ styles.headLeft }
        >
          <ProfilePicture
            src={ profilePicture }
            // alt is first letter of name
            alt={ name[ 0 ].toUpperCase() }
            size={ ProfilePictureSize.SMALL } />

          <div className={ styles.details }>
            <div className={ styles.name }>
              { name }
            </div>
            <div className={ styles.postedAt }>
              { postedAtRelative }
            </div>
          </div>
        </div>
      </Link>

      <div className={ styles.icon }>
        <IconButton
          icon={
            <FontAwesomeIcon icon={ faEllipsis } />
          }
          onClickHandler={ null }
        />
      </div>
    </div>
  );
};

export default Head;


