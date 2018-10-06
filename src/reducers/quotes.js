export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let quoteToUpvote = state.find(quote => quote.id === action.quoteId);
      let indexToUpvote = state.indexOf(quoteToUpvote);
      let upvotedQuote = {
        ...quoteToUpvote,
        votes: (quoteToUpvote.votes += 1)
      };
      let upvotedState = [...state];
      upvotedState[indexToUpvote] = upvotedQuote;
      return upvotedState;
    case "DOWNVOTE_QUOTE":
      let quoteToDownvote = state.find(quote => quote.id === action.quoteId);
      let indexToDownvote = state.indexOf(quoteToDownvote);
      let downvotedQuote;
      if (quoteToDownvote.votes > 0) {
        downvotedQuote = {
          ...quoteToDownvote,
          votes: (quoteToDownvote.votes -= 1)
        };
      } else {
        downvotedQuote = quoteToDownvote;
      }
      let downvotedState = [...state];
      downvotedState[indexToDownvote] = downvotedQuote;
      return downvotedState;
    default:
      return state;
  }
};
