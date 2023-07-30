import React, { useState } from 'react';
import styles from './index.module.css';

const STATS = [
    {
        name: 'Posts',
        value: 100
    },
    {
        name: 'Followers',
        value: 1000
    },
    {
        name: 'Following',
        value: 2345
    }
];

export function UserStats ( { userStats }: { userStats: any; } )
{
    const [ stats, setStats ] = useState( [
        {
            name: 'Posts',
            value: userStats.user.total_photos
        },
        {
            name: 'Followers',
            value: userStats.user.total_collections
        },
        {
            name: 'Following',
            value: userStats.user.total_likes
        }
    ] );

    return (
        <div className={ styles.stats }>
            { stats.map(
                ( stat ) =>
                    <Stat
                        name={ stat.name }
                        value={ stat.value }
                    />
            ) }
        </div>
    );
}

const Stat = (
    { name, value }: { name: string, value: number; }
) =>
{
    return (
        <div className={ styles.stat }>
            <div className={ styles.statValue }>
                { value }
            </div>
            <div className={ styles.statName }>
                { name }
            </div>
        </div>
    );
};