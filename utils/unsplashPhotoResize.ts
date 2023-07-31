/**
 * Url can be given 'w' and 'h' parameters to resize the image. If parameters are already present, use the same
 */
export default function unsplashPhotoResize ( url: string, width: number, height: number )
{
    // before first '&', add the width and height parameters
    const paramsStartIdx = url.indexOf( '&' );
    const resizeParams = `&w=${ width }&h=${ height }`;

    if ( paramsStartIdx !== -1 )
    {
        url = url.substring( 0, paramsStartIdx ) + resizeParams + url.substring( paramsStartIdx );
    }
    else
    {
        url += resizeParams;
    }
    
    console.log( 'unsplashPhotoResize', url );

    return url;
}