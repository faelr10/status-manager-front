// LabelComponent.jsx
import { Label } from "./style";

export function LabelComponent({ width = "100%", children }) {
  return <Label style={{ width }}>{children}</Label>;
}
