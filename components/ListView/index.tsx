import React from 'react';
import styles from './ListView.module.css';
import Post from "@components/Post.tsx";

type Props = {posts: any[]};

const ListView = ( { posts }: Props ) =>
{
    return (
        <section className={ styles.container }>
            {
                posts.map(
                    (post) => <Post postData={ post }/>
                )
            }
        </section>
    );
};

export default ListView;