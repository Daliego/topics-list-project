import { useRef, useState, useContext } from "react"
import {v4 as uuid} from 'uuid';
import { Topic } from "../../models/topic";
import { authors } from "../../database/authors";
import { TopicsDispatchContext } from "../../contexts/topicsCotests";
import { ActionType } from "../../reducers/topicReducer";
import { postTopics } from "../../services/api";

export function TopicForm() {
    const dispatch = useContext(TopicsDispatchContext)!
    const topicText = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const text: string = topicText.current!.value

        const topic: Topic = {
            id: uuid(),
            name: text,
            autor: authors[0],
            tags: selectedTopics[0] === "" ? ["No tags"] : selectedTopics,
            likes: 0,
            active: true, 
            createdAt: new Date(),
        }

        const addtopic = async (topic: Topic) => {
            dispatch({type: ActionType.ADDED, payload: { topic }})
            
            await postTopics(topic).then(response => {
                if (!response.ok) {
                  alert("The topic upload has failed")
                  dispatch({type: ActionType.DELETED, payload: { id: topic.id }})
                }
            })
        }

        addtopic(topic)

        topicText.current!.value = ""
    }

    const [selectedTopics, setSelectedTopics] = useState([""]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const options = [...e.target.selectedOptions];

            const values = options.map(topic => topic.value);
            setSelectedTopics(values);
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: 'column', justifyContent: "center"}}>
            <label>
                Choose your topic tag
            </label>
            <select
            multiple={true}
            value={selectedTopics}
            onChange={handleChange}
            >
                <option value="programming">Programming</option>
                <option value="programm">Program</option>
                <option value="study">Study</option>
                <option value="studying">Studyind</option>
                <option value="writing">Writing</option>
            </select>
            <input type="text" placeholder="Type your topic..." required ref={topicText}></input>
            <input type="submit" value={"Add"}></input>
        </form>
    )
}