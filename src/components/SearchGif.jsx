import React, { useState } from 'react'

const SearchGif = ({setGifProps}) => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (event) => {
    setInputValue(event.target.value)
  }
  const submitPrevent = (event) => {
    event.preventDefault();
    if(inputValue.trim().length > 0) {
      setGifProps( gif => [inputValue, ...gif]);
      setInputValue('');
    }

  }

  return (
    // onSubmit={ (evento)=> { submitPrevent(evento)}}
    <form className="container" onSubmit={ submitPrevent }>
      {/* <input className="form-control" type="text" value={inputValue} onChange={ (evento)=> { inputChange(evento)}}/> */}
      <input className="form-control" type="text" value={inputValue} onChange={inputChange}/>
      <h1>{inputValue}</h1>
    </form>
  )
}

export default SearchGif
