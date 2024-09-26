import React, {useState} from 'react';
import "./AddMicrocontroller.css"





function AddMicrocontroller(){

    const [inputs, setInput] = useState([1]);

    function approach1Fn () {
        const randomNum = inputs.push(1)
        console.log(inputs)
        setInput([randomNum]);
    };

    return (
        <div>
            <div className="form">
                <div><span>Название</span><input></input></div>

                {inputs.map((input, index) => (
                    <div key={index}>
                        <span>{input} пин </span>
                        <input></input>
                    </div>
                ))}

                <button onClick={approach1Fn}>Добавить пин</button>
                <button>Созранить</button>
            </div>
        </div>
    );
}

export default AddMicrocontroller;