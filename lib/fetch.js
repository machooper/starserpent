import {request} from 'graphql-request'

export const grapher = query => request('/api/graphql', query)
export const fetcher = (url, options) => fetch(url, options).then(r => r.json())
