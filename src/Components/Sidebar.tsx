import React from 'react'
import { Topic } from '../Types/Types';

interface Props{
    topics: Topic
    changeTopic(topic: string) : void;
}

const Sidebar : React.FC<Props> = ({topics, changeTopic} : Props) => {
  return (
    <div className="sidebar-container">

            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 sidebar-content">
                <div>
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <h5 >Select a topic</h5>
                    
                    </a>
                    <ul className="nav nav-pills flex-column" id="menu">
                    
                        {topics.topics.map((item: string, idx: number) => {
                            return (
                                <li key={idx} onClick={() => changeTopic(item)} className='mb-1'>
                                    <a>{item.replace('-', ' ')}</a>
                                </li>
                            )
                        })}
                    </ul>
       
                </div>
 

            </div>


    </div>
  )
}

export default Sidebar