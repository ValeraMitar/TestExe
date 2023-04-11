import React, {Fragment} from "react";
import {User} from "./User";
import styled from 'styled-components';
import { useTable } from 'react-table';
import {Columns} from "./Columns";

export interface UserSelectorProps {
    user: User | null
}
const TableContainer = styled.div``;
const Table = styled.th`
  border: solid 1px blue;
`;
const HeadCell = styled.th`
  font-family: American Typewriter;
`;
const TableCell = styled.th`
  font-family: Arial Rounded MT Bold;
`;

export function UserCard({ user }:UserSelectorProps): JSX.Element {

    const data = !!user ? [
        {...JSON.parse(JSON.stringify(user))},
    ] : [];

    const columns = React.useMemo(
        () => Columns,
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Fragment>
            {!!user && (
                <TableContainer>
                    <Table {...getTableProps()}>
                        <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <HeadCell
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 3px red',
                                            background: 'aliceblue',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </HeadCell>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <TableCell
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </TableCell>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </TableContainer>
            )}
        </Fragment>
    );
}
