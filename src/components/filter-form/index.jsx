import * as React from 'react';
import { useState } from "react";
import styles from "./filterform.module.css";
import { Slider } from "@mui/material";

function FilterForm() {
  const [selected, setSelected] = useState("");
  return (
    <div className={styles.container}>
      <p className={styles.kind}>نوع</p>
      <div className={styles.kinds}>
        <button
          onClick={() => setSelected("film")}
          className={`${styles.button} ${
            selected === "film" ? styles.selected : ""
          }`}
        >
          فیلم
        </button>
        <button
          onClick={() => setSelected("serial")}
          className={`${styles.button} ${
            selected === "serial" ? styles.selected : ""
          }`}
        >
          سریال
        </button>
      </div>
      <p className={styles.director}>کارگردان</p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
export default FilterForm;
