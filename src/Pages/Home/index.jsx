import React, { useState, useEffect } from 'react';
import * as s from './styles'
import { Card } from '../../componentes/Card'


export function Home() {

  const [nomeEstudante, setNomeEstudante] = useState('');
  const [estudantes, setEstudantes] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function addestudante(){

    const novoEstudante = {
      name: nomeEstudante,
      time: new Date().toLocaleTimeString('pt-BR' ,{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
  };


  setEstudantes(prevState => [...prevState, novoEstudante]);
}

  useEffect(() => {
      //corpo do useEffect
      fetch ('https://api.github.com/users/Joowpires')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
}, []);
  




  return (
      <s.div>
        <s.header>
          <h1> Lista de Presença </h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar}/>
          </div>
        </s.header>

       <s.input type="text" placeholder="Digite o nome..." onChange={e => setNomeEstudante(e.target.value)} />
        <s.button type='button' onClick={addestudante}>
        Adicionar
        </s.button> 
        {
          estudantes.map(estudante => 
          <Card 
          key={estudante.time}
          name={estudante.name} 
          time={estudante.time}
          />)
          }
      </s.div>
  )
}
