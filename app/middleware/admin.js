'use strict';

const Admin = require('@jeff-tian/keycloak-koa-connect/middleware/admin');
module.exports = (options, app) => {
  return Admin(app.keycloak, app.config.keycloak.middleware.admin || '/');
};
