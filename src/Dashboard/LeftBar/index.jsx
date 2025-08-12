// import { MenusBar } from "./MenusBar";
// import { Container, Logo } from "./style";

// export function LeftBar() {
//   return (
//     <Container>
//       <Logo src="src/images/Logo.jpeg" />
//       <MenusBar />
//     </Container>
//   );
// }

import { useState } from "react";
import { MenusBar } from "./MenusBar";
import { Container, Logo, MenuButton } from "./style";
import { FiMenu } from "react-icons/fi"; // ícone de hambúrguer (instale react-icons)

export function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <FiMenu style={{ color: "black" }} />
      </MenuButton>

      <Container isOpen={isOpen}>
        <Logo src="src/images/Logo.jpeg" />
        <MenusBar />
      </Container>
    </>
  );
}
