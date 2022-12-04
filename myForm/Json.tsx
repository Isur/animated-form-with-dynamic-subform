import { FC } from "react";

interface Props {
  object: Object;
}

export const Json: FC<Props> = ({ object }) => {
  return <pre> {JSON.stringify(object, null, 2)} </pre>;
};
