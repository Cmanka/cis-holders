import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Button } from 'components/button';
import { CARD } from 'styles/variables';
import { FC } from 'react';
import { FilterModalProps } from './types';
import { capitalize } from 'utils/helpers/capitalize';

const FilterModal = ({ open, handleClose, filter, handleFilter, handleClear, values }: FilterModalProps<any>) => {
  return (
    <Modal transparent animationType="fade" visible={open} onRequestClose={handleClose}>
      <View style={styles.centeredView}>
        <View style={styles.filters}>
          {values.map((value) => (
            <TouchableOpacity key={value} onPress={handleFilter(value)}>
              <Text key={value} style={{ ...styles.text, color: filter === value ? CARD : styles.text.color }}>
                {capitalize(value)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {Boolean(filter) && (
          <TouchableOpacity onPress={handleClear} style={styles.clear}>
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>
        )}
        <View style={styles.button}>
          <Button label="Close" theme="gray" onPress={handleClose} />
        </View>
      </View>
    </Modal>
  );
};

export const createFilterModal = <T extends {}>(): FC<FilterModalProps<T>> => FilterModal;
