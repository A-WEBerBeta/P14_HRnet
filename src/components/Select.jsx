import { useState } from "react";
import "./Select.css";

export default function Select({
  label,
  id,
  value = "",
  onChange,
  options = [],
  placeholder,
  className = "",
  disabled = false,
  name,
}) {
  const [open, setOpen] = useState(false);

  const toOpt = (opt) =>
    typeof opt === "object" ? opt : { label: String(opt), value: String(opt) };

  return (
    <div className={`select-root ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="select-box" data-open={open ? "true" : "false"}>
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e);
            setOpen(false);
          }}
          onMouseDown={() => {
            setOpen(true);
          }}
          onKeyUp={() => {
            setOpen(false);
          }}
          onBlur={() => setOpen(false)}
          required
          className="select"
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((o) => {
            const { label: text, value: val } = toOpt(o);
            return (
              <option key={val ?? text} value={val ?? text}>
                {text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
