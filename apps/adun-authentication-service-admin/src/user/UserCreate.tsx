import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  DateInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Alias" source="alias" />
        <DateTimeInput label="Exit Date" source="exitDate" />
        <TextInput label="First Name" source="firstName" />
        <NumberInput label="Initial Deposit" source="initialDeposit" />
        <DateInput label="Joined Date" source="joinedDate" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Prefered Deposit Mode" source="preferedDepositMode" />
        <TextInput label="Referal Name" source="referalName" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
