// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ellie patchnotes',
  tagline: 'Ellie patch notes',
  url: 'https://patchnotes.elliebot.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EllieBotDevs', // Usually your GitHub org/user name.
  projectName: 'ellie-patchnotes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({content}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EllieBotDevs/ellie-patchnotes/tree/dev/blog',
          blogTitle: 'Ellie patchnotes',
          blogDescription: 'Here you can find the patch notes for Ellie',
          postsPerPage: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} EllieBotDevs.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ellie patchnotes',
        logo: {
          alt: 'Ellie patchnotes',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: 'https://github.com/EllieBotDevs/ellie-patchnotes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Our other sites',
            items: [
              {
                label: 'Documentation Site',
                to: 'https://docs.elliebot.net',
              },
              {
                label: 'Ellie blog',
                to: 'https://blog.elliebot.net',
              },
              {
                label: 'Main site',
                to: 'https://elliebot.net',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/SVQVzJq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Computergeex5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EllieBotDevs/ellie-patchnotes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EllieBotDevs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
