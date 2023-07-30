import React from 'react';
import styles from './index.module.css';

export function UserInfo ()
{
    return (
        <div className={ styles.userInfo }>
            <div className={ styles.fullname }>
                John Doe
            </div>
            {/* <div className={ styles.username }>
                johnny
            </div> */}
            <div className={ styles.description }>
                Lores ipsum dolor sit amet consectetur adipiscing elit.
            </div>
        </div>
    );
}
