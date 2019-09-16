import React from "react";
import { DateInput } from "semantic-ui-calendar-react";

export default function renderInlineDateInput({
  input,
  type,
  label,
  placeholder,
  icon,
  iconPosition,
  meta: { touched, error, warning },
  as: As = input,
  ...props
}) {
  var date = new Date();
  date.setDate(date.getDate() - 1);

  return (
    <div>
      {touched && error ? (
        <DateInput
          {...input}
          inline
          name="date"
          label={label}
          startMode="day"
          placeholder="DD-MM-YYYY"
          dateFormat="DD-MM-YYYY"
          popupPosition="bottom center"
          value={input.value}
          iconPosition="left"
          onChange={(event, value) => input.onChange(value.value)}
          hideMobileKeyboard="true"
          error
          minDate={date}
          inlineLabel
        />
      ) : (
        <DateInput
          {...input}
          inline
          name="date"
          label={label}
          startMode="day"
          placeholder="DD-MM-YYYY"
          dateFormat="DD-MM-YYYY"
          popupPosition="bottom center"
          value={input.value}
          iconPosition="left"
          onChange={(event, value) => input.onChange(value.value)}
          hideMobileKeyboard="true"
          minDate={date}
          inlineLabel
        />
      )}
    </div>
  );
}
