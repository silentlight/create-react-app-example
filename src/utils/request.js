import axios from 'axios';

export function post(endpoint, data, options) {
  return axios.post(endpoint, data);
}

export function get(endpoint, params, options) {
  return axios.get(endpoint, { params });
}

export function destroy(endpoint, options) {
  return axios.delete(endpoint);
}

export function parseResponse(response) {
  return response.data;
}

export function parseError(error) {
  return error.message;
}