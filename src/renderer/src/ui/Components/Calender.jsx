import moment from "moment/moment";
import styled from "styled-components";

const CalenderInput = styled.input`
  border: none;
  background: inherit;
  color: var(--color-primary-1);
  font-weight: 700;
`;

const Calender = ({
  selectedMonth,
  onChange,
  max = moment().add("3", "Y").format("YYYY-MM"),
}) => {
  return (
    <CalenderInput
      type="month"
      name="monthYear"
      value={selectedMonth}
      onChange={(e) => onChange(e)}
      max={max}
    />
  );
};

export default Calender;
