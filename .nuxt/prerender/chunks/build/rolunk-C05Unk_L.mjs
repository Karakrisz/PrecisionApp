import { u as useHead } from './server.mjs';
import { mergeProps, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/defu/dist/defu.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ipx/dist/index.mjs';

const _sfc_main = {
  __name: "rolunk",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "R\xF3lunk"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><h2 class="supage-content__h2 text-color">R\xF3lunk</h2><p>Felt\xF6l\xE9s alatt...</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rolunk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rolunk-C05Unk_L.mjs.map
