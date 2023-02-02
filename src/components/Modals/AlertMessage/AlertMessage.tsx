/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {modalActions} from '../../../services/Modal/ModalSlice';
import {colors} from '../../../style/Colors';
import styles from './AlertMessageStyle';

const KEY = 'alertMessage';

export const AlertMessage = () => {
  const dispatch = useDispatch();
  const {
    modals: {[KEY]: visible},
    params: {[KEY]: params},
  } = useSelector((state: any) => state.modal);

  useEffect(() => {
    if (visible) setTimeout(() => onClose(), 2000);
  }, [visible]);

  const onClose = () => {
    dispatch(modalActions.setModal({keyModal: KEY, visible: false}));
  };

  if (!visible) return <View />;

  const getColor = (type: string) => {
    if (type === 'danger') return colors.red;

    return colors.blue600;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.content,
          backgroundColor: getColor(params.type),
        }}>
        <Text style={styles.title}>{params?.title}</Text>
      </View>
    </View>
  );
};
