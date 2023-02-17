import { DrawerHeaderProps } from '@react-navigation/drawer';
import { ModalType } from 'constants/modal-type';

export interface HeaderProps extends DrawerHeaderProps {
  handleFilters: (type: ModalType) => () => void;
}
