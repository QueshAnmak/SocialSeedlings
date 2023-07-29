import React from 'react';
import ProfilePicture, { ProfilePictureSize } from "@components/ProfilePicture";

import styles from "./Head.module.css";

type Props = {
  name: string;
  postedAt: Date;
};

const Head = ( { name, postedAt }: Props ) =>
{
  /**
   * Row:
   *  Profile Picture
   *  Column:
   *    Name
   *    Posted At
   */

  const postedAtRelative = getRelativeTime( postedAt );

  return (
    <div className={ styles.head }>
      <ProfilePicture src="https://via.placeholder.com/150" size={ ProfilePictureSize.SMALL } />
      <div>
        <div >{ name }</div>
        <div>{ postedAtRelative }</div>
      </div>
    </div>
  );
};

export default Head;

function getRelativeTime ( postedAt: Date )
{
  const rtf = new Intl.RelativeTimeFormat( "en", {
    style: "narrow",
  } );

  // get unit dynamically
  const getUnit = ( seconds: number ) =>
  {
    const absSeconds = Math.abs( seconds );
    let unitName, unitValue;

    if ( absSeconds < 60 )
    {
      unitName = "second";
      unitValue = 1;
    }
    else if ( absSeconds < 3600 )
    {
      unitName = "minute";
      unitValue = 60;
    } else if ( absSeconds < 86400 )
    {
      unitName = "hour";
      unitValue = 3600;
    } else if ( absSeconds < 604800 )
    {
      unitName = "day";
      unitValue = 86400;
    } else if ( absSeconds < 2629743 )
    {
      unitName = "week";
      unitValue = 604800;
    } else if ( absSeconds < 31556926 )
    {
      unitName = "month";
      unitValue = 2629743;
    }
    else
    {
      unitName = "year";
      unitValue = 31556926;
    }

    return {
      "time": Math.round( seconds / unitValue ),
      "unit": unitName,
    };
  };

  const postedAtSeconds = Math.round( ( ( postedAt.getTime() - Date.now() ) ) / 1000 );
  const { time, unit } = getUnit( postedAtSeconds );
  const postedAtRelative = rtf.format( time, unit );
  return postedAtRelative;
}
