import { Topic } from "../../models/topic"
import { ListItem } from "./listItems"

interface topicListProps {
    data: Topic[]
    onRemove: (id: string) => void
}

export const TopicList = ({data, onRemove}: topicListProps) => {
    const handleRemove = (id: string) => {
        onRemove(id)
    }
    return (
        <ul>
            {data.map(topic => <ListItem onRemove={handleRemove} key={topic.id} topic={topic}></ListItem>)}
        </ul>
    )    
}