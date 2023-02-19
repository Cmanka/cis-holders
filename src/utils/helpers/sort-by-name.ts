import { SortType } from 'constants/sort-type';
import { Service } from 'interfaces/service';

export const sortByName = (services: Service[], sort: SortType) => {
  if (sort === SortType.Asc) {
    return [...services].sort((a, b) => a.title.localeCompare(b.title));
  }

  return [...services].sort((a, b) => b.title.localeCompare(a.title));
};
