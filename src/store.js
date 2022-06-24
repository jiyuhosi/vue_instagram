import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: 30,
            clickLike: false,
            more: {},
        };
    },
    mutations: {
        setMore(state, payload) {
            state.more = payload;
        },
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
    actions: {
        getData(context) {
            axios
                .get("https://codingapple1.github.io/vue/more0.json")
                .then((result) => {
                    console.log(result.data);
                    context.commit("setMore", result.data);
                });
        },
    },
});

export default store;
