import {ChangeEvent} from "react";
import styled from 'styled-components';
import {User} from "./User";

export interface UserSelectorProps {
    id: number | null,
    onChange: (id:number) => void,
    users: User[]
}

const Select = styled.select`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export function UserSelector({ id, onChange, users }:UserSelectorProps): JSX.Element {

    const onInternalChange = (event:ChangeEvent<HTMLSelectElement>) => {
        onChange(Number(event.currentTarget.value));
    }

    return (
        <div>
            <Select value={id ?? ''} onChange={onInternalChange}>
                {!id && <option>Select user</option>}
                {users.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
            </Select>
        </div>
    );
}
