import {
    TypeToDescriptionMap,
} from "./types";

const NAMESPACE = "VISUAL_CELL";

export function makeConstant(associatedReducer: string, actionType: string) {
    return `${NAMESPACE}/${associatedReducer.toUpperCase()}/${actionType.toUpperCase()}`;
}

export function makeReducer<S, A>(typeToDescriptionMap: TypeToDescriptionMap<S, A>, initialState: S) {
    return (state: S = initialState, action: A & { type: string }) => {
        const description = typeToDescriptionMap[action.type];
        if (!description) {
            return state;
        }

        if (description.accepts(action)) {
            return description.perform(state, action);
        }

        return state;
    };
}
