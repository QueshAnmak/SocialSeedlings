"use client";

import styles from "./index.module.css";
import ListView from "@components/ListView";
import { getRandomPhotos } from "../../api/v1/api";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Metadata } from "next";

export default function NewsFeed ()
{
    const [ posts, setPosts ] = useState<any[]>( [] );

    const getMorePhotos = () =>
    {
        getRandomPhotos( { count: 10 } ).then(
            ( resp ) =>
            {
                setPosts( [ ...posts, ...resp ] );
            }
        );
    };

    useEffect( getMorePhotos, [] );

    return (
        
        <section className={ styles.container }>
            <InfiniteScroll
                dataLength={ posts.length }
                next={ getMorePhotos }
                hasMore={ true }
                loader={ <p>Loading...</p> }
                endMessage={ <p>Yay! You have seen it all</p> }
                className={ styles.infiniteScroll }
            >
                <ListView posts={ posts } />
            </InfiniteScroll>
        </section>
    );
}