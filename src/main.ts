// import Vue from "vue";
// import Medusa from "@nbmds/medusa-core";
import Medusa from "../../medusa-core/core";
import routeModule from "@/routes";
import storeModule from "@/store";

/* tslint:disable */
new Medusa({ routeModule, storeModule });
