import capitalizeSentence from "./capitalizeSentence";

export function getRelativeTime ( postedAt: Date )
{
    const rtf = new Intl.RelativeTimeFormat( "en", {
        style: "long",
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
    const postedAtRelative = capitalizeSentence(rtf.format( time, unit ));

    return postedAtRelative;
}
