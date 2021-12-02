import { createStore } from "vuex";

export default createStore({
    state: {
        quotes : {}
    },
    mutations: {
        getQuotes(state, quotes) {
            state.quotes = quotes
        }
    },
    actions : {
        getQuotes({ commit }) {
            fetch('https://api.quotable.io/random?maxLength=100')
                .then(response => response.json())
                .then(response => {
                    commit('getQuotes', response)
                });
        }
    }
})