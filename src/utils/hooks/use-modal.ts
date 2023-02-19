import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from 'constants/modal-type';
import { closeModal, openModal } from 'store/actions/modal';
import { selectModal } from 'store/selectors/modal';

export const useModal = (modalType: ModalType) => {
  const { open, data, type } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOpen = (data?: unknown) => {
    dispatch(openModal(modalType, data));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return { open, data, type, handleOpen, handleClose };
};
