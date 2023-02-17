import { useModal } from 'utils/hooks/use-modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearServices } from 'store/actions/service';
import { selectServiceSectionList } from 'store/selectors/service';
import { ModalType } from 'constants/modal-type';
import { addKey, removeKey } from 'store/actions/async-storage';
import { StorageKeys } from 'constants/storage-keys';
import { createFilterModal } from 'components/create-filter-modal';
import { SortType } from 'constants/sort-type';

const Modal = createFilterModal<SortType>();

export const SortModal = () => {
  const dispatch = useDispatch();
  const { open, handleClose } = useModal(ModalType.Sort);
  const { sort } = useSelector(selectServiceSectionList);

  const handleFilter = (type: SortType) => () => {
    dispatch(addKey({ value: type, type: StorageKeys.Sort }));
    handleClose();
  };

  const handleClear = () => {
    dispatch(clearServices());
    dispatch(removeKey(StorageKeys.Sort));
    handleClose();
  };

  return (
    <Modal
      filter={sort}
      values={Object.values(SortType)}
      handleFilter={handleFilter}
      handleClose={handleClose}
      open={open}
      handleClear={handleClear}
    />
  );
};
