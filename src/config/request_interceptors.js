import _ from 'lodash';

import { getAuthHeaders } from 'modules/authentication/utils';

const authenticationInterceptor = (config => {
  const headers = getAuthHeaders();

  return _.merge(config, { headers });
});

export default [
  authenticationInterceptor,
]