import { DatePicker } from "@mui/x-date-pickers/DatePicker";

/**
 * Reusable wrapper around MUI's DatePicker.
 * Accepts:
 * - label (string)
 * - value (ISO date string or empty)
 * - onChange (callback receibing the new date value)
 *
 * Converts the incoming string into a Date instance,
 * since MUI requires a Date object for its controlled value.
 */
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
