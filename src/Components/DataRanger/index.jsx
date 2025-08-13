import React, { useState } from "react";
import styled from "styled-components";
import { DateRange } from "react-date-range";
import { FiChevronDown } from "react-icons/fi"; // seta para baixo
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Container = styled.div`
  position: relative;
  display: inline-block;

  margin-bottom: 2rem;
`;

const InputSelect = styled.div`
  border: 1px solid #ccc;
  padding: 12px 12px;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  min-width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 999;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export function DateRangePickerExample({ onSelect }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const formatDate = (date) =>
    date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const handleSelect = (selection) => {
    setState([selection]);
    onSelect({
      startDate: selection.startDate,
      endDate: selection.endDate,
    });

    // Fecha o calendário se as duas datas forem diferentes
    if (
      selection.startDate &&
      selection.endDate &&
      selection.startDate !== selection.endDate
    ) {
      setOpen(false);
    }
  };

  return (
    <Container>
      <InputSelect onClick={() => setOpen(!open)}>
        <span>
          {formatDate(state[0].startDate)} até {formatDate(state[0].endDate)}
        </span>
        <FiChevronDown />
      </InputSelect>

      {open && (
        <CalendarWrapper>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => handleSelect(item.selection)}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </CalendarWrapper>
      )}
    </Container>
  );
}
