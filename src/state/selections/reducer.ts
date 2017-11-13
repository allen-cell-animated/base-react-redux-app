import { values } from "lodash";

import { NavigationTab } from "../../constants";

import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { SELECT_NAV_TAB } from "./constants";
import {
    Action,
    SelectionStateBranch,
} from "./types";

const typeToDescriptionMap: TypeToDescriptionMap<SelectionStateBranch, Action> = {
    [SELECT_NAV_TAB]: {
        accepts: (action: any): action is NavigationTab =>
            values(NavigationTab).some((tab) => tab === action.payload),
        perform: (state, action: Action) => ({ ...state, navTab: action.payload }),
    },
};

export const initialState = {
    navTab: NavigationTab.CellFunctions,
};

export default makeReducer<SelectionStateBranch, Action>(typeToDescriptionMap, initialState);
