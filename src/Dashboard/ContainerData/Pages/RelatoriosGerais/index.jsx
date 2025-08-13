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
import { DateRangePickerExample } from "../../../../Components/DataRanger";
import { Label } from "../../../../Components/Label/style";
import { ButtonComponent } from "../../../../Components/Button";
import { set } from "date-fns";
import { getRelatoriosFiltered } from "../../../../Http/gestao/getRelatoriosFiltered";

export function RelatoriosGerais() {
  const [relatorios, setRelatorios] = useState([]);
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = async () => {
    const formatDateForBackend = (date) => {
      if (!date) return "";
      return date.toISOString().split("T")[0]; // YYYY-MM-DD
    };

    const start = formatDateForBackend(startDate);
    const end = formatDateForBackend(endDate);

    console.log("Filtrando de:", start, "até:", end);

    try {
      const filtered = await getRelatoriosFiltered(start, end);
      setRelatorios(filtered);
    } catch (error) {
      console.error("Erro ao buscar relatórios filtrados:", error);
    }
  };

  useEffect(() => {
    async function fetchRelatorios() {
      setLoading(true);
      try {
        const relatorios = await getRelatoriosGerais();
        setRelatorios(relatorios);
      } catch (error) {
        console.log("Error fetching relatorios gerais:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRelatorios();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        Carregando relatórios...
      </div>
    );
  }

  return (
    <>
      <PageTitle>RELATÓRIOS GERAIS</PageTitle>

      <Label>PERÍODO</Label>
      <DateRangePickerExample
        onSelect={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
      />

      <ButtonComponent
        style={{ marginLeft: "1rem", width: "15%" }}
        onClick={handleFilter}
      >
        Buscar
      </ButtonComponent>

      {relatorios.map((construtora) => (
        <Section key={construtora.id}>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <TableHeadTitle colSpan={5}>
                    CONSTRUTORA {construtora.name.toUpperCase()}
                  </TableHeadTitle>
                </tr>
                <tr>
                  <TableHeader>OBRAS</TableHeader>
                  <TableHeader>FUNCIONÁRIOS</TableHeader>
                  <TableHeader>DIÁRIAS TRABALHADAS</TableHeader>
                  <TableHeader>HORAS TRABALHADAS</TableHeader>
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
                            <TableData
                              style={{ width: "13%" }}
                              rowSpan={obra.diarias.length}
                            >
                              {obra.name}
                            </TableData>
                          )}
                          <TableData>{diaria.funcionario}</TableData>
                          <TableData>
                            {diaria.quantidadeDiarias.toFixed(2)}
                          </TableData>
                          <TableData>{diaria.quantidadeHoras}</TableData>
                          <TableData>
                            {`R$ ${diaria.valorTotal
                              .toFixed(2)
                              .replace(".", ",")}`}
                          </TableData>
                        </tr>
                      ))}
                      <TotalRow>
                        <TotalCell colSpan={4} style={{ textAlign: "right" }}>
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
