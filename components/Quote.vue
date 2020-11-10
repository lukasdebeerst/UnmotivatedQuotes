<template>
  <div class="quote__container">
    <nuxt-link :to="'quotes/' + id" >
      <p>{{quote}}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "quote",
  props: ["quote", "id"]
}
</script>
<style scoped>
  .quote__container {
    padding: 10px;
    border: solid 1px black;
    margin: 5px;
    text-align: center;
  }
</style>
