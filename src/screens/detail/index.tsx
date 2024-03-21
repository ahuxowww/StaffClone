import i18n from '@src/assets/localization/i18n';
import React from 'react';
import {Text, View} from 'react-native';

const DetailScreen = () => {
  return (
    <View>
       <Text>{i18n.t('menu.home')}</Text>
    </View>
  );
};

export default DetailScreen;
