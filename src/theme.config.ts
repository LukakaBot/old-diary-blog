const baseUrl = import.meta.env.VITE_BASE_URL;

export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "活版印字",
  /** your name */
  author: "Lukaka",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://lukakabot.github.io",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/moeyua/astro-theme-typography",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://github.com/moeyua/astro-theme-typography",
    },
    {
      name: "mastodon",
      href: "https://github.com/moeyua/astro-theme-typography",
    }
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: `${baseUrl}/posts/page/1`,
    },
    {
      name: "Archive",
      href: `${baseUrl}/archive`,
    },
    {
      name: "Categories",
      href: `${baseUrl}/categories`
    },
    {
      name: "About",
      href: `${baseUrl}/about`,
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    disqus: {
      // please change this to your disqus shortname
      shortname: "typography-astro",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

