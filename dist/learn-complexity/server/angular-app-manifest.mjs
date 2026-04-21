
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
      "chunk-ZIGGPOSQ.js",
      "chunk-RUXVFUOQ.js",
      "chunk-QCJ57GQ5.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/courses"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-3GYA7EYE.js"
    ],
    "route": "/courses/ui-design-for-beginners"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-AOF2VT5E.js"
    ],
    "route": "/courses/mobile-dev-react-native"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-232N6QOK.js"
    ],
    "route": "/courses/website-dev-zero-to-hero"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-D5XFLUMI.js"
    ],
    "route": "/courses/data-science-with-python"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-5OEW34GA.js"
    ],
    "route": "/courses/digital-marketing-mastery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZIGGPOSQ.js",
      "chunk-MVW2R7AC.js"
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
    'index.csr.html': {size: 88268, hash: '96c11b40628606f31fb50f3a10eee626df7cbae78da990eb74cffbaf68dacec4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 46793, hash: '78f27a05ef029d580cac74445a5848fecc2ec89e1627af27b9a4a23c402dc570', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reviews/index.html': {size: 167452, hash: '515cc57973b8a08d87ec3cec4000caf5378ce8ae319c5afe7203f38264553410', text: () => import('./assets-chunks/reviews_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 222799, hash: 'ebb508ed6f6a4cff6c41bba9d2a5940704d5283a56641172137d8fe11a26f802', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 460278, hash: 'd0771bbce2f233577dba4aa0f785177ca7f17d8cfa88ed9044a28df890746f25', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 460274, hash: '63c6a37120ad4621b2d314e2c74c4561e0c9ff2c7856eaa617c6d31642e6bb43', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 202085, hash: 'ead917bf7dc41c4dfc80e5ba3286a8c385e1782d64eec92de46123b929f5d871', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 199984, hash: '5e678ac6c6dc2f502f5cc6e2744b882099b25274f92b797147b7a18f814ccfcb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 43955, hash: 'udbrc7pkJ40', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
