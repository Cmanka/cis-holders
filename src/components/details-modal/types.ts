import { Service } from 'interfaces/service';

export interface DetailsModalProps {
  open: boolean;
  handleClose: () => void;
  service: Service;
}
