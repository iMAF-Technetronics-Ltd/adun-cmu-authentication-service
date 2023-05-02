import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Alias" source="alias" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Exit Date" source="exitDate" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Initial Deposit" source="initialDeposit" />
        <TextField label="Joined Date" source="joinedDate" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Prefered Deposit Mode" source="preferedDepositMode" />
        <TextField label="Referal Name" source="referalName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
