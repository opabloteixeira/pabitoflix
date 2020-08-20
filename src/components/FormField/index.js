import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input, FormFieldWrapper, Label } from './styles'

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`

export default function FromField ({ value, onChange, type, name, label }) {
  const isTypeTextArea = type === 'textarea'
  const tag = isTypeTextArea ? 'textarea' : 'input'

  return (
    <FormFieldWrapper>
      <label>
        <Input
          as={ tag }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
        <Label.Text>
          { label }
        </Label.Text>
      </label>
    </FormFieldWrapper>
  )
}

FromField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {}
}

FromField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}
