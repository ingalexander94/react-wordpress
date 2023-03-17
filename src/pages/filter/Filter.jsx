import { FilterBar } from "../../components/filter-bar/FilterBar";
import styles from "./filter.module.css";

export const Filter = () => {
  return (
    <article className={styles.filters}>
      <FilterBar />
    </article>
  );
};
