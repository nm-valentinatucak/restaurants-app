import {
  DropDownList,
  DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';
import { FC } from 'react';

import { useGetRolesListQuery } from '../../../../hooks/UserManagementApi';

interface RoleFieldProps {
  value: string;
  onChange: (event: DropDownListChangeEvent) => void;
}

const RoleField: FC<RoleFieldProps> = ({ value, onChange }) => {
  const { data: rolesDropdownData } = useGetRolesListQuery();

  return (
    <DropDownList
      data={rolesDropdownData ?? []}
      textField={'name'}
      dataItemKey={'id'}
      value={value}
      onChange={onChange}
      label='Role'
    />
  );
};

export default RoleField;
