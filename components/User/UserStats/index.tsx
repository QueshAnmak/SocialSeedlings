import React from 'react';
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

export function UserStats ()
{
    return (
        <div className={ styles.stats }>
            { STATS.map(
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