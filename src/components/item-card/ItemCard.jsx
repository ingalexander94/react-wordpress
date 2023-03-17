import styles from "./itemcard.module.css";

export const ItemCard = () => {
  return (
    <div className={styles.item_card}>
      <img src={`${process.env.PUBLIC_URL}/assets/inmueble.png`} alt="photos" />
      <div>
        <div className={styles.header_card}>
          <h4>VIS</h4>
          <h4>Apartamento</h4>
        </div>
        <div className={styles.info_card}>
          <h3>Buonavista</h3>
          <p>10 unidades disponibles</p>
          <p>EL CUJI - ID:26988</p>
        </div>
        <div className={styles.services_card}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/area.svg`}
              alt="service_photo"
            />
            <p>50m²</p>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/area.svg`}
              alt="service_photo"
            />
            <p>2</p>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/area.svg`}
              alt="service_photo"
            />
            <p>1</p>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/area.svg`}
              alt="service_photo"
            />
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
