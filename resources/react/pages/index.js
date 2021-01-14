import loadable from "@loadable/component";

// Home
// export const Site = loadable(() => import(/* webpackChunkName: "site" */'./site'));

export const News = loadable(() =>
  import(/* webpackChunkName: "site" */ "./News")
);

export const Article = loadable(() =>
  import(/* webpackChunkName: "site" */ "./Article")
);

export const Category = loadable(() =>
  import(/* webpackChunkName: "site" */ "./Category")
);
