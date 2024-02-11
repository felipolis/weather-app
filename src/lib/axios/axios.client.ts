import axios from 'axios';

const get = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}

export default {
  get,
};