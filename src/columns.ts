import { Column } from 'react-table';
import { User } from './User';

export const columns: Array<Column<User>> = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'City',
    accessor: user => user.address.city,
  },
  {
    Header: 'Street',
    accessor: user => user.address.street,
  },
  {
    Header: 'Suite',
    accessor: user => user.address.suite,
  },
  {
    Header: 'Company',
    accessor: user => user.company.name,
  },
];
