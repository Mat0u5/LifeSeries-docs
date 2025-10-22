import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Life Series Mod",
  description: "Complete documentation for the Life Series Minecraft mod - a one-to-one recreation of Grian's Life Series",
  base: '/LifeSeries-docs/',

  head: [
    ['link', { rel: 'icon', href: '/LifeSeries-docs/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/LifeSeries-docs/logo.png' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/guide/introduction' },
      { text: 'Download', link: 'https://modrinth.com/mod/life-series' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Selecting a Series', link: '/guide/selecting-series' },
          { text: 'Starting a Session', link: '/guide/starting-session' }
        ]
      },
      {
        text: 'Life Series Seasons',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/seasons/overview' },
          { text: 'Third Life', link: '/seasons/third-life' },
          { text: 'Last Life', link: '/seasons/last-life' },
          { text: 'Double Life', link: '/seasons/double-life' },
          { text: 'Limited Life', link: '/seasons/limited-life' },
          { text: 'Secret Life', link: '/seasons/secret-life' },
          { text: 'Wild Life', link: '/seasons/wild-life' },
          { text: 'Past Life', link: '/seasons/past-life' },
          { text: 'April Fools Seasons', link: '/seasons/april-fools' }
        ]
      },
      {
        text: 'Commands',
        collapsed: false,
        items: [
          { text: 'Command Overview', link: '/commands/overview' },
          { text: 'Season-Specific Commands', link: '/commands/season-specific' }
        ]
      },
      {
        text: 'Features',
        collapsed: false,
        items: [
          { text: 'Life System', link: '/features/life-system' },
          { text: 'Team Colors', link: '/features/team-colors' },
          { text: 'Sessions', link: '/features/session-timer' },
          { text: 'Boogeyman', link: '/features/boogeyman' },
          { text: 'Secret Society', link: '/features/secret-society' },
          { text: 'Blacklists', link: '/features/blacklists' },
          { text: 'Enchantment Clamping', link: '/features/enchantment-clamping' },
          { text: 'Watchers', link: '/features/watchers' },
          { text: 'Substitutions', link: '/features/substitutions' }
        ]
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'Config Overview', link: '/config/overview' },
          { text: 'Accessing Config', link: '/config/accessing' },
          { text: 'General Settings', link: '/config/general' },
          { text: 'Season Settings', link: '/config/seasons' },
          { text: 'Secret Life Tasks', link: '/config/secret-life-tasks' },
          { text: 'Wild Life Trivia', link: '/config/wild-life' },
          { text: 'Wild Life Snail Textures', link: '/config/wild-life' },
          { text: 'Loot Tables', link: '/config/loot-tables' }
        ]
      },
      {
        text: 'Integration',
        collapsed: false,
        items: [
          { text: 'Datapack Support', link: '/integration/datapacks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mat0u5/LifeSeries' },
      { icon: 'discord', link: 'https://discord.gg/QWJxfb4zQZ' }
    ],

    footer: {
      message: 'Documentation for the Life Series mod',
      copyright: 'Made by Mat0u5'
    },

    editLink: {
      pattern: 'https://github.com/Mat0u5/LifeSeries-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    }
  }
})