import { NavigationTab } from "../../constants";

import { SELECT_NAV_TAB } from "./constants";
import { Action } from "./types";

export function selectNavTab(payload: NavigationTab): Action {
    return {
        payload,
        type: SELECT_NAV_TAB,
    };
}
