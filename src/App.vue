<script setup>
</script>

<template>
  <div id="nav">
    <span id="logo">e-recepty</span> <div id="routes"><RouterLink class="link" to="/dashboard">Panel</RouterLink></div>
  </div>

  <RouterView id="router-view"/>
</template>

<style scoped>
  #nav {
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #c9c9c9;
  }

  #logo {
    font-size: 32px;

    color: black;
    font-weight: 500;
  }

  .link {
    text-decoration: none;
    color: #484848;
  }

  #router-view {
    padding: 50px;
  }
</style>
