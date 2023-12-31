import React from 'react';
import styles from './index.module.css';
import Post from "@components/Post";
import Masonry from "react-masonry-css";

type Props = { posts: any[]; };

const GridView = ( { posts }: Props ) =>
{
    return (
        <section className={ styles.container }>
            <Masonry
                className={ styles.grid }
                breakpointCols={ 2 }
                columnClassName="grid-col"
            >
                {
                    posts.map(
                        ( post ) => <Post postData={ post } detailed={ false }/>
                    )
                }
            </Masonry>
        </section>
    );
};

export default GridView;