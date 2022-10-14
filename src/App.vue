<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="view"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
  },
  methods: {}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
