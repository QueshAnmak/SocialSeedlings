import React from 'react';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';

type Props = {};

const Post = ( props: Props ) =>
{
    return (
        <div>
            <Head name="Hello" postedAt={new Date(1689986245555)} />
            <Body />
            <Foot />
        </div>
    );
};

export default Post;