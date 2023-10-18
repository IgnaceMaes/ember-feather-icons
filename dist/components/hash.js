import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var hash = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-hash\"><line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line></svg>\n", {
  strictMode: true
}), templateOnly());

export { hash as default };
//# sourceMappingURL=hash.js.map
