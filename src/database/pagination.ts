import { ID } from './id'

export interface IPaginationOptions { limit?: number, last?: string }
export interface IPagination {
    hasMore: boolean,
    last?: ID
}
