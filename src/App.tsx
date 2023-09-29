import { useState } from 'react'
import './App.css'
import { Topic } from './models/topic'
import { topicListData } from './database/localData/topicData'
import { TopicForm } from './pages/topicForm'
import { TopicList } from './pages/topicList'

function App() {
  const [topicList, setTopicList] = useState<Topic[]>(topicListData)

  const addtopic = (topic: Topic) => { 
    setTopicList([topic, ...topicList])
  }

  const removetopic = (id: string) => {
    alert(`Are you sure to remove the topic: ${topicList.find(topic => topic.id === id)?.name}`)
    setTopicList(topicList.filter(topic => topic.id !== id))
  }

  return (
    <>
      <TopicForm onSubmit={addtopic}/>
      <TopicList onRemove={removetopic} data={topicList}/>
    </>
  )
}

export default App
