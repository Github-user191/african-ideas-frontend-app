import { createContext , useState, Dispatch, SetStateAction, ReactNode, useEffect} from "react";
import { Topic } from "../Types/Types";
import ImageService from "../Services/ImageService";

export interface ITopicContext {
    topics: Topic;
    setTopics: Dispatch<SetStateAction<Topic>>
}

const defaultState = {
    topics: {
        topics: []
    },
    setTopics: (topics: Topic) => {}
} as ITopicContext

// We can provide intial values to the context state like this
export const TopicContext = createContext(defaultState);

type TopicProviderProps = {
    children: ReactNode
}

export const TopicProvider = ({children}: TopicProviderProps) => {

    const [topics, setTopics] = useState<Topic>({
        topics: []
    });

    const fetchTopics = () :void => {
        ImageService.fetchTopics()
        .then(res => {
     
            setTopics({
                topics: res
            })  
        }).catch(err => {
        
            setTopics({
                topics: []
            })
        })
    }


    useEffect(() => {
        fetchTopics()
    }, [])
  

    return (
        <TopicContext.Provider value={{topics, setTopics}} >
            {children}
        </TopicContext.Provider>
    )

}