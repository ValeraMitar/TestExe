import { Fragment, useMemo } from 'react';
import { User } from './User';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { columns } from './columns';

export interface UserCardProps {
  user: User | null;
}

const TableContainer = styled.div``;
const Table = styled.th`
  border: solid 1px blue;
`;
const HeadCell = styled.th`
  padding: 10px;
  border-bottom: solid 3px red;
  background-color: aliceblue;
  color: black;
  font-weight: bold;
  font-family: sans-serif;
`;
const TableCell = styled.th`
  padding: 10px;
  border: solid 2px gray;
  background-color: papayawhip;
  font-family: sans-serif;
`;

export function UserCard({ user }: UserCardProps): JSX.Element {

  const data = useMemo<User[]>(() => user ? [user] : [], [user]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Fragment>
      {!!data.length && (
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
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </tr>
              );
            })}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </Fragment>
  );
}
