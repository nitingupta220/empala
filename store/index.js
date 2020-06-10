import { TRASNFER_MONEY } from "../actions/actionTypes";

const initialState = {
  availableAmount: 2500,
  transferredAmount: 50,
  transferAmountList: [50],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRASNFER_MONEY:
      const newAmount = action.amount + 4.5;
      return Object.assign({}, state, {
        availableAmount: state.availableAmount - newAmount,
        transferAmountList: state.transferAmountList.concat(newAmount),
        transferredAmount: state.transferredAmount + newAmount,
      });
    default:
      return state;
  }
};

export default reducer;
