import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var mousePointer = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-mouse-pointer\"><path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path></svg>\n", {
  strictMode: true
}), templateOnly());

export { mousePointer as default };
//# sourceMappingURL=mouse-pointer.js.map
