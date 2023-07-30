import React from 'react';
import styles from './index.module.css';
import Post from "@components/Post.tsx";
import Masonry from "react-masonry-css";

type Props = { posts: any[]; };

const GridView = ( { posts }: Props ) =>
{
    return (
        <section className={ styles.container }>
            {/* <div className={ styles.grid }> */ }
            <Masonry
                className={ styles.grid }
                breakpointCols={ 2 }
                // columnClassName="grid"
            >
                {
                    posts.map(
                        ( post ) => <Post postData={ post } detailed={ false }/>
                    )
                }
            </Masonry>
            {/* </div> */}
        </section>
    );
};

export default GridView;