import { createStore } from "vuex";

export default createStore({
    state: {
        quotes : {},
        isLoading : false
    },
    mutations: {
        getQuotes(state, quotes) {
            state.quotes = quotes;
        }
    },
    actions : {
        getQuotes({ commit, state }) {
            state.isLoading = true;
            fetch('https://api.quotable.io/random?maxLength=100')
                .then(response => response.json())
                .then(response => {
                    commit('getQuotes', response);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    state.isLoading = false;
                });
        }
    }
})