import { Select } from "./style";

export function SelectComponent({ width = "100%", marginBottom = "0", data = {}, options = [] }) {
  return (
    <Select style={{ width, marginBottom }} {...data}>
      <option value="">Selecione uma opção</option>
      {options.map((option, index) => (
        <option key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </Select>
  );
}
