import React from 'react';
import styles from './index.module.css';
import Post from "@components/Post";

type Props = { posts: any[]; };

const ListView = ( { posts }: Props ) =>
{
    return (
        <section className={ styles.container }>
            {
                posts.map(
                    ( post ) =>
                        <Post postData={ post } />
                )
            }
        </section>
    );
};

export default ListView;