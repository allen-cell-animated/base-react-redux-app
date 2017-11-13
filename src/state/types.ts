import { AxiosInstance } from "axios";

export interface ReduxLogicDeps {
    baseApiUrl: string;
    httpClient: AxiosInstance;
}

export interface ActionDescription<S, A> {
    accepts: (action: A) => boolean;
    perform: (state: S, action: A) => S;
}

export interface TypeToDescriptionMap<S, A> {
    [propName: string ]: ActionDescription<S, A>;
}
