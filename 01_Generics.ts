// Bad
type APIResponse = {
    items?: any[];
    item?: any;
}

// Good
type APIResponse<T> = {
    items?: T[];
    item: T;
}

type User = {
    id: string;
}

const fetchCall = <T>(method: string, url: string): Promise<APIResponse<T>> => {
    // ...
}

enum HttpMethod {
    GET= 'GET'
}

export const getUser = (id: string): Promise<User> => {
    return fetchCall<User>(HttpMethod.GET, `/v1/user/${id}`)
        .then(({ item }) => item)
}
