import { Topic } from "../models/topic"

export async function fetchTopics(): Promise<Topic[]> {
    const data = await fetch('http://localhost:3000/topics')
    .then(response => response.json())

    return data as Topic[]
}

export async function postTopics(topic: Topic): Promise<Response> {
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
    }

    const response = await fetch('http://localhost:3000/topics', config)

    console.log(await response.json())
    return await response.json()
}