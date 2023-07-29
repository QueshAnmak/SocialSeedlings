"use client";

import React from 'react';
import IconButton from "@components/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from "./Foot.module.css";

type Props = {
  likes: number,
  comments: number,
  description: string,
};

const buttons = [
  {
    name: 'like',
    icon: <FontAwesomeIcon icon={ faHeart } />,
    onClickHandler: () => { },
  },
  {
    name: 'comment',
    icon: <FontAwesomeIcon icon={ faComment } />,
    onClickHandler: () => { },
  },
  {
    name: 'share',
    icon: <FontAwesomeIcon icon={ faPaperPlane } />,
    onClickHandler: () => { },
  }
];

const Foot = ( { likes, comments, description }: Props ) =>
{
  const [ likesCount, setLikesCount ] = React.useState( likes );
  const [ commentsCount, setCommentsCount ] = React.useState( comments );

  const counters = [
    {
      "name": "likes",
      "count": likesCount
    },
    {
      "name": "comments",
      "count": commentsCount
    }
  ];

  return (
    <div>
      <div>
        {
          // button group
          buttons.map(
            ( buttonData ) =>
            {
              const { icon, onClickHandler } = buttonData;
              return (
                <IconButton
                  icon={ icon }
                  onClickHandler={ onClickHandler }
                />
              );
            } )
        }
      </div>

      <div className={ styles.counterGroup }>
        <Counter name="Likes" count={ likesCount } />
        •
        <Counter name="Comments" count={ commentsCount } />
      </div>

      {/* <div>{ description }</div> */ }
    </div>
  );
};

export default Foot;

function Counter ( { name, count }: { name: string, count: number; } )
{
  return (
    <div className={ styles.counter }>
      <div>{ count }</div>
      <div>{ name }</div>
    </div>
  );
}
