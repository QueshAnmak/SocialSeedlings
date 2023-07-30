import React from 'react';
import { title, signature } from '@app/constants';
import styles from './index.module.css';


export const Title = () =>
{
    return (
        <div className={ styles.title }>{ title }</div>
    );
};

export const Signature = () =>
{
    return (
        <div className={ styles.signature }>{ signature }</div>
    );
};
