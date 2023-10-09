import { useEffect, useReducer } from 'react'
import './App.css'
import { TopicForm } from './pages/topicForm'
import { TopicList } from './pages/topicList'
import { ActionType, TopicReducer } from './reducers/topicReducer'
import { fetchTopics } from './services/api'
import {TopicsDispatchContext, TopicsStateContext } from './contexts/topicsCotests'

function App() {
  const [{ topics }, dispatch] = useReducer(TopicReducer, { topics: [] })



  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTopics()
      dispatch({ type: ActionType.LOAD, payload: { topics: data } })
    }

    loadTasks()
  }, [])

  return (
    <>
      <TopicsStateContext.Provider value={topics}>
        <TopicsDispatchContext.Provider value={dispatch}>
          <TopicForm/>
          <TopicList/>
        </TopicsDispatchContext.Provider>
      </TopicsStateContext.Provider>
    </>
  )
}

export default App
