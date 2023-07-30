"use client";

import React, { useState } from 'react';
import styles from './index.module.css';
import Post from '@components/Post';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    posts: ( typeof Post )[];
    views: {
        name: string;
        icon: any;
        component: any;
    }[];
};

export function ViewSwitcher ( { posts, views }: Props )
{
    const [ viewIdx, setViewIdx ] = useState( 0 );

    const View = views[ viewIdx ].component;

    return (
        <div className={ styles.viewSwitcher }>
            <div className={ styles.viewSwitcherBar }>
                { views.map(
                    ( view, viewIdx ) =>
                        <ViewSwitcherButton
                            name={ view.name }
                            icon={ view.icon }
                            onClickHandler={ () => { setViewIdx( viewIdx ); } }
                        />
                ) }
            </div>
            <div className={ styles[ views[ viewIdx ].name ] }>
                <View posts={ posts } />
            </div>
        </div>
    );
}

const ViewSwitcherButton = (
    { name, icon, onClickHandler }: { name: string, icon: any, onClickHandler: any; }
) =>
{
    return (
        <button
            className={ `${ styles.viewBtn }` }
            onClick={ onClickHandler }
        >
            <FontAwesomeIcon icon={ icon } className={ styles.viewIcon } />
            <span className={ styles.viewName }>
                { name }
            </span>
        </button>
    );
};