export interface LookupValue {
    id: number;
    name: string;
}

export interface CellModel {
    id: number;
    cellFunctionId: number;
    mesoStructureId: number;
    molecularStructureId: number;
}

export type CellModelComponentKeys = "cell_function" | "cell_model" | "meso_structure" | "molecular_structure";
export type ContentMetadataKeys = "content_category_type" | "content_source" | "content_type" | "mitotic_state";

export type ListOfMetadata = LookupValue[] | CellModel[];
export type MetadataKeys = CellModelComponentKeys | ContentMetadataKeys;
export type MetadataStateBranch = {
    [K in MetadataKeys]: ListOfMetadata;
};

export interface ReceiveAction {
    payload: Partial<MetadataStateBranch>;
    type: string;
}

export interface RequestAction {
    type: string;
}

export type Action = ReceiveAction | RequestAction;
