import React from 'react';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import styles from './Post.module.css';

type Props = { detailed?: boolean; };

const Post = ( { detailed = true }: Props ) =>
{
    return (
        <div className={styles.padding}>
            <div className={ `
            ${ styles.container } 
            ${ detailed && styles.detailed }
            ` }>
                { detailed &&
                    <Head
                        name="Ahmad Dormat"
                        postedAt={ new Date( 1689986245555 ) }
                    />
                }
                <Body
                    // media={ `https://fakeimg.pl/243x${ Math.floor(Math.random() * ( 400 - 100 ) + 100)}`}
                    media="https://images.unsplash.com/photo-1689852484069-3e0fe82cc7c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                { detailed &&
                    <Foot
                        likes={ 123 }
                        comments={ 12 }
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    />
                }
            </div>
        </div>
    );
};

export default Post;