import { ICommentary } from "../../../../connect/models/ICommentary";

import styles from "./CommentListItem.module.scss";

interface CommentListItemProps {
  comment: ICommentary;
  removeComment: (comment: ICommentary) => void;
}

export const CommentListItem = ({comment, removeComment}: CommentListItemProps) => {
  const onClickButton = (e: React.MouseEvent) => {
    e.preventDefault();
    removeComment(comment);
  }

  return (
    <div className={styles.main}>
      <div className={styles.flex_container}>
        <div className={styles.flex_item}>
          <div className={styles.tooltip_container}>
            <div className={styles.name}>{comment.name + ":"}</div>
            <div className={styles.item}>{comment.email}</div>
          </div>
          <div className={styles.body}>{comment.body}</div>
          <div>{comment.id}</div>
        </div>
        <button className={styles.removeButton} onClick={(e) => onClickButton(e)}>
          x
        </button>
      </div>
    </div>
  );
};
