import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";

export const SocietyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
