import { ComponentType, FC, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from 'constants/modal-type';
import { ServiceType } from 'constants/service-type';
import { SortType } from 'constants/sort-type';
import { StorageKeys } from 'constants/storage-keys';
import { getAllKeys } from 'store/actions/async-storage';
import { fetchService, filterServices, sortServices } from 'store/actions/service';
import { selectFilters } from 'store/selectors';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';

import { FiltersModal } from 'components/create-filter-modal/filters-modal';
import { SortModal } from 'components/create-filter-modal/sort-modal';

export const withFilters =
  <T extends {}>(Component: ComponentType<T>): FC<T> =>
  (props: T) => {
    const dispatch = useDispatch();
    const { loading, filters, modalType } = useSelector(selectFilters);

    useEffect(() => {
      dispatch(getAllKeys());
      dispatch(fetchService());
    }, [dispatch]);

    useEffect(() => {
      const filterValue = filters[StorageKeys.Filter] as ServiceType;
      const sortValue = filters[StorageKeys.Sort] as SortType;

      if (!loading && filterValue) {
        dispatch(filterServices(filterValue));
      }
      if (!loading && sortValue) {
        dispatch(sortServices(sortValue));
      }
    }, [loading, dispatch, filters]);

    if (loading) {
      return (
        <View style={GlobalStyles.loader}>
          <ActivityIndicator size="large" color={DARK} />
        </View>
      );
    }

    return (
      <>
        {modalType === ModalType.Filters && <FiltersModal />}
        {modalType === ModalType.Sort && <SortModal />}
        <Component {...props} />
      </>
    );
  };
