import React, { useState } from 'react';
import styles from './index.module.css';

type Props = {
    userInfo: any;
}

export function UserInfo ({ userInfo }: Props)
{
    // const [userInfoData, setUserInfoData] = useState({
    //     name: userInfo.name,
    //     bio: userInfo.bio
    // })

    return (
        <div className={ styles.userInfo }>
            <div className={ styles.fullname }>
                {userInfo.user.name}
            </div>
            <div className={ styles.description }>
                {userInfo.user.bio}
            </div>
        </div>
    );
}
