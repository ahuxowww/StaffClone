import Container from '@src/assets/components/Container';
import i18n from '@src/assets/localization/i18n';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-lib';

const HomeScreen = () => {
  return (
    <Container>
      <Text style={styles.text}>{i18n.t('menu.home')}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Black',
  },
});

export default HomeScreen;
