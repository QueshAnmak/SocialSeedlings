import React from 'react';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import styles from './Post.module.css';

type Props = {
    postData: any,
    detailed?: boolean,
};

const Post = ( { postData, detailed = true }: Props ) =>
{
    return (
        <div className={ styles.padding }>
            <div className={ `
            ${ styles.container } 
            ${ detailed && styles.detailed }
            ` }>
                { detailed &&
                    <Head
                        profilePicture={ postData.urls.thumb }
                        name={postData.user.name}
                        postedAt={ new Date( postData.created_at ) }
                    />
                }
                <Body
                    media={ postData.urls.regular }
                    description={postData.description}
                />
                { detailed &&
                    <Foot
                        likes={ postData.likes }
                        comments={ postData.downloads }
                    />
                }
            </div>
        </div>
    );
};

export default Post;