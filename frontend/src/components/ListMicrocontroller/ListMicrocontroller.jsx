import styles from "./ListMicrocontroller.module.css";

function ListMicrocontroller({microcontrollers}) {

    return <div className={styles.test}>
        {microcontrollers.map((microcontroller, index) => (
            <div key={index}>
                <span>title:{ microcontroller.title }</span>
                <span>datasheet:{ microcontroller.datasheet }</span>
                <span>description:{ microcontroller.description }</span>
                <span>counter:{ microcontroller.counter }</span>
            </div>
        ))}
    </div>;
}

export default ListMicrocontroller;
