import { useState } from "react"

const Prac1 = () =>{
    const [votes,setVotes] = useState([
        {name: "JavaScript", vote:0},
        {name: "Python", vote:0},
        {name: "Java", vote:0}
    ])

    const increase = (key) =>{
        const newobj = [...votes]

        newobj[key] = {
            ...newobj[key],
            vote : newobj[key].vote + 1
        }

        setVotes(newobj)
    }

    return(
        <>
            <h1>Vote for your favourite language</h1>

            <button onClick={()=>{increase(0)}}>JavaScript</button>
            <button onClick={()=>{increase(1)}}>Python</button>
            <button onClick={()=>{increase(2)}}>Java</button> <br /> <br />

            JavaScript: {votes[0].vote}<br />
            Python: {votes[1].vote}<br />
            Java: {votes[2].vote}
        </>
    )
}

export default Prac1
