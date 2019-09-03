import Medusa from "@nbmds/medusa-core";
import routeModule from "@/routes";
import storeModule from "@/store";

/* tslint:disable */
new Medusa({
  routeModule,
  storeModule,
  // plugin install
  install(Vue) {
    //
  },
});
