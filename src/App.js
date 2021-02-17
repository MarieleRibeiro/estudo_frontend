import React, { useState } from 'react';
import Header from './components/Header'

/* Sempre que for criado um componente no react coloca sempre com letra maiuscula

=> Componente dentro do react é simplismente uma função que retorna HTML

<> </> => conceito de fragment = quando quero criar um container pra envolver 1 ou mais components sem reproduzir efeito na DOM( arvore de elementos )
*/


function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  /**
        useState retorna um array com 2 posições
        => 1. varíavel com o valor inicial
        => 2. Função para atualizarmos esse valor
   */


  function handleAddproject() {
    // projects.push(`Novo pojeto ${Date.now()}`) (metodo push altera o valor original não cria um novo array com a nova informação)

    setProjects([...projects, `Novo pojeto ${Date.now()}`]);

  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddproject}>Adicionar novo projeto</button>

    </>
  )
}

export default App;

/**
 * 3 CONCEITOS MAIS IMPORTANTES DO REACT
 * => Componente
 * => Propriedades = é alguma informação que podemos passar de componente Pai para um componente Filho
 * => Estado & imutabilidade (useState=> utilizar estado )
 */