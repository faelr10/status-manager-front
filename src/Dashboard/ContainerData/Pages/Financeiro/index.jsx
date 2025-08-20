import { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../../../Components/Label/style";
import { Title } from "../../style";
import { getListaQuinzenas } from "../../../../Http/gestao/getListaQuinzenas";
import { SelectComponent } from "../../../../Components/Select";
import { BoxDataFinanceiro, BoxInput } from "./style";
import { ButtonComponent } from "../../../../Components/Button";
import { getFinanceiroQuinzena } from "../../../../Http/gestao/getFinanceiroQuinzena";

// Estilos da Tabela
const TableWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  /* overflow-x: auto; */
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Arial", sans-serif;
  color: #333;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
  border-bottom: 2px solid #e0e0e0;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  color: #555;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  tr:hover {
    background-color: #f0f0f0;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

const TableData = styled.td`
  padding: 12px 15px;
  vertical-align: middle;
  white-space: nowrap;
`;

export function Financeiro() {
  const [listaQuinzenas, setListaQuinzenas] = useState([]);
  const [selectQuinzena, setSelectQuinzena] = useState("");
  const [dadosFinanceiros, setDadosFinanceiros] = useState([]);

  useEffect(() => {
    async function getQuinzenas() {
      const response = await getListaQuinzenas();
      setListaQuinzenas(response);
      console.log(response);
    }

    getQuinzenas();
  }, []);

  function getFinanceiro() {
    if (!selectQuinzena) {
      console.error("Quinzena não selecionada");
      return;
    }

    getFinanceiroQuinzena(selectQuinzena)
      .then((data) => {
        console.log("Dados financeiros:", data);
        setDadosFinanceiros(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados financeiros:", error);
      });
  }

  // Definição das colunas da tabela
  const columns = [
    { key: "funcionario", label: "Funcionário" },
    { key: "quant_diarias", label: "Qtd. Diárias" },
    {
      key: "valor_diaria",
      label: "Vl. Diária",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "total_diaria",
      label: "Total Diária",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "desc_faltas",
      label: "Desc. Faltas",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "desc_inss",
      label: "Desc. INSS",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "premio_producao",
      label: "Prêmio Prod.",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "valor_cesta",
      label: "Vl. Cesta",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "valor_cafe_passagem",
      label: "Vl. Café/Passagem",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "valor_contra_cheque",
      label: "Vl. Contra Cheque",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "total_sacar",
      label: "Total Sacar",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: "total_receber",
      label: "Total a Receber",
      format: (value) => `R$ ${value.toFixed(2)}`,
    },
  ];

  // Renderização da tabela diretamente no componente
  const renderTable = () => {
    if (!dadosFinanceiros || dadosFinanceiros.length === 0) {
      return <p>Nenhum dado para exibir.</p>;
    }

    const tableHeaders = columns.map((col) => (
      <TableHeader key={col.key}>{col.label}</TableHeader>
    ));

    const tableRows = dadosFinanceiros.map((item, index) => (
      <TableRow key={index}>
        {columns.map((col) => (
          <TableData key={col.key}>
            {col.format ? col.format(item[col.key]) : item[col.key]}
          </TableData>
        ))}
      </TableRow>
    ));

    return (
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>{tableHeaders}</TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableWrapper>
    );
  };

  return (
    <>
      <Title>Financeiro</Title>

      <Label>PERÍODO</Label>

      <BoxInput>
        <SelectComponent
          width="50%"
          options={[
            ...listaQuinzenas.map((element) => ({
              value: element.ref_periodo,
              label: element.ref_periodo,
            })),
            { value: "falta", label: "Falta" },
          ]}
          data={{
            onChange: (e) => setSelectQuinzena(e.target.value),
          }}
        />

        <ButtonComponent
          style={{ margin: "0", width: "30%" }}
          onClick={getFinanceiro}
        >
          Buscar
        </ButtonComponent>
      </BoxInput>

      <BoxDataFinanceiro>{renderTable()}</BoxDataFinanceiro>
    </>
  );
}
