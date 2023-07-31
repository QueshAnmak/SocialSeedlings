import React from 'react';
import ProfilePicture, { ProfilePictureSize } from "@components/ProfilePicture";
import { UserInfo } from "./UserInfo";
import styles from "./index.module.css";
import { UserStats } from "./UserStats";

type Props = { userData };

const User = ( { userData }: Props ) =>
{
    console.log( { userData } )
    
    return (
        <section className={ styles.container }>
            <ProfilePicture
                src={ userData.user.profile_image.large }
                alt={ userData.user.name[0].toUpperCase() }
                size={ ProfilePictureSize.EXTRA_LARGE }
            />

            <div className={ styles.details }>
                <UserInfo userInfo={ userData } />
                <UserStats userStats={ userData } />
            </div>
        </section>
    );
};

export default User;


