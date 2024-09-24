import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000'
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], void>({
            query: () => ({
                url: '/posts'
            }),
            providesTags: ['Post']
        }),
        createNewPost: build.mutation<IPost, IPost>({
            query: (newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost
            }),
            invalidatesTags: ['Post']
        }),
        removePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
});