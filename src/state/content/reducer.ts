import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { RECEIVE_CONTENT } from "./constants";
import {
    Action,
    ContentStateBranch,
    ReceiveAction,
} from "./types";

export const initialState = {
    content: [],
};

const typeToDescriptionMap: TypeToDescriptionMap<ContentStateBranch, Action> = {
  [RECEIVE_CONTENT]: {
      accepts: (action: any): action is ReceiveAction => action.type === RECEIVE_CONTENT,
      perform: (state, action: ReceiveAction) => ({
          ...state,
          content: [...state.content, ...action.payload],
      }),
  },
};

export default makeReducer<ContentStateBranch, Action>(typeToDescriptionMap, initialState);
