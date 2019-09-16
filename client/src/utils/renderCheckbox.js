import React from 'react';

import { Form } from 'semantic-ui-react';

export default function renderCheckBox ({ input, label, type,  meta: { touched, error, warning }, as: As = input, ...props }) {

    return (

<div>
        {(touched && error) ?
            <Form.Checkbox

                label={label}

                checked={input.value ? true : false}
                onChange={(e, { checked }) => input.onChange(checked)}
                error
                />
            :
            <Form.Checkbox
                
                label={label}
                checked={input.value ? true : false}
                onChange={(e, { checked }) => input.onChange(checked)}
/>}
</div>

);





};
