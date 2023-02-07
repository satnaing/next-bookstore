'use strict';

/**
 * state controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::state.state');
