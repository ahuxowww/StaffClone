import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Text, View} from 'react-native-ui-lib';
import {Colors, Fonts, Svgs} from '@src/assets';

export const SlicerBar = props => {
  return (
    <View style={styles.root}>
      <DrawerContentScrollView>
        <View flex center marginV-16>
          <Text style={styles.textbold}>Hello James B.</Text>
        </View>
        <DrawerItem
          style={styles.containerButton}
          label="Home"
          labelStyle={styles.labelButton}
          icon={() => <Svgs.Home height={24} width={24} fill={Colors.white} />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          style={styles.containerButton}
          label="Custom"
          labelStyle={styles.labelButton}
          icon={() => (
            <Svgs.MenuRestaurant height={24} width={24} fill={Colors.white} />
          )}
          onPress={() => props.navigation.navigate('Detail')}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderWidth: 0,
  },
  textbold: {
    fontSize: 24,
    lineHeight: 24,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
  },
  containerButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  labelButton: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.white,
    fontFamily: Fonts.fontFamilyCustom.RobotoBold,
  },
});
