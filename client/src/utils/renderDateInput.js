import React from 'react';
import {DateInput} from 'semantic-ui-calendar-react';


export default function renderDateInput ({ input, type, label, placeholder, icon, iconPosition, meta: { touched, error, warning }, as: As = input, ...props }) {
    return(
        <div>{(touched && error) ?
<DateInput {...input}
    name="date"
    label={label} 
    startMode="year"
    placeholder="DD-MM-YYYY"
    dateFormat='DD-MM-YYYY'
    popupPosition="bottom center"
    value={input.value}
    iconPosition="left"
    onChange={(event, value) => input.onChange(value.value)}
    closable={true}
    initialDate="01/01/1994"
    error


    />
:
<DateInput {...input}
    name="date"
    label={label}
    startMode="year"
    placeholder="DD-MM-YYYY"
    dateFormat='DD-MM-YYYY'
    popupPosition="bottom center"
    value={input.value}
    iconPosition="left"
    onChange={(event, value) => input.onChange(value.value)}
    closable={true}
    initialDate="01/01/1994"


    />}
</div>)
}
