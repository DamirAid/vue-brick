import Vuex from "vuex";
import DocumentModule from "../entity/Document/model/store";

export default new Vuex.Store({
  modules: {
    module1: DocumentModule,
  },
});
