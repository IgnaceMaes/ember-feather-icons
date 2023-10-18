import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDownLeft = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-down-left\"><line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline></svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDownLeft as default };
//# sourceMappingURL=arrow-down-left.js.map
