import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var chevronRight = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-right\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg>\n", {
  strictMode: true
}), templateOnly());

export { chevronRight as default };
//# sourceMappingURL=chevron-right.js.map
