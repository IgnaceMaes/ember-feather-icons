import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var navigation = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-navigation\"><polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon></svg>\n", {
  strictMode: true
}), templateOnly());

export { navigation as default };
//# sourceMappingURL=navigation.js.map
