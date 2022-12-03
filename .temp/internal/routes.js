/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\Yingge Hu\\Desktop\\VS CODE\\local\\happyhome\\happyhome\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-e1b299b6",
    path: "/event/christmas_event.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e1b299b6").then(next)
    },
  },
  {
    name: "v-82533fee",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-82533fee").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-3493e5d9",
    path: "/event/box_event_info.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3493e5d9").then(next)
    },
  },
  {
    name: "v-3b623ddf",
    path: "/drawer/list.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3b623ddf").then(next)
    },
  },
  {
    name: "v-12cdbd77",
    path: "/eventing/event_now.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-12cdbd77").then(next)
    },
  },
  {
    name: "v-1d05cfb2",
    path: "/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1d05cfb2").then(next)
    },
  },
  {
    name: "v-4a2c43e5",
    path: "/event/box_event_cur.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4a2c43e5").then(next)
    },
  },
  {
    name: "v-5fa10382",
    path: "/update/plan.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5fa10382").then(next)
    },
  },
  {
    name: "v-bcbe5c02",
    path: "/update/update.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bcbe5c02").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]