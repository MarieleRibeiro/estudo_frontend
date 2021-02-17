import React from 'react';
import Header from './components/Header'

/* Sempre que for criado um componente no react coloca sempre com letra maiuscula

=> Componente dentro do react é simplismente uma função que retorna HTML

<> </> => conceito de fragment = quando quero criar um container pra envolver 1 ou mais components sem reproduzir efeito na DOM( arvore de elementos )
*/


function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects" >
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  )
}

export default App;

/**
 * 3 CONCEITOS MAIS IMPORTANTES DO REACT
 * => Componente
 * => Propriedades = é alguma informação que podemos passar de componente Pai para um componente Filho
 * => Estado
 */