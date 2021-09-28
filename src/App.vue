<script setup lang="ts">
    import { ref, getCurrentInstance } from "vue"
    import { log as vLog } from "./directives/log.directive"

    const data = ref("We don't know whether Jason went to Paris")
</script>

<template>
    <p v-log="data">Burada herhangi bir yazı var</p>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
