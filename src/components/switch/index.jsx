import React from "react";
import styles from "./switch.module.css";
// import Switch from "react-switch";

// const SwitchExample = () => {
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   return (
//     <label>
//       <Switch
//         width="33px"
//         height="21px"
//         checked={checked}
//         onColor="#e98308"
//         offColor="#242424"
//         checkedIcon={false}
//         offHandleColor="#fff"
//         uncheckedIcon={false}
//         onHandleColor="#242424"
//         onChange={handleChange}
//       />
//     </label>
//   );
// };
const SwitchExample = () => {
  return (
    <label>
        <input type="checkbox"></input>
        <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default SwitchExample;
