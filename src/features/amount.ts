const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAmountAction = { type: typeof ADD, payload: number };
type TakeAmountAction = { type: typeof TAKE, payload: number};
type ClearAmountAction = { type: typeof CLEAR };

type Action = AddAmountAction | TakeAmountAction | ClearAmountAction;

const add = (value: number): AddAmountAction => ({ type: ADD, payload: value });
const take = (value: number): TakeAmountAction => ({ type: TAKE, payload: value });
const clear = (): ClearAmountAction => ({ type: CLEAR });

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;

    case 'amount/TAKE': {
      if (action.payload > amount) {
        return amount;
      }

      return amount - action.payload;
    }

    case 'amount/CLEAR':
      return 0;

    default:
      return amount;
  }

  return amount;
};

export const actions = { add, take, clear };
export default amountReducer;
