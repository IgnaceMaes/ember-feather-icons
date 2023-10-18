import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var divide = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-divide\"><circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle></svg>\n", {
  strictMode: true
}), templateOnly());

export { divide as default };
//# sourceMappingURL=divide.js.map
