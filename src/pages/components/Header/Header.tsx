import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { EPageType, PageSceneClient } from "../../../types/pageNavigation";
import { HeaderButton } from "./HeaderButton/HeaderButton";

import styles from "./Header.module.scss";

export const Header = () => {
  // Current route page
  const [selectedPage, setSelectedPage] = useState<EPageType>();

  // Location for determine page on loading
  const location = useLocation();

  // First update
  useEffect(() => {
    // Setup current page by location
    setSelectedPage(PageSceneClient.findType(location.pathname));
  }, []);

  // Function for setup page state by buttons
  const SelectPage = (newPage: EPageType) => {
    if (selectedPage !== newPage) setSelectedPage(newPage);
  };

  // Get pages array for displaying
  const pages = PageSceneClient.getScenes();

  return (
    <div className={styles.main}>
      {pages
        .filter((e) => e.type !== EPageType.error)
        .map((e) => (
          <HeaderButton
            pageScene={e}
            selectedPage={selectedPage}
            onSelectPage={(page: EPageType) => SelectPage(page)}
            key={e.type}
          />
        ))}
    </div>
  );
};
