export interface SubForm {
  name: string;
  address: string;
  numeric: number;
}

export interface FormState {
  name: string;
  content: string;
  subforms: {
    [key: number]: SubForm;
  };
  idGen: Generator<number>;
}

export type UpdateableFields = keyof Omit<FormState, "subforms" | "idGen">;

export type UpdateableSubFormFields = keyof SubForm;

export type StringFields = "name" | "address";
export type NumericFields = "numeric";
