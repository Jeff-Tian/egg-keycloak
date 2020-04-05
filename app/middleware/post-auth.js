'use strict';

const PostAuth = require('@jeff-tian/keycloak-koa-connect/middleware/post-auth');
module.exports = (options, app) => {
  return PostAuth(app.keycloak);
};
