import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var navigation2 = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-navigation-2\"><polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon></svg>\n", {
  strictMode: true
}), templateOnly());

export { navigation2 as default };
//# sourceMappingURL=navigation-2.js.map
