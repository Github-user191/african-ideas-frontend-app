import React from 'react'

import Hamburger from "hamburger-react";
import { Topic } from '../Types/Types';


interface Props {
    topics: Topic;
    changeTopic(topic: string) : void;
}

const Navbar : React.FC<Props> = ({topics, changeTopic}: Props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-container">
            <div className="container-fluid">

                <div className="navbar-brand">
                    <h6>My Gallery App</h6>
                </div>

                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Hamburger size={22} direction="right" distance="sm" rounded color='#fff'/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="text-center">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >

                            {topics.topics.map((item: string, idx: number) => {
                                return (
                                        <li key={idx} onClick={() => changeTopic(item)} className="nav-item shadow-none mb-2">
                                            {item.replace('-', ' ')}
                                        </li>
                                )
                            })}
                        </ul>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar