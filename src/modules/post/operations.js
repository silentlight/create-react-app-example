import { parseResponse, parseError } from 'utils/request';

import actions from "./actions";
import api from './api';

const fetchPostsRequest = () => (dispatch) => {
  dispatch(actions.fetchPostsRequest());

  api.fetchPots()
    .then(response => dispatch(actions.fetchPostsSuccess(parseResponse(response))))
    .catch(error => dispatch(actions.fetchPostsError(parseError(error))));
};

export default {
  fetchPostsRequest,
};