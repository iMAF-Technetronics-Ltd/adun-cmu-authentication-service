import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";

export const SocietyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="Cmu Name" source="cmunname" />
        <BooleanInput label="Deleted" source="deleted" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="Manager Name" source="managerName" />
        <TextInput label="Max Required Member" source="maxRequiredMember" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
