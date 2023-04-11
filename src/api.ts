import {User} from "./User";

export function fetchUser(userId: number): Promise<User> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json() as Promise<User>)
}


export function fetchUsers(): Promise<User[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json() as Promise<User[]>)
}
