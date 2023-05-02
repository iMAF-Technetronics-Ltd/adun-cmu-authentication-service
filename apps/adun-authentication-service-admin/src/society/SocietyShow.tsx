import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const SocietyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Cmu Name" source="cmunname" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Deleted" source="deleted" />
        <TextField label="Description" source="description" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="Manager Name" source="managerName" />
        <TextField label="Max Required Member" source="maxRequiredMember" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
