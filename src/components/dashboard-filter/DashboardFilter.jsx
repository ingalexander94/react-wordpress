import { Map } from "mapbox-gl";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ListCard } from "../list-card/ListCard";
import styles from "./dashboardfilter.module.css";

export const DashboardFilter = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const mapDiv = useRef(null);
  const targetRef = useRef(null);

  useLayoutEffect(() => {
    if (true) {
      const map = new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-72.50782, 7.89391],
        zoom: 12,
      });
      setShowInfo(true);
      setShowMap(true);
    }
  }, []);

  const toggleMap = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          console.log("Sissass");
        }
      },
      {
        rootMargin: "0px 0px",
      }
    );

    observer.observe(mapDiv.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.dashboard}>
      {showInfo && (
        <div className={styles.info}>
          <ListCard />
        </div>
      )}
      <div ref={mapDiv} className={styles.map} id="map">
        <button onClick={toggleMap}>
          <img
            className={showInfo ? styles.toLeft : styles.toRight}
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Mostrar {showInfo ? "mapa" : "listado"}</span>
        </button>
      </div>
      <div className={styles.nav_mobile}>
        <a
          href={`/#${showMap ? "map" : "info"}`}
          onClick={() => setShowMap(!showMap)}
        >
          <img
            className={showInfo ? styles.toLeft : styles.toRight}
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Mostrar {showMap ? "listado" : "mapa"}</span>
        </a>
        <button>
          <span>Filtro Avanzado</span>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/filtro_avanzado.svg`}
            alt="bars"
          />
        </button>
      </div>
    </section>
  );
};
