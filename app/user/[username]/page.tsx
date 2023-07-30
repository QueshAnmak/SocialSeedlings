"use client";

import GridView from "@components/GridView";
import User from "@components/User";
import styles from "./index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../../api/v1/api";

export default function Page ( { params }: { params: { username: string; }; } )
{
  const [ userData, setUserData ] = useState( {} );
  const [ posts, setPosts ] = useState( [] );

  const getMorePhotos = () =>
  {
    console.log( params.username );
    return getUserProfile( params.username ).then(
      ( resp ) =>
      {
        setPosts( [ ...posts, ...resp ] );
        return resp;
      }
    );
  };

  useEffect( () =>
  {
    const resp = getMorePhotos();
    setUserData( resp[ 0 ] );
  }, [] );

  return (
    <section className={ styles.container }>

      <User />

      <InfiniteScroll
        dataLength={ posts.length }
        next={ getMorePhotos }
        hasMore={ true }
        loader={ <p>Loading...</p> }
        endMessage={ <p>Yay! You have seen it all</p> }
      >
        <GridView posts={ posts } />
      </InfiniteScroll>

    </section>
  );
}