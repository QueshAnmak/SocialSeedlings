"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import styles from "./Foot.module.css";
import ButtonGroup from "../ButtonGroup";

type Props = {
  likes: number,
  comments: number,
};

const BUTTONS = [
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

const Foot = ( { likes, comments }: Props ) =>
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
    <div className={ styles.foot }>
      <div className={styles.buttonGroup}>
        <ButtonGroup buttons={ BUTTONS } />
      </div>

      <div className={ styles.counterGroup }>
        <Counter name="Likes" count={ likesCount } />
        •
        <Counter name="Comments" count={ commentsCount } />
      </div>
    </div>
  );
};

export default Foot;

function Counter ( { name, count }: { name: string, count: number; } )
{
  return (
    <div className={ styles.counter }>
      <div className={ styles.counterCount }>{ count }</div>
      <div className={ styles.counterName }>{ name }</div>
    </div>
  );
}