import { Button } from "./style";

export function ButtonComponent({
  backgroundColor = "#007bff",
  children,
  onClick,
  ...rest
}) {
  return (
    <Button style={{  backgroundColor }} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
