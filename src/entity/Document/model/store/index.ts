import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IDocument } from "@/entity/Document/types/DocumentSchema";
import { ActionContext } from "vuex";
import { State } from "@/store";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8000",
};
const instance: AxiosInstance = axios.create(axiosConfig);

export interface DocumentState {
  documents: Array<IDocument>;
}

type Context = ActionContext<DocumentState, State>;

export default {
  actions: {
    async getDocuments(context: Context): Promise<Array<IDocument>> {
      try {
        const { data } = await instance.get(
          "/documents" + window.location.search
        );
        context.commit("updateDocuments", data);
      } catch (e) {
        console.log(e);
      }
      return context.state.documents;
    },
    async addDocument(
      context: Context,
      data: IDocument
    ): Promise<Array<IDocument>> {
      try {
        const { data: responseData } = await instance.post("/documents", data);
        context.commit("updateDocumentsWithAdding", responseData);
      } catch (e) {
        console.log(e);
      }
      return context.state.documents;
    },
  },
  mutations: {
    updateDocuments(state: DocumentState, payload: IDocument[]) {
      state.documents = payload;
    },
    updateDocumentsWithAdding(state: DocumentState, payload: IDocument) {
      state.documents.push(payload);
    },
  },
  state: (): DocumentState => ({
    documents: Array<IDocument>(),
  }),
  getters: {
    allDocuments(state: DocumentState) {
      return state.documents;
    },
  },
};
