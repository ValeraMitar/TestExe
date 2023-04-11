import {useCallback, useEffect, useState} from "react";
import {UserSelector} from "./UserSelector";
import {UserCard} from "./UserCard";
import {fetchUser, fetchUsers} from "./api";
import {User} from "./User";

export function Root(): JSX.Element {
    const [userId, setUserId] = useState<number | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const onUserSelected = useCallback((userId:number):void => {
        fetchUser(userId).then((user) => {
            setUser(user);
            setUserId(userId);
        })
    }, []);
    const loadUsers = useCallback(():void => {
        fetchUsers().then((users) => {
            setUsers(users);
        })
    }, []);

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <div>
            <UserSelector  id={userId} onChange={onUserSelected} users={users} />
            <UserCard user={user}/>
        </div>
    );
}
