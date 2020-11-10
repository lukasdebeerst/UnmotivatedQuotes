<template>
  <div class="container">
    <Form />
    <Quote v-for="quote in quotes" :key="quote.id" :id="quote.id" :quote="quote.quote"  />
  </div>
</template>

<script>
import Quote from "../components/Quote";
import Form from "../components/Form";

export default {
  head(){
    return {
      title: 'Quotes',
    }
  },
  computed: {
    quotes() {
      return this.$store.state.quotes.quotes;
    }
  }
}
</script>
