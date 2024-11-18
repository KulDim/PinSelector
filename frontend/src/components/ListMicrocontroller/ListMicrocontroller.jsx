import { useEffect, useState } from "react";
import styles from "./ListMicrocontroller.module.css";

function ListMicrocontroller({ microcontrollers, loading }) {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(microcontrollers);

    useEffect(() => {
        if(microcontrollers) {
            setData(microcontrollers.filter(item => item.title.includes(search)))
        }
    }, [search]);


    function info(id) {
        alert("id " + id)
    }

    return (
        <div>
            {loading && (
                <div className={styles.loadingBlock}>
                    <div className={styles.loading}></div>
                </div>
            )}

            {microcontrollers && (
                <div className={styles.microcontrollers}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="поиск по title"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {data.map((microcontroller, index) => (
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
                            <button >Подробней</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListMicrocontroller;
