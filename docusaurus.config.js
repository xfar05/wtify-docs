// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wtify Docs',
  tagline: 'Wtify Hosting Bot & Software',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wtify.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wtify', // Usually your GitHub org/user name.
  projectName: 'wtify', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark', // Ubah default jadi dark
        disableSwitch: false, // Biarkan user tetap bisa ganti tema
        respectPrefersColorScheme: false, // Abaikan preferensi OS
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Wtify Docs',
        logo: {
          alt: 'Wtify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://saweria.co/wtify',
            label: 'Donate',
            position: 'right',
          },
          {
            href: 'https://wtify.xyz',
            label: 'Website',
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
                label: 'Tutorial',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WhatsApp Community',
                href: 'https://chat.whatsapp.com/LSylwp9pkyPGUA4X6xBZ6O',
              },
              {
                label: 'WhatsApp Channel',
                href: 'https://whatsapp.com/channel/0029Vak1MHEDzgT6GLhAOK2E',
              },
              {
                label: 'Tiktok',
                href: 'https://www.tiktok.com/@wtify.xyz',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/wtify.xyz'
              }
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} Wtify, All rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
