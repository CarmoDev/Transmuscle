/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

import { Input, Select } from "./styles";

export function FloatInput({
  value,
  onChange,
  label,
  error,
  type,
  notRequired,
  isReadOnly,
  name,
}) {
  return (
    <Input>
      <input
        value={value}
        placeholder=" "
        required={!notRequired}
        onChange={onChange}
        readOnly={isReadOnly}
        disabled={isReadOnly}
        spellCheck={"false"}
        type={type || "text"}
        name={name}
      />
      <label>{label}</label>

      <br />
      {error && <small>{error}</small>}
    </Input>
  );
}

export function FloatSelect({
  value,
  onChange,
  label,
  children,
  defaultValue,
  name,
}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <Select>
      <select
        onFocus={() => setIsSelectOpen(true)}
        onBlur={() => setIsSelectOpen(false)}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        defaultChecked={defaultValue}
        name={name}
      >
        {children}
      </select>
      <label>{label}</label>

      {!isSelectOpen ? (
        <ArrowDropDownRoundedIcon
          sx={{
            position: "absolute",
            right: 0,
            color: "#bac4e7",
          }}
        />
      ) : (
        <ArrowDropUpRoundedIcon
          sx={{
            position: "absolute",
            right: 0,
            color: "#366dfb",
          }}
        />
      )}
    </Select>
  );
}
