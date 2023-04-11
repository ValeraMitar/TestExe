import React, {Fragment} from "react";
import {User} from "./User";
import styled from 'styled-components';
import { useTable } from 'react-table';
import {Columns} from "./Columns";

export interface UserCardProps {
    user: User | null
}
const TableContainer = styled.div``;
const Table = styled.th`
  border: solid 1px blue;
`;
const HeadCell = styled.th`
  border-bottom: solid 3px red;
  background-color: aliceblue;
  color: black;
  font-weight: bold;
  font-family: American Typewriter;
`;
const TableCell = styled.th`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid 2px gray;
  background-color: papayawhip;
  font-family: Arial Rounded MT Bold;
`;

export function UserCard({ user }:UserCardProps): JSX.Element {

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
