import {v4} from 'uuid';

export const state = () => ({
  quotes: [{
    id: v4(),
    quote: "Everybody sucks at something"
  },
  {
    id: v4(),
    quote: "Dream, Only to escape the miserable reality of your life"
  },
  {
    id: v4(),
    quote: "Age is just a number, A number that means you are getting old"
  },
  {
    id: v4(),
    quote: "People who say they'll give 110% don't understand how percentages work"
  },
  {
    id: v4(),
    quote: "Work hard, complain harder"
  }]
})

export const mutations = {
  add(state, quote){
    state.quotes.push({quote: quote.quote, id: quote.id});
  }
}
