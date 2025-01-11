import Item from "./Item";
import styles from "./ItemMap.module.css";

const ItemMap = ({ todoitems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoitems.map((items) => (
        <Item
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteClick={onDeleteClick}
        ></Item>
      ))}
    </div>
  );
};

export default ItemMap;
