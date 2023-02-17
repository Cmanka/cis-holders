import { ComponentType, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'store/selectors';
import { getAllKeys } from 'store/actions/async-storage';
import { fetchService, filterServices, sortServices } from 'store/actions/service';
import { StorageKeys } from 'constants/storage-keys';
import { ServiceType } from 'constants/service-type';
import { ActivityIndicator, View } from 'react-native';
import { GlobalStyles } from 'styles';
import { DARK } from 'styles/variables';
import { ModalType } from 'constants/modal-type';
import { SortType } from 'constants/sort-type';
import { SortModal } from 'components/create-filter-modal/sort-modal';
import { FiltersModal } from 'components/create-filter-modal/filters-modal';

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
