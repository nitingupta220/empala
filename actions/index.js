import { TRASNFER_MONEY } from "./actionTypes";

export function transferAmount(amount) {
  return {
    type: TRASNFER_MONEY,
    amount,
  };
}
