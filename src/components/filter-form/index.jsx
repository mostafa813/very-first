import * as React from "react";
import { useState } from "react";
import styles from "./filterform.module.css";
import { Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  sliders: {
  color: "#000 !important",
  height: 4,
    "& .MuiSlider-thumb": {
      height: 14,
      width: 14,
      borderRadius: 3,
      backgroundColor: "#eb8307",
      border: 0,
      transform: 'translateY(-50%) rotate(45deg)',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: "none",
      },
      "&:before": {
        display: "none",
      },
    },
  },
});

function FilterForm() {
  const [selected, setSelected] = useState("");
  const [value, setValue] = React.useState([1888, 2023]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = useStyles();

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
      <input
        type="text"
        className={styles.director2}
        placeholder="Christopher Nolan"
      />
      <p className={styles.actor}>بازیگران</p>
      <input
        type="text"
        className={styles.director2}
        placeholder="leonardo dicaprio"
      />
      <p className={styles.actor}>سال ساخت</p>
      <div className={styles.slider}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value}
          onChange={handleChange}
          disableSwap
          max={2023}
          min={1888}
          className={style.sliders}
        />
      </div>
      <p className={styles.actor2}>کشور</p>
      <select name="pets" className={styles.contri}>
        <option value="all">همه</option>
        <option value="iran">ایران</option>
        <option value="us">آمریکا</option>
        <option value="india">هند</option>
      </select>
      <p className={styles.actor3}>رده سنی</p>
      <select name="pets" className={styles.contri}>
        <option value="all">همه</option>
        <option value="iran">PG-13</option>
        <option value="us">TV-PG</option>
        <option value="india">R</option>
        <option value="india">P</option>
      </select>
      <p className={styles.actor3}>ژانر</p>
      <select name="pets" className={styles.contri}>
        <option value="all">همه</option>
        <option value="iran">اکشن</option>
        <option value="us">جنایی</option>
        <option value="india">ترسناک</option>
        <option value="india">علمی-تخیلی</option>
      </select>
    </div>
  );
}
export default FilterForm;
