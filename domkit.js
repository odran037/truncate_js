
/*
  domkit.js

  Purpose:
    - Auto complete isn't always available
    - Typing some of these things is just boring and annoying
    - Its just JS, just shortened

  Usage:
    - <script src="domkit.js"></script>
    - <script type="module" src="domkit.js"></script>
    - <script type="module">
        import {
          qs, qsa, on, off, ready
        } from "https://cdn.jsdelivr.net/gh/<user>/<repo>@v1.0.0/domkit.mjs";
      </script>
*/

(function (global) {
  'use strict';

  // Core helpers
  const qs = (selector, context = document) =>
    context.querySelector(selector);

  const qsa = (selector, context = document) =>
    Array.from(context.querySelectorAll(selector));

  const on = (type, handler, options) =>
    document.addEventListener(type, handler, options);

  const off = (type, handler, options) =>
    document.removeEventListener(type, handler, options);

  const ready = (handler) => {
    if (document.readyState !== 'loading') {
      handler();
    } else {
      document.addEventListener('DOMContentLoaded', handler);
    }
  };

  const domkit = {
    qs,
    qsa,
    on,
    off,
    ready
  };

  console.log(`
    document.querySelector = qs()
    document.querySelectorAll = qsa()
    document.addEventListener = on()
    document.removeEventListener = off()
    dom ready = ready()
  `)

  // UMD-style export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = domkit;
  } else if (typeof define === 'function' && define.amd) {
    define([], () => domkit);
  } else {
    global.domkit = domkit;
    global.qs = qs;
    global.qsa = qsa;
  }

})(typeof window !== 'undefined' ? window : this);
