import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: 30,
            clickLike: false,
        };
    },
    mutations: {
        changeName(state) {
            state.name = "park";
        },
        addAge(state, payload) {
            state.age += payload;
        },
        addLikes(state) {
            if (state.clickLike == false) {
                state.likes++;
                state.clickLike = true;
            } else {
                state.likes--;
                state.clickLike = false;
            }
        },
    },
});

export default store;
