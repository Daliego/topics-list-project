import { createContext } from "react";
import { Topic } from "../models/topic";
import { Action, ActionType } from "../reducers/topicReducer";

export interface TopicsDispatchContextProps {
    dispatch: React.Dispatch<ActionType>
}

export const TopicsStateContext = createContext<Topic[]>([]);
export const TopicsDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);