import { createApi } from 'unsplash-js';
import config from "../../config";

const api = createApi({
  accessKey: config.api.accessKey,
} );


/**
 * Get random photos. This function will cache the data, and will only be called once to limit api usage. Ideally, whenever the function is called the photoCache should be updated.
 */
export const getRandomPhotos = async ( { count=10}:{count: number} ) => {
  const cacheId = `photosCache`;

  let photosCache: any = localStorage.getItem( cacheId );
  
  if ( photosCache ) {
    photosCache = JSON.parse( photosCache );

    const { expiryTime, data } = photosCache;
    
    if ( parseInt( expiryTime ) > Date.now() )
    {
      return data;
    }
  } 

  const resp = await api.photos.getRandom( { count } );
  const data = resp.response;

  localStorage.setItem(
    cacheId,
    JSON.stringify( {
      expiryTime: Date.now() + 3.156e+10,
      data: data
    } ) );

  return data;
};

/**
 * Retrieves the profile data for a given username. This function will cache the data, the expiry time of profile cache should be kept as low as possible since profiles can be updated frequently and we don't want to serve stale data.
 */
export const getUserProfile = async ( username: string ) => {
  
  
  const cacheId = `profileCache:${username}`;

  let profileCache: any = localStorage.getItem( cacheId );
  
  if ( profileCache ) {
    profileCache = JSON.parse( profileCache );

    const { expiryTime, data } = profileCache;
    
    if ( parseInt( expiryTime ) > Date.now() )
    {
      return data;
    }
  } 

  const resp = await api.users.getPhotos( { username } );
  const data = resp.response.results;

  console.log( resp );

  localStorage.setItem(
    cacheId,
    JSON.stringify( {
      expiryTime: Date.now() + 3.156e+10,
      data: data
    } ) );
  return data;

};