async function cache (
    {
        key,
        callback,
        expiry = Date.now() + 3.156e+10
    }:
    {
        key: string,
        callback: () => Promise<any>,
        expiry?: number;
    }
)
{
    if(!key) {
        throw new Error('key is required');
    }
    
    let cache: any = localStorage.getItem( key );
    
    if ( cache ) {
        cache = JSON.parse( cache );
        const { expiryTime, data } = cache;
        
        if ( parseInt( expiryTime ) > Date.now() )
        {
            return data;
        }
    }
    
    const data = await callback();

    localStorage.setItem(
        key,
        JSON.stringify( {
            expiryTime: Date.now() + 3.156e+10,
            data: data
        } ) );

    return data;
};