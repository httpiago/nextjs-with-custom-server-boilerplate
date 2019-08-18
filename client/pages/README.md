Please note the default Next's **file routing is disabled** in next.config.js. The only way to make a page component publicly available is by listing it in the [server/routes.ts](../../server/routes.ts) file.

I recommend using the [WordPress template file name pattern](https://developer.wordpress.org/themes/basics/template-hierarchy) to name files within the client/pages folder to keep everything organized.

Example:

- home.tsx
- single-product.tsx
- list-products.tsx
- single-category.tsx
- author.tsx
- page-about.tsx
- search.php
