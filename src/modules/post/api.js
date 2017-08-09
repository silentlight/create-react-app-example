import { get } from 'utils/request';

const fetchPots = () => {
  return get('/user/posts')
};

export default {
  fetchPots,
};