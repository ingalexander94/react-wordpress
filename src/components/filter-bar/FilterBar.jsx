import {
  numberRooms,
  propertyStatus,
  propertyTypes,
  sectors,
} from "../../utils/data";
import FilterItem from "../filter-item/FilterItem";
import styles from "./filterbar.module.css";

export const FilterBar = () => {
  return (
    <section className={styles.list_filters}>
      <FilterItem
        title={"Tipo de Inmueble"}
        items={propertyTypes}
        index={1}
        isNumbers={false}
      />
      <FilterItem
        title={"Estado del Inmueble"}
        items={propertyStatus}
        index={2}
        isNumbers={false}
      />
      <FilterItem
        title={"Sector o ubicación"}
        items={sectors}
        index={3}
        isNumbers={false}
      />
      <FilterItem
        title={"Número de habitaciones"}
        items={numberRooms}
        index={4}
        isNumbers={true}
      />
      <div className={styles.btn_filters}>
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
