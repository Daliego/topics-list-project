import { useContext } from "react"
import { ListItem } from "./listItems"
import { TopicsStateContext } from "../../contexts/topicsCotests"

export const TopicList = () => {
    const data = useContext(TopicsStateContext)

    return (
        <ul className="topicsScreen">
            {data.map(topic => <ListItem key={topic.id} topic={topic}></ListItem>)}
            {/* {dataFromProps.map(topic => <ListItem onRemove={handleRemove} key={topic.id} topic={topic}></ListItem>)} */}
        </ul>
    )    
}