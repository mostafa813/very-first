import React from "react";
import styles from "./filterform.module.css"
function FilterForm() {
  return (
    <div className={styles.container}>
      <p className={styles.kind}>نوع</p>
      <div className={styles.kinds}>
        <button>فیلم</button>
        <button>سریال</button>
      </div>
    </div>
  );
}
export default FilterForm;
