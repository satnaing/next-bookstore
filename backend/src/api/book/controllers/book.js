"use strict";

/**
 * book controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::book.book", ({ strapi }) => {
  const numberOfEntries = 10;
  const uid = "api::book.book";

  return {
    async random(ctx) {
      const bestSellers = 1;
      let categoryIds = [bestSellers];

      const author = ctx.query.author;

      if (ctx.query.categories) {
        const ids = ctx.query.categories.split(",").map(id => Number(id));
        categoryIds = [...ids];
      }

      const bookIds = (
        await strapi.db.connection.raw(`
              SELECT books.*
              FROM books
              JOIN books_categories_links ON books.id = books_categories_links.book_id
              JOIN categories ON books_categories_links.category_id = categories.id
              JOIN books_author_id_links ON books.id = books_author_id_links.book_id
              JOIN authors ON books_author_id_links.author_id = authors.id
              WHERE authors.id = ${author} OR categories.id IN (${categoryIds})
              ORDER BY RANDOM()
              LIMIT ${numberOfEntries}
              `)
      ).map(it => it.id);

      const entries = await strapi.entityService.findMany(uid, {
        filters: {
          id: {
            $in: bookIds,
          },
        },
        populate: "*",
      });

      const structureRandomEntries = {
        data: entries.map(entry => {
          return {
            id: entry.id,
            attributes: entry,
          };
        }),
      };

      ctx.body = structureRandomEntries;
    },
  };
});
