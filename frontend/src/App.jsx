import React from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

const App = () => {
  return (
    <div>
      <CreateTodo/>
      <Todos todos={[]}/>
      </div>
  )
}

export default App