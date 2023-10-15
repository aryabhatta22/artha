import { useOutletContext } from "react-router-dom";
import Table from "../../ui/Components/Table";
import styled from "styled-components";
import LabelAndInput from "../../ui/Components/LabelAndInput";
import { useState } from "react";

const Section = styled.section`
  display: block;
  width: 100%;
`;

const Span = styled.div`
  margin: 30px 0px;
`;
const FixedExpenses = () => {
  const { columns, rows, isEditModeOn, setRows } = useOutletContext();
  const [creditCardValue, setCreditCardValue] = useState(0);
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
        />
        <LabelAndInput
          labelText={"Credit Card"}
          inputType={"number"}
          id="creditCard"
          value={creditCardValue}
          setValue={setCreditCardValue}
        />
        <LabelAndInput
          labelText={"Spend from Savings"}
          inputType={"number"}
          id="savingsSpend"
          value={savingsSpend}
          setValue={setSavingsSpend}
        />
        <LabelAndInput
          labelText={"Subscriptions"}
          inputType={"number"}
          id="subscriptions"
          value={subscriptions}
          setValue={setSubscriptions}
        />
      </Span>
    </Section>
  );
};

export default FixedExpenses;
