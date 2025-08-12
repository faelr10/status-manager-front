import React, { useState, useEffect } from "react";
import { Title as PageTitle } from "../../style"; // Renomeando para evitar conflito
import {
  Section,
  TableContainer,
  Table,
  TableHeadTitle,
  TableHeader,
  TableData,
  TotalRow,
  TotalCell,
} from "./style";
import { SelectComponent } from "../../../../Components/Select";
import { getRelatoriosGerais } from "../../../../Http/gestao/getRelatoriosGerais";

export function RelatoriosGerais() {
  const [relatorios, setRelatorios] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" }).toLowerCase()
  );

  useEffect(() => {
    async function fetchRelatorios() {
      try {
        const relatorios = await getRelatoriosGerais();
        setRelatorios(relatorios);
      } catch (error) {
        console.log("Error fetching relatorios gerais:", error);
      }
    }
    fetchRelatorios();
  }, []);

  return (
    <>
      <PageTitle>RELATÓRIOS GERAIS</PageTitle>
      <SelectComponent
        width="25%"
        marginBottom="2rem"
        style={{ marginBottom: "2rem" }}
        options={[
          { value: "janeiro", label: "JANEIRO" },
          { value: "fevereiro", label: "FEVEREIRO" },
          { value: "marco", label: "MARÇO" },
          { value: "abril", label: "ABRIL" },
          { value: "maio", label: "MAIO" },
          { value: "junho", label: "JUNHO" },
          { value: "julho", label: "JULHO" },
          { value: "agosto", label: "AGOSTO" },
          { value: "setembro", label: "SETEMBRO" },
          { value: "outubro", label: "OUTUBRO" },
          { value: "novembro", label: "NOVEMBRO" },
          { value: "dezembro", label: "DEZEMBRO" },
        ]}
        value={selectedMonth}
        data={{
          onChange: (e) => setSelectedMonth(e.target.value),
        }}
      ></SelectComponent>
      {relatorios.map((construtora) => (
        <Section key={construtora.id}>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <TableHeadTitle colSpan="4">
                    CONSTRUTORA {construtora.name.toUpperCase()} -{" "}
                    {selectedMonth.toUpperCase()}
                  </TableHeadTitle>
                </tr>
                <tr>
                  <TableHeader>OBRAS</TableHeader>
                  <TableHeader>FUNCIONÁRIOS</TableHeader>
                  <TableHeader>DIÁRIAS TRABALHADAS</TableHeader>
                  <TableHeader>TOTAL</TableHeader>
                </tr>
              </thead>
              <tbody>
                {construtora.obras.map((obra) => {
                  const totalObra = obra.diarias.reduce(
                    (sum, diaria) => sum + diaria.valorTotal,
                    0
                  );
                  return (
                    <React.Fragment key={obra.id}>
                      {obra.diarias.map((diaria, index) => (
                        <tr key={`${obra.id}-${diaria.funcionario}`}>
                          {index === 0 && (
                            <TableData rowSpan={obra.diarias.length}>
                              {obra.name}
                            </TableData>
                          )}
                          <TableData>{diaria.funcionario}</TableData>
                          <TableData>{diaria.quantidadeDiarias}</TableData>
                          <TableData>
                            {`R$ ${diaria.valorTotal
                              .toFixed(2)
                              .replace(".", ",")}`}
                          </TableData>
                        </tr>
                      ))}
                      <TotalRow>
                        <TotalCell colSpan="3" style={{ textAlign: "right" }}>
                          TOTAL DA OBRA
                        </TotalCell>
                        <TotalCell>
                          {`R$ ${totalObra.toFixed(2).replace(".", ",")}`}
                        </TotalCell>
                      </TotalRow>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </Table>
          </TableContainer>
        </Section>
      ))}
    </>
  );
}
