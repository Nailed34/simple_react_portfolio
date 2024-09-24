import { useNavigate } from "react-router-dom";

import { EPageType, PageScene } from "../../../../types/pageNavigation";

import styles from "./HeaderButton.module.scss";

interface HeaderButtonProps {
  pageScene: PageScene;
  selectedPage?: EPageType;
  onSelectPage?: (page: EPageType) => void;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const navigate = useNavigate();

  const checkout = (scenePath: string) => {
    props.onSelectPage?.(props.pageScene.type);
    navigate(scenePath);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkout(props.pageScene.path);
  };

  return (
    <button
      className={styles.main}
      disabled={props.selectedPage === props.pageScene.type}
      onClick={onClick}
    >
      {props.pageScene.type}
    </button>
  );
};
