import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log()

    const handleChange = (event) => {
        setCount(parseInt(event.target.value))
        console.log(event.target.value)
    }

    return (
        <div className="main">
            <div>
                <p>La valeur de départ est:</p>
                <input type='number' placeholder='0' onChange={handleChange}/>
            </div>
            <div>
                <p>Le compteur est à : {count} </p>
                <div className='increment_buttons'>
                    <button onClick={() => setCount(c => c + 1)}>
                        +1
                    </button>
                    <button onClick={() => setCount(c => c - 1)}>
                        -1
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Counter