import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { RECEIVE_METADATA } from "./constants";
import {
    Action,
    MetadataStateBranch,
    ReceiveAction,
} from "./types";

export const initialState = {
    cell_function: [],
    cell_model: [],
    content_category_type: [],
    content_source: [],
    content_type: [],
    meso_structure: [],
    mitotic_state: [],
    molecular_structure: [],
};

const actionToConfigMap: TypeToDescriptionMap<MetadataStateBranch, Action> = {
    [RECEIVE_METADATA]: {
        accepts: (action): action is ReceiveAction => action.type === RECEIVE_METADATA,
        perform: (state, action: ReceiveAction) => ({ ...state, ...action.payload }),
    },
};

export default makeReducer<MetadataStateBranch, Action>(actionToConfigMap, initialState);
