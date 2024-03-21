import i18n from '@src/assets/localization/i18n';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const HomeScreen = () => {

  return (
    <ScrollView>
      <Text>{i18n.t('menu.home')}</Text>
    </ScrollView>
  );
};

export default HomeScreen;
