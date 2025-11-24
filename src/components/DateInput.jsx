import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateInput({ label, value, onChange }) {
  return (
    <DatePicker
      label={label}
      value={value ? new Date(value) : null}
      onChange={onChange}
      enableAccessibleFieldDOMStructure={false}
    />
  );
}
