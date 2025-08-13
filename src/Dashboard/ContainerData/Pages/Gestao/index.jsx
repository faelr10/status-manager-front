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
    quantHoras: 0,
  });

  const [dadosTabela, setDadosTabela] = useState({});
  const [nomesColaboradores, setNomesColaboradores] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [funcionariosResp, obrasResp, diariasResp] = await Promise.all([
          getAllFuncionarios(),
          getAllObras(),
          getAllDiarias(),
        ]);
        setFuncionarios(funcionariosResp);
        setObras(obrasResp);
        setDadosTabela(diariasResp);

        if (Object.keys(diariasResp).length > 0) {
          const primeiroDia = Object.keys(diariasResp)[0];
          setNomesColaboradores(Object.keys(diariasResp[primeiroDia]));
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function refreshTabela() {
      setLoading(true);
      try {
        const response = await getAllDiarias();
        setDadosTabela(response);
        if (Object.keys(response).length > 0) {
          const primeiroDia = Object.keys(response)[0];
          setNomesColaboradores(Object.keys(response[primeiroDia]));
        }
      } catch (error) {
        console.error("Error fetching diarias:", error);
      } finally {
        setLoading(false);
      }
    }

    if (showModal === false) {
      refreshTabela();
    }
  }, [showModal]);

  async function handleConfirm() {
    console.log("New daily confirmed:", formData);
    await createNewDiaria(formData);
    setShowModal(false);
  }

  if (loading) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h2>Carregando dados...</h2>
      </Container>
    );
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
        <BoxInput>
          <LabelComponent width="100%" children="Horas" />
          <SelectComponent
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
            ]}
            data={{
              onChange: (e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  quantHoras: Number(e.target.value),
                })),
            }}
          />
        </BoxInput>
        <ButtonComponent
          children="Adicionar"
          onClick={() => setShowModal(true)}
        />
      </BoxForm>

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
