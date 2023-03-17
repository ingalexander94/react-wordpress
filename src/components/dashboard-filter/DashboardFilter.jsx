import { useState } from "react";
import { ListCard } from "../list-card/ListCard";
import styles from "./dashboardfilter.module.css";

export const DashboardFilter = () => {
  const [showInfo, setShowInfo] = useState(true);

  const toggleMap = () => {
    setShowInfo(!showInfo);
  };

  return (
    <section className={styles.dashboard}>
      {showInfo && (
        <div className={styles.info}>
          <ListCard />
        </div>
      )}
      <div className={styles.map}>
        <button onClick={toggleMap}>
          <img
            className={showInfo ? styles.toLeft : styles.toRight}
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Mostrar {showInfo ? "mapa" : "listado"}</span>
        </button>
      </div>
    </section>
  );
};
