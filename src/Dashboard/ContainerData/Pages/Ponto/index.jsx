import { useEffect, useState } from "react";
import { Title } from "../../style";
import { BoxSelect, Container, ContainerPonto } from "./style";
import { getAllFuncionarios } from "../../../../Http/funcionarios/getAllFuncionarios";
import { SelectComponent } from "../../../../Components/Select";
import { LabelComponent } from "../../../../Components/Label";
import { BoxInput } from "../Gestao/style";
import { ButtonComponent } from "../../../../Components/Button";

export function Ponto() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [formData, setFormData] = useState({
    funcionarioId: "",
    data: "",
  });

  useEffect(() => {
    async function getFuncionarios() {
      try {
        const response = await getAllFuncionarios();
        setFuncionarios(response);
      } catch (error) {
        console.error("Error fetching funcionarios:", error);
      }
    }

    getFuncionarios();
  }, []);

  function handleGetPonto() {
    // Implementar a lógica para buscar os dados de ponto
    console.log("Buscar ponto com os dados:", formData);
  }

  return (
    <Container>
      <Title>Controle de ponto</Title>

      <BoxSelect>
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
          <LabelComponent width="100%" children="Mês" />
          <SelectComponent
            options={[
              { value: "janeiro", label: "Janeiro" },
              { value: "fevereiro", label: "Fevereiro" },
              { value: "marco", label: "Março" },
              { value: "abril", label: "Abril" },
              { value: "maio", label: "Maio" },
              { value: "junho", label: "Junho" },
              { value: "julho", label: "Julho" },
              { value: "agosto", label: "Agosto" },
              { value: "setembro", label: "Setembro" },
              { value: "outubro", label: "Outubro" },
              { value: "novembro", label: "Novembro" },
              { value: "dezembro", label: "Dezembro" },
            ]}
            value={formData.data}
            data={{
              onChange: (e) =>
                setFormData({ ...formData, data: e.target.value }),
            }}
          />
        </BoxInput>
        <ButtonComponent children="Buscar" onClick={handleGetPonto} />
      </BoxSelect>

      <ContainerPonto>
        
      </ContainerPonto>
    </Container>
  );
}
