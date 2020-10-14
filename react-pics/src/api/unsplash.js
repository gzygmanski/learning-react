import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 8g1gH-2LX7CqNczgSeuUcZHX4aM9p48ewHd6k_aazNo'
  }
});
