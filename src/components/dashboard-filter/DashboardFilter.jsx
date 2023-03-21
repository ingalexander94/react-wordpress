import { Map } from "mapbox-gl";
import { useLayoutEffect, useRef, useState } from "react";
import { ListCard } from "../list-card/ListCard";
import styles from "./dashboardfilter.module.css";

export const DashboardFilter = () => {
  const [showInfo, setShowInfo] = useState(false);
  const mapDiv = useRef(null);

  useLayoutEffect(() => {
    if (true) {
      const map = new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-72.50782, 7.89391],
        zoom: 12,
      });
      setShowInfo(true);
    }
  }, []);

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
      <div ref={mapDiv} className={styles.map}>
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
