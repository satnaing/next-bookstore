'use strict';

/**
 * state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::state.state');
