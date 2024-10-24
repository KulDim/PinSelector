import styles from "./ListMicrocontroller.module.css";

function ListMicrocontroller({ microcontrollers, loading }) {
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
                        placeholder="поиск"
                    />
                    {microcontrollers.map((microcontroller, index) => (
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
                            <button>Подробней</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListMicrocontroller;
