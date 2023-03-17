import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { pluralize } from "../../utils/pipes";
import styles from "./filteritem.module.css";

const FilterItem = ({ title, items, index, isNumbers }) => {
  const [value, setValue] = useState(items[0]);
  const inputRef = useRef(null);
  const selectItem = (value) => {
    inputRef.current.checked = false;
    setValue(value);
  };

  return (
    <div className={styles.item_filter}>
      <span>{title}</span>
      <div>
        <label htmlFor={`filter_${index}`}>
          {isNumbers
            ? `${pluralize(value, "habitación", "habitaciones")}`
            : value}
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
        </label>
        <input type="checkbox" id={`filter_${index}`} ref={inputRef} />
        <ul className={isNumbers ? styles.list_numbers : ""}>
          {items.map((item) => (
            <li onClick={() => selectItem(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilterItem.propTypes = {
  index: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  isNumbers: PropTypes.bool.isRequired,
};

export default FilterItem;
