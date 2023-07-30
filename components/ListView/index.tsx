import React from 'react';
import styles from './ListView.module.css';
import Post from "@components/Post.tsx";

type Props = {posts: []};

const ListView = ( { posts }: Props ) =>
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