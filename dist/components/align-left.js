import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var alignLeft = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-align-left\"><line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line></svg>\n", {
  strictMode: true
}), templateOnly());

export { alignLeft as default };
//# sourceMappingURL=align-left.js.map
