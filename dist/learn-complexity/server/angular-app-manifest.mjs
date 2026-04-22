
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSLW2SKD.js",
      "chunk-QCJ57GQ5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSLW2SKD.js",
      "chunk-QCJ57GQ5.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-RUXVFUOQ.js",
      "chunk-QCJ57GQ5.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/courses"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-L6RRWZLC.js"
    ],
    "route": "/courses/ui-design-for-beginners"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-Z4GYQR6C.js"
    ],
    "route": "/courses/mobile-dev-react-native"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-VQWUGNID.js"
    ],
    "route": "/courses/website-dev-zero-to-hero"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-V7DZMEOV.js"
    ],
    "route": "/courses/data-science-with-python"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-AP2D45R2.js"
    ],
    "route": "/courses/digital-marketing-mastery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILT7ICMS.js",
      "chunk-467BSUAX.js"
    ],
    "route": "/courses/python-programming-masterclass"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CQGSYN3D.js",
      "chunk-QCJ57GQ5.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2BPAWEXW.js",
      "chunk-QCJ57GQ5.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YJWKUH6M.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/reviews"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 88790, hash: '3c7bbc9a3dfb31d922ca15113036b9eaf6397c4feac5845988cec5b139399475', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 46811, hash: '79bf9e31844e7246daf893631e145c704800d4c1eb59a83b82bc09f9463ef00e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reviews/index.html': {size: 168022, hash: 'e2bb3757a885912e25ec82190928de44a2f72de46def86197dfcdd100bedf5ee', text: () => import('./assets-chunks/reviews_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 460948, hash: '8e4edc1c964c5b505a7bcb31b2c07efbc5aed67f8a492f21117db59b5f641654', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 460944, hash: '01e3db88cde539a7ecb090731ee9560f13eafe7b3c66194a958b8ca6b34e12d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 223369, hash: 'fc1df45a51bc88d1239bc2a7fcd45da2bb56033953c7c929e3f4cbf0b4968cd3', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 202957, hash: '138e03e44e9991dd440d846430307d657f51875bd61ff51f09cd6ab9a5ef10b2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 200723, hash: '33dfabbb0b29d86959095d238baf3a3471c674cbe49f4c3d965dbc49b1a20235', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-ATXCJJJY.css': {size: 45272, hash: 'TNo13EAjR3w', text: () => import('./assets-chunks/styles-ATXCJJJY_css.mjs').then(m => m.default)}
  },
};
