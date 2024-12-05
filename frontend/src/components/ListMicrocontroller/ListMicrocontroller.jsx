import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ListMicrocontroller.module.css";

function ListMicrocontroller({ microcontrollers, popup, loading }) {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(microcontrollers);

    useEffect(() => {
        setData(microcontrollers);
    }, [microcontrollers]);

    useEffect(() => {
        if (microcontrollers) {
            setData(microcontrollers.filter(item => item.title.includes(search)));
        }
    }, [search]);

    function buttonDetails(e) {
        const id = e.target.getAttribute("data-id");
        axios
            .post("/api/detailsMicrocontroller", {
                id,
            })
            .then(response => response.data)
            .then(data => popup(data.message));
    }

    return (
        <div>
            {loading && (
                <div className={styles.loadingBlock}>
                    <div className={styles.loading}></div>
                </div>
            )}

            {data && (
                <div className={styles.microcontrollers}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="поиск по title"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {data &&
                        data.map((microcontroller, index) => (
                            <div
                                key={index}
                                className={styles.microcontroller}
                            >
                                <span>
                                    <span>title: {microcontroller.title}</span>
                                    <span>datasheet: {microcontroller.datasheet}</span>
                                </span>
                                <span>
                                    <span>description: {microcontroller.description}</span>
                                </span>
                                <button
                                    data-id={microcontroller.id}
                                    onClick={buttonDetails}
                                >
                                    Подробней
                                </button>
                            </div>
                        ))}
                    {data.length == 0 && <div>Пусто</div>}
                </div>
            )}
        </div>
    );
}

export default ListMicrocontroller;
