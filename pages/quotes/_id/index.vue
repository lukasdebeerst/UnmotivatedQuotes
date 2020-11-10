<template>
<div>
  <h1>Quote: {{ quotes.quote }}</h1>
  <p>Id: {{quotes.id}}</p>
</div>

</template>
<script>

export default {
  head(){
    return {
      title: 'Quote detail',
    }
  },
  computed: {
    quotes() {
      console.log(this.$route.params.id);
      const quotes = this.$store.state.quotes.quotes;
      const quote = quotes.find(el => el.id === this.$route.params.id);
      console.log(quote);
      return quote;
    }
  }
}
</script>

