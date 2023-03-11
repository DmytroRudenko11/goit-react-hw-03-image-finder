import axios from 'axios';

const API_KEY = '33555589-7466b1bd2f6ce55c871b4b965';
const URL = 'https://pixabay.com/api/';

export async function getImage(query, page, per_page) {
  try {
    const configs = {
      baseURL: URL,

      params: {
        key: API_KEY,
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        page,
        per_page,
      },
    };
    const response = await axios(configs);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
