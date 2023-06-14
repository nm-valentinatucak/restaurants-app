const ActionsCell = (props: any) => {
  const onEditClick = () => {
    props.handleEdit();
  };

  const onDeleteClick = () => {
    props.handleDelete();
  };

  return (
    <td>
      <div>
        {props.hasEditCommand && (
          <button aria-label='Edit' onClick={onEditClick}>
            <span className='k-icon k-i-edit' />
          </button>
        )}

        {props.hasDeleteCommand && (
          <button aria-label='Delete' onClick={onDeleteClick}>
            <span className='k-icon k-i-trash' />
          </button>
        )}
      </div>
    </td>
  );
};

export default ActionsCell;
