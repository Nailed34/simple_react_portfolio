import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../connect/hooks/redux";
import {
  fetchComments,
  addComment,
  removeComment,
} from "../../connect/store/reducers/ActionCreators";
import { ICommentary } from "../../connect/models/ICommentary";

import { CommentListItem } from "./components/CommentListItem/CommentListItem";
import { NewCommentForm } from "./components/NewCommentForm/NewCommentForm";

import styles from "./CommentsPage.module.scss";

export const CommentsPage = () => {
  const dispatch = useAppDispatch();

  const { comments, isLoading, error } = useAppSelector((state) => state.commentsReducer);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const AddComment = (newComment: ICommentary) => {
    newComment.id = new Date().getTime();

    dispatch(addComment(newComment));
  };

  const RemoveComment = (comment: ICommentary) => {
    dispatch(removeComment(comment));
  };

  return (
    <div className={styles.main}>
      <NewCommentForm addNewComment={(e) => AddComment(e)} />

      <div className={styles.list_container}>
        <div className={styles.list_item}>
          {isLoading && (
            <div className={styles.loading_message}>Загрузка...</div>
          )}
          {error && <div className={styles.error_message}>{error}</div>}
          {!isLoading && comments.map((e) => (
            <CommentListItem
              key={e.id}
              comment={e}
              removeComment={(e) => RemoveComment(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
