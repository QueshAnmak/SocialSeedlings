import React from 'react';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import styles from './index.module.css';

type Props = {};

const Post = ( props: Props ) =>
{
    return (
        <div className={ styles.container }>
            <Head
                name="Hello"
                postedAt={ new Date( 1689986245555 ) } />
            <Body
                media="https://via.placeholder.com/320"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <Foot
                likes={ 123 }
                comments={ 12 }
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
    );
};

export default Post;