import {
  NumericFields,
  StringFields,
  UpdateableFields,
} from "./Form.interface";

type ClearAction = {
  type: "clear";
};

type UpdateAction = {
  type: "update";
  payload: {
    value: string;
    field: UpdateableFields;
  };
};

type AddSubFormAction = {
  type: "addSub";
};

type DeleteSubFormAction = {
  type: "delSub";
  payload: number;
};

type StringPayloads = {
  field: StringFields;
  value: string;
};

type NumericPayloads = {
  field: NumericFields;
  value: number;
};

export type UpdateSubFormPayloads = StringPayloads | NumericPayloads;

type UpdateSubFormAction = {
  type: "updateSub";
  id: number;
  payload: UpdateSubFormPayloads;
};

type SubFormActions =
  | AddSubFormAction
  | DeleteSubFormAction
  | UpdateSubFormAction;

type FormActions = ClearAction | UpdateAction;

export type Actions = SubFormActions | FormActions;
