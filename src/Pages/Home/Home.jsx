import React, { Component, useState } from 'react'
import Input from '../../Components/UI/Input/Index'
import Button from '../../Components/UI/Button/Index'
import './index.css'

function Home () {

  const [ search, setSearch ]  = useState('')

  function handleSearch(e){
    e.preventDefault()
  }

    return (
      <div className="container-home">
          <form  className="form-control" onSubmit={handleSearch}> 
              <div className="input-control">
                <label for="search">Buscar</label>
                <Input 
                  typeElement="input"
                  type="text"
                  value={search}
                  changed={(e) => setSearch(e.target.value)}
                  id="search"
                  placeholder="Pesquisar"
                />
              </div>
              <div className="button-control">
                <Button >Pesquisar</Button>
                </div>
          </form>
      </div>
    )
}

export default Home