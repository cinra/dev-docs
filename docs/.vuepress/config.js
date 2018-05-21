module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Documents置き場',
      description: '社内用（仮）'
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'uuki/note',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語選択',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: '最終更新',
        nav: [
          {
            text: 'Documents',
            link: '/docs/',
          },
          {
            text: 'DEMO',
            link: '/demo/',
          },
          {
            text: 'ガイド',
            link: '/guide/',
          },
          // {
          //   text: '基本設定',
          //   link: '/default-theme-config/'
          // }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
