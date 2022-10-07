import * as contentful from 'contentful';

export default contentful.createClient({
    space: import.meta.env.VITE_CONTENTFULL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFULL_DELIVERY_API_ACCESS_TOKEN,
  });