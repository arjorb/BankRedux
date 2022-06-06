export default (state, action) => {
  const {type,amount} = action;
  switch (type) {
    case 'WITHDRAW_MONEY':
      return {
        ...state,
        amount: state.amount - amount
      };
    default:
      return state;
  }
};
