import { Topic } from "../models/topic";

interface TopicState {
  topics: Topic[];
}

//Os tipos de ações que eu posso executar

export enum ActionType {
  ADDED,
  DELETED,
  LOAD
}

//Interface do modelo de uma ação, vai armazer o tipo de ação e os dados recebidos

type AddAction = { type: ActionType.ADDED; payload: { topic: Topic } };
type DeleteAction = { type: ActionType.DELETED; payload: { id: string } };
type LoadAction = {type: ActionType.LOAD; payload: { topics: Topic[] } };

//Função com switch para executar a lógica de cada reducer

export type Action = AddAction | DeleteAction | LoadAction;

function reducer(state: TopicState, action: Action) {
  switch (action.type) {
    case ActionType.ADDED: {
      const newTopic = action.payload.topic;

      return { topics: [newTopic, ...state.topics] };
    }

    case ActionType.DELETED: {
      const removedTopicId: string = action.payload.id;

      const topics = state.topics.filter((topic) => topic.id !== removedTopicId);

      return { topics };
    }

    case ActionType.LOAD: {
      const loadedTopics: Topic[] = action.payload.topics
      
      return { topics: [...loadedTopics] }
    } 

    default: {
      console.warn("Invalid Action");
      return state;
    }
  }
}

export { reducer as TopicReducer };
