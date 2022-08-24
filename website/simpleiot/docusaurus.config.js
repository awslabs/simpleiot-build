// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SimpleIOT',
  tagline: 'Connected devices made easy.',
  url: 'https://simpleiot.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'awslabs',
  trailingSlash: false,
  projectName: 'simpleiot-build',
  deploymentBranch: 'gh-pages',
  staticDirectories: ['static', 'static/img'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false
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
     announcementBar: {
        id: 'starter_kit',
        content:
          'Welcome Starter Bundle users! <a href="/docs/workshops/intro">Click here</a> to go to the Workshop.',
        backgroundColor: '#18191B',
        textColor: '#9969F7',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },

      navbar: {
        title: 'SimpleIOT',
        logo: {
          alt: 'SimpleIOT logo',
          src: 'img/logo.png',
        },
        items: [
        {
            type: 'doc',
            label: 'Get Started',
            position: 'left',
            docId: 'intro'
          },
          {
            type: 'doc',
            label: 'Documentation',
            position: 'left',
            docId: 'documentation/intro'
          },
          // {href: '/workshops/starter/', label: 'Workshops', position: 'left', target: '_blank'},
          {
            type: 'doc',
            label: 'Workshops',
            docId: 'workshops',
            position: 'left'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'team',
            position: 'right',
            label: 'Team',
          },
          {
            href: '/docs/github',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/intro',
              },
              {
                label: 'Workshops',
                to: '/docs/workshops/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/simpleiot',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/iotsimpler',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Website Source',
                href: 'https://github.com/awslabs/simpleiot-build',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Amazon Web Services, Inc. or its affiliates. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
