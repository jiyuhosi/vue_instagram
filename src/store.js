import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: 30,
        };
    },
    mutations: {
        changeName(state) {
            state.name = "park";
        },
        addAge(state, payload) {
            state.age += payload;
        },
    },
});

export default store;
