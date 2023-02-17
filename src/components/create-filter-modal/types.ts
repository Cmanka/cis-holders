export interface FilterModalProps<T> {
  open: boolean;
  handleClose: () => void;
  handleClear: () => void;
  handleFilter: (type: T) => () => void;
  filter: T | null;
  values: string[];
}
