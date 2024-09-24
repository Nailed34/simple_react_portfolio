import { NewPostForm } from "./components/NewPostForm/NewPostForm";

import { PostItem } from "./components/PostItem/PostItem";
import { postsApi } from "../../connect/postsApi/postsApi";

import styles from "./PostsPage.module.scss";

export const PostsPage = () => {
  const {
    data: posts,
    error: fetchError,
    isLoading: fetchIsLoading,
  } = postsApi.useFetchAllPostsQuery();

  return (
    <div className={styles.main}>
      <div className={styles.post_list}>
        <div>Посты</div>
        {fetchIsLoading && <div>Загрузка...</div>}
        {fetchError && <div>Ошибка при загрузке</div>}
        {posts && posts.map((e) => <PostItem post={e} key={e.id} />)}
      </div>
      <div className={styles.new_post_form}>
        <NewPostForm />
      </div>
    </div>
  );
};
