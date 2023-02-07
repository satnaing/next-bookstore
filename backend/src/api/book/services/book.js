'use strict';

/**
 * book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book.book');
