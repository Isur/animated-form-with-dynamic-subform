import { Actions } from "./Form.actions";
import { FormState, SubForm } from "./Form.interface";
import { idGenerator } from "./utils";

export const initState: FormState = {
  name: "",
  content: "",
  subforms: {},
  idGen: idGenerator(),
};

const subFormInitState: SubForm = {
  name: "",
  address: "",
  numeric: 0,
};

export const FormReducer = (state: FormState, action: Actions): FormState => {
  switch (action.type) {
    case "clear":
      const idGen = idGenerator();
      return { ...initState, idGen };
    case "update":
      return { ...state, [action.payload.field]: action.payload.value };
    case "addSub":
      const id = state.idGen.next().value;
      return {
        ...state,
        subforms: {
          ...state.subforms,
          [id]: { ...subFormInitState },
        },
      };
    case "delSub":
      delete state.subforms[action.payload];
      return { ...state };
    case "updateSub":
      const subform = {
        ...state.subforms[action.id],
        [action.payload.field]: action.payload.value,
      };
      return {
        ...state,
        subforms: { ...state.subforms, [action.id]: subform },
      };
  }
};
