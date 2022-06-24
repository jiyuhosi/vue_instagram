<template>
    <div>
        <Post :postData="postData[i]" v-for="(a, i) in postData" :key="i" />
    </div>
</template>

<script>
import Post from "./Post.vue";
export default {
    name: "Container",
    components: {
        Post: Post,
    },
    props: {
        postData: Array,
    },
};
</script>

<style></style>
