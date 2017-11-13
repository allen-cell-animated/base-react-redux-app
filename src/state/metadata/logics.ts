import { AxiosResponse } from "axios";
import { createLogic } from "redux-logic";

import { ReduxLogicDeps } from "../types";

import { receiveMetadata } from "./actions";
import { REQUEST_CELL_MODEL_METADATA } from "./constants";

const requestCellModelMetadata = createLogic({
    processOptions: {
        successType: receiveMetadata,
    },
    process(deps: ReduxLogicDeps) {
        const {
            baseApiUrl,
            httpClient,
        } = deps;

        return Promise.all([
            httpClient.get(`${baseApiUrl}/cellFunctions`),
            httpClient.get(`${baseApiUrl}/mesoStructures`),
            httpClient.get(`${baseApiUrl}/molecularStructures`),
            httpClient.get(`${baseApiUrl}/cellModels`),
        ])
            .then(([
                cellFunctions,
                mesoStructures,
                molecularStructures,
                cellModel,
            ]: AxiosResponse[]) => ({
                cell_function: cellFunctions.data,
                cell_model: cellModel.data,
                meso_structure: mesoStructures.data,
                molecular_structure: molecularStructures.data,
            }))
            .catch((reason) => {
                // TODO create Logger
                // tslint:disable-next-line
                console.log(reason);
            });
    },
    type: REQUEST_CELL_MODEL_METADATA,
});

export default [
    requestCellModelMetadata,
];
