<template>
  <header class="header">
    <h1><nuxt-link class="navItem"  to="/">Unmotivated Quotes</nuxt-link></h1>
    <nav>
      <ul>
        <li class="navItemList"><nuxt-link class="navItem"  to="/about" >About page</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>
<style scoped>
  .header {
    background-color: black;
    color: white;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navItem {
    color: white;
    text-decoration: none;
  }

  .navItemList {
      list-style-type: none;
      margin: 0;
      padding: 0;
  }
</style>
