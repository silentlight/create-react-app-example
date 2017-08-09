import { get, post, destroy } from 'utils/request';

const login = (email, password) => {
  return post('/auth/sign_in', { email, password })
};

const logout = () => {
  return destroy('/auth/sign_out')
};

const validateToken = (params) => {
  return get('/auth/validate_token', params)
};

export default {
  login,
  logout,
  validateToken,
};