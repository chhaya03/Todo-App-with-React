import styles from "./InputRow.module.css";
import { BiAddToQueue } from "react-icons/bi";
import { useRef } from "react";

const InputRow = ({ changeHandleInput }) => {
  const todoElement = useRef(); // for updates in value
  const dueDateElement = useRef(); // for updates in date

  const onButtonclick = () => {
    const todoName = todoElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoElement.current.value = " ";
    dueDateElement.current.value = " ";
    changeHandleInput(todoName, todoDate);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            className={styles.input}
            ref={todoElement}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.input} ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={onButtonclick}
          >
            <BiAddToQueue />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputRow;
