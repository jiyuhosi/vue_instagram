<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step == 1" @click="step++">Next</li>
            <li v-if="step == 2" @click="publish">Publish</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container
        :postData="postData"
        :step="step"
        :image="image"
        @write="content = $event"
    />
    <button @click="morePost">more post</button>
    <h4>{{ $store.state.age }}</h4>
    <button @click="$store.commit('addAge', 10)">button</button>
    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">request more post</button>
    <div class="footer">
        <ul class="footer-button-plus">
            <input
                @change="upload"
                multiple
                accept="image/*"
                type="file"
                id="file"
                class="inputfile"
            />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
    <!-- <div v-if="step == 0">내용0</div>
    <div v-if="step == 1">내용1</div>
    <div v-if="step == 2">내용2</div>
    <button @click="step = 0">버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button>
    <div style="margin-top: 500px"></div> -->
</template>

<script>
import Container from "./components/Container.vue";
import postData from "./assets/postdata.js";
import axios from "axios";

export default {
    name: "App",
    components: {
        Container: Container,
    },
    data() {
        return {
            step: 0,
            postData: postData,
            more: 0,
            image: "",
            content: "",
            selectedFilter: "",
        };
    },
    mounted() {
        this.emitter.on("clickBox", (a) => {
            this.selectedFilter = a;
        });
    },

    methods: {
        morePost() {
            axios
                .get(`https://codingapple1.github.io/vue/more${this.more}.json`)
                .then((result) => {
                    this.postData.push(result.data);
                    this.more++;
                });
        },
        upload(e) {
            let file = e.target.files;
            console.log(file[0]);
            let url = URL.createObjectURL(file[0]);
            console.log(url);
            this.image = url;
            this.step++;
        },
        publish() {
            let myPost = {
                name: "Kim Hyun",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.image,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.content,
                filter: this.selectedFilter,
            };
            this.postData.unshift(myPost);
            this.step = 0;
        },
    },
};
</script>

<style>
body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}
#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
