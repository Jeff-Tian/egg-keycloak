'use strict';

const Logout = require('@jeff-tian/keycloak-koa-connect/middleware/logout');
module.exports = (options, app) => {
  return Logout(app.keycloak, app.config.keycloak.middleware.logout || '/logout');
};
