import React from 'react';
import ProfilePicture from "@components/ProfilePicture";

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
    } else
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

  console.log( { postedAtSeconds, postedAtRelative } );

  return (
    <div>
      <ProfilePicture src="https://via.placeholder.com/150" />
      <div>
        <div>{ name }</div>
        <div>{ postedAtRelative }</div>
      </div>
    </div>
  );
};

export default Head;