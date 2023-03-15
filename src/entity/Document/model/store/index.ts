import axios from "axios"

export default {
    actions: {
       async getDocuments(context: any) {
            try {
                const {data} = await axios("http://localhost:8000/documents")
                context.commit("updateDocuments", data)
            } catch(e) {
                console.log(e)
            }
        }
    },
    mutations: {
        updateDocuments(state: any, documents: any) {
            state.documents = documents
        }
    },
    state: {
        documents: []
    },
    getters: {
        allDocuments(state: any) {
            return state.documents
        }
    }
}