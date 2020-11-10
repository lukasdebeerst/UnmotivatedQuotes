<template>
  <form @submit.prevent="addQuote" class="form">
    <input class="input" type="text" v-model="quote" name="quote" placeholder="Add a quote">
    <input type="submit" name="submit" value="submit">
  </form>
</template>
<script>
import {v4} from 'uuid';
export default {
  name: "Form",
  data() {
    return {
      quote: ''
    }
  },
  computed: {
    quotes() {
      return this.$store.state.quotes.quotes;
    }
  },
  methods: {
    addQuote(e) {
      const quote = {
        quote: this.quote,
        id: v4(),
        title:  this.quote,

      };
      console.log(quote);
      this.$store.commit('quotes/add', quote);
      this.quote = ''
    }
  }
}
</script>
<style>

  .input {
    width: 90%;
  }
</style>
