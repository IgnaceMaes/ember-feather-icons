import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var droplet = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-droplet\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path></svg>\n", {
  strictMode: true
}), templateOnly());

export { droplet as default };
//# sourceMappingURL=droplet.js.map
