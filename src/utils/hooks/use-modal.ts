import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from 'store/selectors/modal';
import { closeModal, openModal } from 'store/actions/modal';

export const useModal = () => {
  const { open, data } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOpen = (data: unknown) => {
    dispatch(openModal(data));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return { open, data, handleOpen, handleClose };
};
