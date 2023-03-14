"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/book/random",
      handler: "book.random",
      config: {
        auth: false,
      },
    },
  ],
};