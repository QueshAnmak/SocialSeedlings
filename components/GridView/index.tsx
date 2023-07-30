import React from 'react';
import styles from './index.module.css';
import Post from "@components/Post.tsx";

type Props = { posts: []; };

const GridView = ( { posts }: Props ) =>
{
    return (
        <section className={ styles.container }>
            <div className={ styles.grid }>
                <Post detailed={ false } />
                <Post detailed={ false } />
                <Post detailed={ false } />
                <Post detailed={ false } />
                <Post detailed={ false } />
            </div>
        </section>
    );
};

export default GridView;