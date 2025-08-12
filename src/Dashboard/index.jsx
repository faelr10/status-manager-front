// import { ContainerData } from "./ContainerData";
// import { LeftBar } from "./LeftBar";
// import { Container } from "./style";

// export function DashBoard() {
//   return (
//     <Container>
//       <LeftBar />
//       <ContainerData />
//     </Container>
//   );
// }

import { Container } from "./style";
import { LeftBar } from "./LeftBar";
import { Outlet } from "react-router-dom"; // para renderizar páginas
import { Title } from "./ContainerData/style";

export function DashBoard() {
  return (
    <Container>
      <LeftBar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </Container>
  );
}
