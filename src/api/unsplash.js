//all related configuration code
import axios from 'axios';

//creating a customized instance
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID 03e22a179f675f6e2d5c7bb73877dc3d6aff092f9579dca83712c319a9459f7c'
  }
});