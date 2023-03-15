import axios from "axios";
import { IDocument } from "@/entity/Document/types/DocumentSchema";

const axiosConfig: any = {
  baseURL: "http://localhost:8000",
 
};
const instance = axios.create(axiosConfig);

export default {
  actions: {
    async getDocuments(context: any) {
      try {
        const { data } = await instance.get("/documents" + window.location.search);
        context.commit("updateDocuments", data);
      } catch (e) {
        console.log(e);
      }
    },
    async addDocument(context: any, data: any) {
      try {
        const { data: responseData } = await instance.post(
          "/documents",
          data as IDocument
        );
        context.commit("updateDocumentsWithAdding", responseData);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateDocuments(state: any, payload: any) {
      state.documents = payload;
    },
    updateDocumentsWithAdding(state: any, payload: any) {
      state.documents.push(payload);
    },
  },
  state: {
    documents: [],
  },
  getters: {
    allDocuments(state: any) {
      return state.documents;
    },
  },
};
