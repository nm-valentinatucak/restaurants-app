import styles from './ActionsCell.module.scss';

const ActionsCell = (props: any) => {
  const onEditClick = () => {
    props.handleEdit();
  };

  const onDeleteClick = () => {
    props.handleDelete();
  };

  return (
    <td>
      <div className={styles.buttonsWrapper}>
        {props.hasEditCommand && (
          <button
            aria-label='Edit'
            onClick={onEditClick}
            className={styles.button}
          >
            <span className={'k-icon k-i-edit'} />
          </button>
        )}

        {props.hasDeleteCommand && (
          <button
            aria-label='Delete'
            onClick={onDeleteClick}
            className={styles.button}
          >
            <span className='k-icon k-i-trash' />
          </button>
        )}
      </div>
    </td>
  );
};

export default ActionsCell;
