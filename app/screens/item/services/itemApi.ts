import { api } from '~services/index'

export const itemApi = api.injectEndpoints({
    endpoints: (builder) => ({

        item: builder.query({
            query: ({
                page
            }) => {

                return {
                    url: `/item/${page}`,
                    method: 'GET',
                }
            },
        }),
        findOne: builder.query({
            query: ({
                id
            }) => {

                return {
                    url: `/item/find-one/${id}`,
                    method: 'GET',
                }
            },
        }),
        postItem: builder.mutation({
            query: (body) => {

                return {
                    url: `/item`,
                    method: 'POST',
                    body,
                }
            },
        }),
        patchItem: builder.mutation({
            query: ({
                id,
                ...body
            }) => {

                return {
                    url: `/item/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
        }),
        deleteItem: builder.mutation({
            query: ({
                id
            }) => {

                return {
                    url: `/item/${id}`,
                    method: 'DELETE',
                }
            },
        }),

    }),
})

export const {
    useItemQuery,
    useFindOneQuery,
    usePostItemMutation,
    usePatchItemMutation,
    useDeleteItemMutation,
} = itemApi