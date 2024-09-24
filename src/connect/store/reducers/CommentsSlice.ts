import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentary } from "../../models/ICommentary"

interface CommentsState {
    comments: ICommentary[];
    isLoading: boolean;
    error: string;
}
const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: "",
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsFetching: (state) => {
            state.isLoading = true;
        },
        commentsFetchingSuccess: (state, action: PayloadAction<ICommentary[]>) => {
            state.isLoading = false;
            state.error = "";
            state.comments = action.payload;
        },
        commentsFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        addComment: (state, action: PayloadAction<ICommentary>) => {
            state.comments = [...state.comments, action.payload];
        },
        removeComment: (state, action: PayloadAction<ICommentary>) => {
            state.comments = state.comments.filter((e) => e.id !== action.payload.id);
        }
    }
})

export default commentsSlice.reducer;