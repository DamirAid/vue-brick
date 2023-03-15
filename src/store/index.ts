import Vuex from "vuex";
import DocumentModule, { DocumentState } from "../entity/Document/model/store";
export interface State {
  module1: DocumentState;
}
export default new Vuex.Store<State>({
  modules: {
    module1: DocumentModule,
  },
});
