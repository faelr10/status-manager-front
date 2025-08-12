import { Input } from "./style";

export function InputComponent({ width = "100%", type = "text", data = {} }) {
  return <Input style={{ width }} type={type} {...data} />;
}
