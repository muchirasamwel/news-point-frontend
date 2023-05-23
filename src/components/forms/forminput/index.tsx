import React from 'react'
import {
  FormControl,
  FormControlProps,
  FormGroup,
  FormLabel,
  FormText
} from 'react-bootstrap'

interface Props extends FormControlProps {
  controlId: string
  label: string
  inputClass: string
  errorMessage: string
}

const FormInput = (props: Props) => {
  return (
    <FormGroup
      controlId={props.controlId}
      className={props.className}
    >
      <FormLabel>{props.label}</FormLabel>
      <FormControl
        className={`${props.inputClass}`}
        autoComplete='off'
        spellCheck={false}
        {...props}
      />
      {props.isInvalid && (
        <FormText className='text-danger'>{props.errorMessage}</FormText>
      )}
    </FormGroup>
  )
}

export default FormInput
