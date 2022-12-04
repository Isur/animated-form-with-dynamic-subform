import { FC, useCallback } from "react";
import { UpdateSubFormPayloads } from "./Form.actions";
import { SubForm } from "./Form.interface";

interface Props {
  onChange: (id: number, payload: UpdateSubFormPayloads) => void;
  onDelete: (id: number) => void;
  id: number;
  data: SubForm;
}

export const SubFormView: FC<Props> = ({ id, onChange, onDelete, data }) => {
  const changer = useCallback(
    (payload: UpdateSubFormPayloads) => {
      onChange(id, payload);
    },
    [id, onChange]
  );

  const deleter = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <div id={id.toString()}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={(ev) => changer({ value: ev.target.value, field: "name" })}
      />
      <input
        type="text"
        placeholder="address"
        value={data.address}
        onChange={(ev) => changer({ value: ev.target.value, field: "address" })}
      />
      <input
        type="number"
        placeholder="numeric"
        value={data.numeric}
        onChange={(ev) =>
          changer({ value: ev.target.valueAsNumber, field: "numeric" })
        }
      />
      <button type="button" onClick={deleter}>
        DELETE
      </button>
    </div>
  );
};
