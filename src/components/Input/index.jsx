import React from 'react'
import { InputContainer } from './styles.js';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder='usuário/repositório' />
    </InputContainer>
  )
}

export default Input;