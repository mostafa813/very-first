import { Stack } from "@mui/material";
import { HambergerMenu, SearchNormal1 } from "iconsax-react";
import styles from "./searchbar.module.css"
import React from "react";

function SearchAppBar() {
  return (
    <div className={styles.container}>
      <div className={styles.menuicon}>
        <HambergerMenu size="20" color="#FFF" />
      </div>
      <div className={styles.searchsection}>
        <input type="search" className={styles.searchInput}/>
        <SearchNormal1 size="16" color="#eb8307"/>
      </div>
    </div>
  );
}

export default SearchAppBar;