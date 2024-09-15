export const headerConfig = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    // {
    //   text: '诗词 + AI',
    //   href: '/ai',
    // },
    {
      text: 'Today',
      href: '/info',
    },
    {
      text: 'hello',
      links: [
        {
          text: '按朝代检索 💠',
          href: '/ai',
        },
        {
          text: '有诗人',
          href: '/author',
        },
      ],
    },
  ],
  actions: [
    // {
    //   text: 'Search',
    //   href: '/search',
    //   target: '_self',
    // }
  ],
};