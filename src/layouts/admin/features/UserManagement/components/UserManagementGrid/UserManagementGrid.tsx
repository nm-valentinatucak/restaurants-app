import { FC } from 'react';
import clsx from 'clsx';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';

import { User } from '../../../../../../types/typeDefinitions';

import styles from './UserManagementGrid.module.scss';
import ActionsCell from '../../../../components/GridCells/ActionsCell/ActionsCell';

interface Props {
  data: User[] | undefined;
  openModal: (type: number) => Promise<void>;
  loggedUser: User | null;
  handleEdit: (dataItem: User) => void;
  handleDelete: (dataItem: User) => void;
}

const UserManagementGrid: FC<Props> = ({
  data,
  openModal,
  loggedUser,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Grid
      sortable={true}
      reorderable={true}
      data={data}
      pageable={{ buttonCount: 4, pageSizes: true }}
      resizable
    >
      <GridToolbar>
        <button
          className={clsx(
            'k-button k-button-md k-rounded-md k-button-solid',
            styles.addButton
          )}
          onClick={() => openModal(1)}
        >
          Add new
        </button>
      </GridToolbar>

      <GridColumn field='id' title='ID' />
      <GridColumn field='userName' title='Username' />
      <GridColumn field='fullName' title='Full name' />
      <GridColumn field='role.name' title='Role' />

      {loggedUser && loggedUser.role && loggedUser?.role?.id <= 2 && (
        <GridColumn
          field=''
          title=''
          cell={(cellProps) => (
            <ActionsCell
              {...cellProps}
              hasEditCommand={
                cellProps?.dataItem?.role?.id > 2 ||
                cellProps?.dataItem?.id === loggedUser?.id
                  ? true
                  : false
              }
              handleEdit={() => handleEdit(cellProps?.dataItem)}
              hasDeleteCommand={
                cellProps?.dataItem?.role?.id > 2 ||
                cellProps?.dataItem?.id === loggedUser?.id
                  ? true
                  : false
              }
              handleDelete={() => handleDelete(cellProps.dataItem)}
            />
          )}
        />
      )}
    </Grid>
  );
};

export default UserManagementGrid;
