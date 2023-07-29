import React from 'react';
import styles from './ListView.module.css';
import Post from "./Post.tsx";

type Props = {};

const ListView = ( { }: Props ) =>
{
    return (
        <section className={ styles.container }>
            {
                [ 1, 2, 3 ].map(
                    () => <Post />
                )
            }
        </section>
    );
};

export default ListView;