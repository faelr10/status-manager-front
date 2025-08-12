// import { useEffect, useState } from "react";
// import { ButtonComponent } from "../../../../Components/Button";
// import { InputComponent } from "../../../../Components/Input";
// import { LabelComponent } from "../../../../Components/Label";
// import { SelectComponent } from "../../../../Components/Select";
// import { BoxForm, BoxFormModal, BoxInput, Container } from "./style";
// import { ModalComponent } from "../../../../Components/Modal";
// import { createNewDiaria } from "../../../../Http/gestao/newDiaria";
// import { getAllFuncionarios } from "../../../../Http/funcionarios/getAllFuncionarios";
// import { getAllObras } from "../../../../Http/obras/getAllObras";

// export function Gestao() {
//   const [showModal, setShowModal] = useState(false);
//   const [funcionarios, setFuncionarios] = useState([]);
//   const [obras, setObras] = useState([]);
//   const [formData, setFormData] = useState({
//     funcionarioId: "",
//     obraId: "",
//     data: "",
//   });

//   useEffect(() => {
//     async function getFuncionarios() {
//       try {
//         const response = await getAllFuncionarios();
//         setFuncionarios(response);
//       } catch (error) {
//         console.error("Error fetching funcionarios:", error);
//       }
//     }

//     async function getObras() {
//       try {
//         const response = await getAllObras();
//         setObras(response);
//       } catch (error) {
//         console.error("Error fetching obras:", error);
//       }
//     }

//     getFuncionarios();
//     getObras();
//   }, []);

//   async function handleConfirm() {
//     console.log("New daily confirmed:", formData);

//     await createNewDiaria(formData);

//     setShowModal(false);
//   }

//   return (
//     <Container>
//       <ModalComponent show={showModal} onClose={() => setShowModal(false)}>
//         <h2>Deseja confirmar nova diária?</h2>

//         <BoxFormModal>
//           <ButtonComponent width="100%" onClick={handleConfirm}>
//             Sim
//           </ButtonComponent>
//           <ButtonComponent
//             width="100%"
//             backgroundColor="#e74c3c"
//             onClick={() => setShowModal(false)}
//           >
//             Não
//           </ButtonComponent>
//         </BoxFormModal>
//       </ModalComponent>
//       <BoxForm>
//         <BoxInput>
//           <LabelComponent width="100%" children="Funcionário" />
//           <SelectComponent
//             options={funcionarios.map((element) => ({
//               value: element.id,
//               label: element.name,
//             }))}
//             data={{
//               onChange: (e) =>
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   funcionarioId: e.target.value,
//                 })),
//             }}
//           />
//         </BoxInput>
//         <BoxInput>
//           <LabelComponent width="100%" children="Obra" />
//           <SelectComponent
//             options={obras.map((element) => ({
//               value: element.id,
//               label: element.name,
//             }))}
//             data={{
//               onChange: (e) =>
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   obraId: e.target.value,
//                 })),
//             }}
//           />
//         </BoxInput>
//         <BoxInput>
//           <LabelComponent width="100%" children="Data" />
//           <InputComponent
//             type="date"
//             data={{
//               name: "data",
//               onChange: (e) =>
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   data: e.target.value,
//                 })),
//             }}
//           />
//         </BoxInput>
//         <ButtonComponent
//           children="Adicionar"
//           onClick={() => setShowModal(true)}
//         />
//       </BoxForm>
//     </Container>
//   );
// }

import { useEffect, useState } from "react";
import { ButtonComponent } from "../../../../Components/Button";
import { InputComponent } from "../../../../Components/Input";
import { LabelComponent } from "../../../../Components/Label";
import { SelectComponent } from "../../../../Components/Select";
import {
  BoxForm,
  BoxFormModal,
  BoxInput,
  Container,
  TabelaObras,
  TableContainer,
  Td,
  TdData,
  Th,
  ThData,
  Tr,
} from "./style";
import { ModalComponent } from "../../../../Components/Modal";
import { createNewDiaria } from "../../../../Http/gestao/newDiaria";
import { getAllFuncionarios } from "../../../../Http/funcionarios/getAllFuncionarios";
import { getAllObras } from "../../../../Http/obras/getAllObras";
import { getAllDiarias } from "../../../../Http/gestao/getAllDiarias";
import { Title } from "../../style";

export function Gestao() {
  const [showModal, setShowModal] = useState(false);
  const [funcionarios, setFuncionarios] = useState([]);
  const [obras, setObras] = useState([]);
  const [formData, setFormData] = useState({
    funcionarioId: "",
    obraId: "",
    data: "",
  });

  const [dadosTabela, setDadosTabela] = useState({});
  const [nomesColaboradores, setNomesColaboradores] = useState([]);

  useEffect(() => {
    async function getFuncionarios() {
      try {
        const response = await getAllFuncionarios();
        setFuncionarios(response);
      } catch (error) {
        console.error("Error fetching funcionarios:", error);
      }
    }

    async function getObras() {
      try {
        const response = await getAllObras();
        setObras(response);
      } catch (error) {
        console.error("Error fetching obras:", error);
      }
    }

    // Função para buscar os dados da tabela
    async function getDadosTabela() {
      try {
        const response = await getAllDiarias();
        setDadosTabela(response);

        if (Object.keys(response).length > 0) {
          const primeiroDia = Object.keys(response)[0];
          setNomesColaboradores(Object.keys(response[primeiroDia]));
        }
      } catch (error) {
        console.error("Error fetching diarias:", error);
      }
    }

    getFuncionarios();
    getObras();
    getDadosTabela();
  }, []);

  useEffect(() => {
    async function getDadosTabela() {
      try {
        const response = await getAllDiarias();
        setDadosTabela(response);

        if (Object.keys(response).length > 0) {
          const primeiroDia = Object.keys(response)[0];
          setNomesColaboradores(Object.keys(response[primeiroDia]));
        }
      } catch (error) {
        console.error("Error fetching diarias:", error);
      }
    }
    getDadosTabela();
  }, [showModal]);

  async function handleConfirm() {
    console.log("New daily confirmed:", formData);

    await createNewDiaria(formData);

    // setFormData({ funcionarioId: "", obraId: "", data: "" });
    setShowModal(false);
  }

  return (
    <Container>
      <Title>Gestão</Title>

      <ModalComponent show={showModal} onClose={() => setShowModal(false)}>
        <h2>Deseja confirmar nova diária?</h2>
        <BoxFormModal>
          <ButtonComponent width="100%" onClick={handleConfirm}>
            Sim
          </ButtonComponent>
          <ButtonComponent
            width="100%"
            backgroundColor="#e74c3c"
            onClick={() => setShowModal(false)}
          >
            Não
          </ButtonComponent>
        </BoxFormModal>
      </ModalComponent>
      <BoxForm>
        <BoxInput>
          <LabelComponent width="100%" children="Funcionário" />
          <SelectComponent
            options={funcionarios.map((element) => ({
              value: element.id,
              label: element.name,
            }))}
            data={{
              onChange: (e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  funcionarioId: e.target.value,
                })),
            }}
          />
        </BoxInput>
        <BoxInput>
          <LabelComponent width="100%" children="Obra" />
          <SelectComponent
            options={[
              ...obras.map((element) => ({
                value: element.id,
                label: element.name,
              })),
              { value: "falta", label: "Falta" },
            ]}
            data={{
              onChange: (e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  obraId: e.target.value,
                })),
            }}
          />
        </BoxInput>
        <BoxInput>
          <LabelComponent width="100%" children="Data" />
          <InputComponent
            type="date"
            data={{
              name: "data",
              onChange: (e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  data: e.target.value,
                })),
            }}
          />
        </BoxInput>
        <ButtonComponent
          children="Adicionar"
          onClick={() => setShowModal(true)}
        />
      </BoxForm>

      {/* Tabela de Obras usando styled-components */}

      <TableContainer>
        <h2 style={{ marginBottom: "15px" }}>OBRAS - AGOSTO 2025</h2>
        <TabelaObras>
          <thead>
            <Tr>
              <ThData>DATA</ThData>
              {nomesColaboradores.map((nome, index) => (
                <Th key={index}>{nome}</Th>
              ))}
            </Tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((dia) => (
              <Tr key={dia}>
                <TdData>{dia}</TdData>
                {nomesColaboradores.map((nome, index) => {
                  const obra = dadosTabela[dia] ? dadosTabela[dia][nome] : "";
                  //se obra for igual a 'Falta', exibe 'Falta' em vermelho
                  if (obra === "Falta") {
                    return (
                      <Td key={index} style={{ color: "red" }}>
                        {obra}
                      </Td>
                    );
                  } else {
                    return <Td key={index}>{obra}</Td>;
                  }
                })}
              </Tr>
            ))}
          </tbody>
        </TabelaObras>
      </TableContainer>
    </Container>
  );
}
