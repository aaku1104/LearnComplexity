
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
      "chunk-CAF5XILV.js",
      "chunk-RUXVFUOQ.js",
      "chunk-QCJ57GQ5.js",
      "chunk-EULGCA5J.js"
    ],
    "route": "/courses"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-3GYA7EYE.js"
    ],
    "route": "/courses/ui-design-for-beginners"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-VQLLVNKV.js"
    ],
    "route": "/courses/mobile-dev-react-native"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-PGYEHTQ6.js"
    ],
    "route": "/courses/website-dev-zero-to-hero"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-D5XFLUMI.js"
    ],
    "route": "/courses/data-science-with-python"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-E4U73Q3R.js"
    ],
    "route": "/courses/digital-marketing-mastery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CAF5XILV.js",
      "chunk-GCKGSBHT.js"
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
    'index.csr.html': {size: 88763, hash: '6f788b9f46817fa69c41fed256fec07d311e87b3dcffc6afbd167def2b5a37c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 46793, hash: '78f27a05ef029d580cac74445a5848fecc2ec89e1627af27b9a4a23c402dc570', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reviews/index.html': {size: 168197, hash: '06fd2d58f397b7b97073e92ade7ddd3220c76623753c69b8f661b8965f6f0940', text: () => import('./assets-chunks/reviews_index_html.mjs').then(m => m.default)},
    'index.html': {size: 461119, hash: 'b6c57763b1ccd995bc9412ad3fedee8fcd76a4b34d52fc8f2660e378d32de6a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 223544, hash: '00635ab15fa3c5834b42e08a619a48dfbd6272003808e21ffeb9226051d22f6c', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 461123, hash: 'e268f629e78d04b0aa9ecb1ca2120a09bc758b78133356caa91a9a54910a8bfa', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 202963, hash: '68ed3f7b4e0e28a197c533fb481cf1ea157558a4b453572fca12c88706aaa0cc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 200729, hash: '277290bda8ab1e806eab24f68e6b04d2a6252cbfd94d4c3ed72db0f623ce8278', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 45175, hash: 'H1eVQi9AO5c', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
