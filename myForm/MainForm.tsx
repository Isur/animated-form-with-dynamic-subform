import { FC, SyntheticEvent, useReducer } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UpdateSubFormPayloads } from "./Form.actions";
import { FormReducer, initState } from "./Form.reducer";
import { SubFormView } from "./SubForm";
import styles from "../styles/Form.module.css";
import { Json } from "./Json";

export const MainForm: FC = () => {
  const [state, dispatch] = useReducer(FormReducer, initState);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  const submit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(state);
    dispatch({ type: "clear" });
  };

  const addSub = () => {
    dispatch({ type: "addSub" });
  };

  const subforms = Object.keys(state.subforms).map((subId) => (
    <SubFormView
      key={subId}
      data={state.subforms[parseInt(subId)]}
      id={parseInt(subId)}
      onDelete={(id: number) => dispatch({ type: "delSub", payload: id })}
      onChange={(id: number, payload: UpdateSubFormPayloads) =>
        dispatch({
          type: "updateSub",
          id,
          payload,
        })
      }
    />
  ));

  return (
    <div>
      <h1> FORM - open dev tools to see results of submit </h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          type="text"
          placeholder="name"
          value={state.name}
          onChange={(ev) =>
            dispatch({
              type: "update",
              payload: { field: "name", value: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="content"
          value={state.content}
          onChange={(ev) =>
            dispatch({
              type: "update",
              payload: { field: "content", value: ev.target.value },
            })
          }
        />
        <button type="submit">Console.Log() & Clear</button>
        <button type="button" onClick={addSub}>
          Add Sub
        </button>
        <div ref={parent}>{subforms}</div>
        <div>
          <Json object={state} />
        </div>
      </form>
    </div>
  );
};
