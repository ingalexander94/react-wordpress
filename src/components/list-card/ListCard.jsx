import { useState } from "react";
import { ItemCard } from "../item-card/ItemCard";
import styles from "./listcard.module.css";

export const ListCard = () => {
  const [estate, setEstate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <div className={styles.more_info}>
        <h4>10 Resultados encontrados</h4>
        <label>
          <span>Más información</span>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/icono_más_información.svg`}
            alt=""
            srcset=""
          />
        </label>
      </div>
      <div className={styles.list_cards}>
        {estate.map((_) => (
          <ItemCard />
        ))}
      </div>
    </>
  );
};
