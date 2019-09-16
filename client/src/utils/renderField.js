import React from "react";

import { Form, Input } from "semantic-ui-react";

export default function renderForm({
  mask,
  input,
  type,
  label,
  placeholder,
  icon,
  options,
  meta: { touched, error, warning, asyncValidating },
  as: As = Input,
  ...props
}) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }
  return (
    <Form.Field>
      {touched && error ? (
        <div>
          <As
            {...props}
            {...input}
            icon={icon}
            value={input.value}
            type={type}
            label={label}
            placeholder={placeholder}
            options={options}
            onChange={handleChange}
            error={error ? true : null}
          />{" "}
          <span>{error}</span>
        </div>
      ) : (
        <As
          {...props}
          {...input}
          icon={icon}
          value={input.value}
          type={type}
          label={label}
          placeholder={placeholder}
          options={options}
          onChange={handleChange}
        />
      )}
    </Form.Field>
  );
}
