import { NavigationTab } from "../../constants";

export interface Action {
    type: string;
    payload: any;
}

export interface SelectionStateBranch {
    navTab: NavigationTab;
}
