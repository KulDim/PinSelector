import React, { useState } from "react";
import styles from "./SearchMicrocontroller.module.css";

function SearchMicrocontroller() {
    const [quantity, setQuantity] = useState("");

    const [pins, setPin] = useState([{ output: "", value: "" }]);

    function addButton() {
        setPin(pins => [...pins, { output: "", value: "" }]);
    }

    function dellButton(e) {
        const id = e.target.getAttribute("data-id");
        pins.splice(id, 1);
        setPin(pins => [...pins]);
    }

    function inputChange(e) {
        const name = e.target.name;
        const id = e.target.getAttribute("data-id");
        pins[id][name] = e.target.value;
        setPin(pins => [...pins]);
    }

    return (
        <div className={styles.form}>
            <div className={styles.formItem}>
                <span>Количество выводов:</span>
                <input
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                ></input>
                <button className={styles.send}>Найти</button>
            </div>
            <div className={styles.overflow}>
                {pins.map((pin, id) => (
                    <div
                        className={styles.formItem}
                        key={id}
                    >
                        <span>Вывод:</span>
                        <input
                            type="number"
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
        </div>
    );
}

export default SearchMicrocontroller;
