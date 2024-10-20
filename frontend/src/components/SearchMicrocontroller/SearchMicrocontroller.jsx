import React, { useState } from "react";
import axios from 'axios'
import styles from "./SearchMicrocontroller.module.css";

function SearchMicrocontroller({handleMicrocontrollers}) {
    const [quantity, setQuantity] = useState("");

    const [pins, setPin] = useState([
        { output: "", value: "" },
    ]);

    function addButton() {
        setPin(pins => [...pins, { output: "", value: "" }]);
    }

    function dellButton(e) {
        const id = e.target.getAttribute("data-id");
        pins.splice(id, 1);
        setPin(pins => [...pins]);
    }

    function inputChange(e) {
        const id = e.target.getAttribute("data-id");
        const name = e.target.name;
        const value = e.target.value;
        name === "output" ? pins[id][name] = value.replace(/[^0-9]/g, '') : pins[id][name] = value;
        setPin(pins => [...pins]);
    }

    function changeQuantity(e) {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setQuantity(value)
    }

    function sendButton() {
        axios.post("/api/searchMicrocontroller", {
            quantity,
            pins,
        })
        .then(response => response.data)
        .then(data => handleMicrocontrollers(data));
    }

    return (
        <div className={styles.form}>
            <div className={styles.formItem}>
                <span>Количество выводов:</span>
                <input 
                    value={quantity}
                    // !
                    onChange={changeQuantity}
                ></input>
                <button className={styles.send} onClick={sendButton}>Найти</button>
            </div>
            <div className={styles.overflow}>
                {pins.map((pin, id) => (
                    <div
                        className={styles.formItem}
                        key={id}
                    >
                        <span>Вывод:</span>
                        <input
                            value={pin.output}
                            name="output"
                            onChange={inputChange}
                            data-id={id}
                        ></input>
                        <span>Значение:</span>
                        <input
                            value={pin.value}
                            name="value"
                            onChange={inputChange}
                            data-id={id}
                        ></input>
                        <button
                            className={styles.dell}
                            onClick={dellButton}
                            data-id={id}
                        >
                            Удалить
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.formItem}>
                <button
                    className={styles.add}
                    onClick={addButton}
                >
                    Добавить
                </button>
            </div>
            <div className={styles.resizable}></div>
        </div>
    );
}

export default SearchMicrocontroller;
