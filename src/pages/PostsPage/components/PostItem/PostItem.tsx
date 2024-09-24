import { IPost } from "../../../../connect/models/IPost";
import { postsApi } from "../../../../connect/postsApi/postsApi";

import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: IPost;
}

export const PostItem = (props: PostItemProps) => {
  const [removePost, {}] = postsApi.useRemovePostMutation();

  const onRemoveClick = () => {
    removePost(props.post);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>{props.post.title}</div>
      <div className={styles.body}>{props.post.body}</div>

      <div className={styles.dev_container}>
        <div className={styles.id}>{props.post.id}</div>
        <div className={styles.remove_button} onClick={onRemoveClick}>
          Удалить
        </div>
      </div>
    </div>
  );
};
