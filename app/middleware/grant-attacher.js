'use strict';

const GrantAttacher = require('@jeff-tian/keycloak-koa-connect/middleware/grant-attacher');
module.exports = (options, app) => {
  return GrantAttacher(app.keycloak);
};
