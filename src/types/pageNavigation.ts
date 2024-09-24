import { MainPage } from "../pages/MainPage/MainPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PostsPage } from "../pages/PostsPage/PostsPage";

export enum EPageType {
  home = "Главная",
  about = "Обо мне",
  comments = "Комментарии",
  posts = "Посты",
  error = "Ошибка",
}

export class PageScene {
  type: EPageType;
  path: string;
  page: () => JSX.Element;

  // Init page scene by page type
  constructor(type: EPageType) {
    this.type = type;

    switch (type) {
      case EPageType.home:
        this.path = "/";
        this.page = MainPage;
        break;
      case EPageType.about:
        this.path = "/about";
        this.page = AboutPage;
        break;
      case EPageType.comments:
        this.path = "/comments";
        this.page = CommentsPage;
        break;
      case EPageType.posts:
        this.path = "/posts";
        this.page = PostsPage;
        break;
      default:
        this.path = "*";
        this.page = ErrorPage;
        break;
    }
  }
}

// Client for page scenes manipulations
export class PageSceneClient {
  private static _scenes: PageScene[];

  public static getScenes = () => {
    if (!this._scenes) {
      this._scenes = Object.values(EPageType).map((e) => (new PageScene(e)));
    }
    return this._scenes;
  }

  // Try find type by path, return error type if doesn't exist
  public static findType = (path: string) => {
    if (!this._scenes) return EPageType.error;

    let result = this._scenes.find((e) => e.path === path)
    if (!result) return EPageType.error;

    return result.type;
  }
}
