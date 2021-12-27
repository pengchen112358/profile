<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" style="margin:1px;">中文</router-link>
      <router-link to="/english" style="margin:1px; margin-top:2.5px">English</router-link>
    </div>

    <router-view/>
    <div id="foo">
      <h3>CONTACT ME</h3>
      <h5>email:ts23meg@gmail.com</h5>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: end;
  
  a {
    font-weight: bold;
    color: rgb(49, 49, 49);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#foo {
  color: rgb(49, 49, 49);
  background-color: rgba(194, 191, 191, 0.822);
  padding: 10px;
}
</style>

<script>
// <router-link to="/">Home</router-link> 
</script>

