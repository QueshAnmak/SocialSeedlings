import React from 'react';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import styles from './index.module.css';

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
                        name={postData.user.username}
                        postedAt={ new Date( postData.created_at ) }
                    />
                }
                <Body
                    mediaData={ postData }
                    description={ postData.description }
                    detailed={ detailed }
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