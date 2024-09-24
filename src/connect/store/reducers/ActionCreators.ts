import axios from "axios";
import { AppDispatch } from "../store";
import { ICommentary } from "../../models/ICommentary";
import { commentsSlice } from "./CommentsSlice";

export const fetchComments = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.commentsFetching());
        const response = await axios.get<ICommentary[]>("https://jsonplaceholder.typicode.com/comments?_limit=10");
        dispatch(commentsSlice.actions.commentsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(commentsSlice.actions.commentsFetchingError(e.message));
    }
}

export const addComment = (newComment: ICommentary) => (dispatch: AppDispatch) => {
    dispatch(commentsSlice.actions.addComment(newComment));
}

export const removeComment = (comment: ICommentary) => (dispatch: AppDispatch) => {
    dispatch(commentsSlice.actions.removeComment(comment));
}