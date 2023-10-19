import { useOutletContext } from "react-router-dom";
import Table from "../../ui/Components/Table";
import styled from "styled-components";
import LabelAndInput from "../../ui/Components/LabelAndInput";
import { useState } from "react";
import { tableColumns } from "../../data/TableColumns";

const Section = styled.section`
  display: block;
  width: 100%;
`;

const Span = styled.div`
  margin: 30px 0px;
`;

const initialColumns = tableColumns["fixedExpenses"];
const initialRows = [
  ["1", "2"],
  ["11", "22"],
];

const FixedExpenses = () => {
  const { isEditModeOn } = useOutletContext();
  const [creditCardValue, setCreditCardValue] = useState(0);
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);
  const [savingsSpend, setSavingsSpend] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);

  return (
    <Section>
      <Table
        columns={columns}
        rows={rows}
        editTable={isEditModeOn}
        setRows={setRows}
      />
      <Span>
        <LabelAndInput
          labelText={"Credit Card"}
          inputType={"number"}
          id="creditCard"
          value={creditCardValue}
          setValue={setCreditCardValue}
          disable={!isEditModeOn}
        />
        <LabelAndInput
          labelText={"Credit Card"}
          inputType={"number"}
          id="creditCard"
          value={creditCardValue}
          setValue={setCreditCardValue}
          disable={!isEditModeOn}
        />
        <LabelAndInput
          labelText={"Spend from Savings"}
          inputType={"number"}
          id="savingsSpend"
          value={savingsSpend}
          setValue={setSavingsSpend}
          disable={!isEditModeOn}
        />
        <LabelAndInput
          labelText={"Subscriptions"}
          inputType={"number"}
          id="subscriptions"
          value={subscriptions}
          setValue={setSubscriptions}
          disable={!isEditModeOn}
        />
      </Span>
    </Section>
  );
};

export default FixedExpenses;
