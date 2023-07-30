import React from 'react';
import ProfilePicture, { ProfilePictureSize } from "@components/ProfilePicture";
import { UserInfo } from "./UserInfo";
import styles from "./index.module.css";
import { UserStats } from "./UserStats";

type Props = {};

const User = ( { }: Props ) =>
{
    return (
        <section className={ styles.container }>
            <ProfilePicture
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
                size={ ProfilePictureSize.EXTRA_LARGE }
            />

            <div className={styles.details}>
                <UserInfo />
                <UserStats />
            </div>
        </section>
    );
};

export default User;


