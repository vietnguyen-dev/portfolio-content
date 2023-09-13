module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'boobies'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'boobies'),
  },

});

