import { useEffect, useReducer } from 'react'
import './App.css'
import { TopicForm } from './pages/topicForm'
import { TopicList } from './pages/topicList'
import { ActionType, TopicReducer } from './reducers/topicReducer'
import { Topic } from './models/topic'
import { fetchTopics, postTopics } from './services/api'

function App() {
  // const [topicList, setTopicList] = useState<Topic[]>(topicListData)

  const [{ topics }, dispatch] = useReducer(TopicReducer, { topics: [] })

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTopics()
      dispatch({ type: ActionType.LOAD, payload: { topics: data } })
    }

    loadTasks()
  }, [])

  const addtopic = async (topic: Topic) => {
    dispatch({type: ActionType.ADDED, payload: { topic }})
    
    await postTopics(topic).then(response => {
        if (!response.ok) {
          alert("The topic upload has failed")
          dispatch({type: ActionType.DELETED, payload: { id: topic.id }})
        }
    })


  }

  const removetopic = (id: string) => {
    alert(`Are you sure to remove the topic: ${topics.find(topic => topic.id === id)?.name}`)
    dispatch({type: ActionType.DELETED, payload: { id }})
  }

  return (
    <>
      <TopicForm onSubmit={addtopic}/>
      <TopicList onRemove={removetopic} data={topics}/>
    </>
  )
}

export default App
