import Vue from 'vue'
Vue.component("Foo-Bar", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/Foo/Bar.vue"))
Vue.component("OtherComponent", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/OtherComponent.vue"))
Vue.component("demo-1", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/demo-1.vue"))
Vue.component("demo-video-auto-play-ng", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/demo/video-auto-play-ng.vue"))
Vue.component("demo-video-auto-play-ok", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/demo/video-auto-play-ok.vue"))
Vue.component("demo-youtube-auto-play-ng", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/demo/youtube-auto-play-ng.vue"))
Vue.component("demo-youtube-auto-play-ok", () => import("/Users/yuichi/Dev/note/docs/.vuepress/components/demo/youtube-auto-play-ok.vue"))

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/README.md").then(comp => {
        Vue.component("page-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/config/README.md").then(comp => {
        Vue.component("page-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/default-theme-config/README.md").then(comp => {
        Vue.component("page-default-theme-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    path: "/demo/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/demo/README.md").then(comp => {
        Vue.component("page-demo-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/demo/index.html",
    redirect: "/demo/"
  },
  {
    path: "/demo/test.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/demo/test.md").then(comp => {
        Vue.component("page-demo-test", comp.default)
        next()
      })
    }
  },
  {
    path: "/demo/video-auto-play-ng.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/demo/video-auto-play-ng.md").then(comp => {
        Vue.component("page-demo-video-auto-play-ng", comp.default)
        next()
      })
    }
  },
  {
    path: "/demo/video-auto-play-ok.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/demo/video-auto-play-ok.md").then(comp => {
        Vue.component("page-demo-video-auto-play-ok", comp.default)
        next()
      })
    }
  },
  {
    path: "/docs/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/docs/README.md").then(comp => {
        Vue.component("page-docs-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/docs/index.html",
    redirect: "/docs/"
  },
  {
    path: "/docs/study-ansible.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/docs/study-ansible.md").then(comp => {
        Vue.component("page-docs-study-ansible", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/README.md").then(comp => {
        Vue.component("page-guide-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/assets.md").then(comp => {
        Vue.component("page-guide-assets", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/basic-config.md").then(comp => {
        Vue.component("page-guide-basic-config", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/custom-themes.md").then(comp => {
        Vue.component("page-guide-custom-themes", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/deploy.md").then(comp => {
        Vue.component("page-guide-deploy", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/getting-started.md").then(comp => {
        Vue.component("page-guide-getting-started", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/i18n.md").then(comp => {
        Vue.component("page-guide-i18n", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/markdown.md").then(comp => {
        Vue.component("page-guide-markdown", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuichi/Dev/note/docs/guide/using-vue.md").then(comp => {
        Vue.component("page-guide-using-vue", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]