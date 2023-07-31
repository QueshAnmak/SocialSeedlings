"use client";

import GridView from "@components/GridView";
import User from "@components/User";
import styles from "./index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../../api/v1/api";
import { faBars, faGrip } from "@fortawesome/free-solid-svg-icons";
import ListView from "@components/ListView";
import { ViewSwitcher } from "@components/ViewSwitcher";

const Views = [
  {
    name: 'List',
    component: ListView,
    icon: faBars
  },
  {
    name: 'Grid',
    component: GridView,
    icon: faGrip
  }
];

export default function Page ( { params }: { params: { username: string; }; } )
{
  const [ userData, setUserData ] = useState( null );
  const [ posts, setPosts ] = useState( [] );

  const getMorePhotos = () =>
  {
    getUserProfile( params.username ).then(
      ( resp ) =>
      {
        setPosts( [ ...posts, ...resp ] );
        setUserData( resp[ 0 ] );
      }
    );
  };

  useEffect( getMorePhotos, [] );

  console.log( { userData } );


  return (
    <section className={ styles.container }>

      { userData && <User userData={ userData } /> }

      <InfiniteScroll
        dataLength={ posts.length }
        next={ getMorePhotos }
        hasMore={ true }
        // loader={ <p>Loading...</p> }
        loader={ '' }
        endMessage={ <p>Yay! You have seen it all</p> }
        className={ styles.infiniteScroll }
      >
        <ViewSwitcher
          views={ Views }
          posts={ posts }
        />
      </InfiniteScroll>

    </section>
  );
}