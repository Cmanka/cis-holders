import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from 'constants/modal-type';
import { ServiceType } from 'constants/service-type';
import { StorageKeys } from 'constants/storage-keys';
import { addKey, removeKey } from 'store/actions/async-storage';
import { clearServices } from 'store/actions/service';
import { selectServiceSectionList } from 'store/selectors/service';
import { useModal } from 'utils/hooks/use-modal';

import { createFilterModal } from 'components/create-filter-modal';

const Modal = createFilterModal<ServiceType>();

export const FiltersModal = () => {
  const dispatch = useDispatch();
  const { open, handleClose } = useModal(ModalType.Filters);
  const { filter } = useSelector(selectServiceSectionList);

  const handleFilter = (type: ServiceType) => () => {
    dispatch(addKey({ value: type, type: StorageKeys.Filter }));
    handleClose();
  };

  const handleClear = () => {
    dispatch(clearServices());
    dispatch(removeKey(StorageKeys.Filter));
    handleClose();
  };

  return (
    <Modal
      filter={filter}
      values={Object.values(ServiceType)}
      handleFilter={handleFilter}
      handleClose={handleClose}
      open={open}
      handleClear={handleClear}
    />
  );
};
