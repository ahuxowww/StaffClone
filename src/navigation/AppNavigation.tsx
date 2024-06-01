import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import HomeScreen from '@src/screens/homescreen';
import DetailScreen from '@src/screens/detail';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Colors, Svgs} from '@src/assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '@src/assets/components/Container';
import {SlicerBar} from '@src/assets/components/SliderBar';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Screens = ({navigation}) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [1, 25], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });
  const [open, setopen] = React.useState(false);

  const headerLeft = React.useCallback(() => {
    return (
      <Pressable onPress={openDrawer}>
        <Svgs.Menu width={24} height={24} />
      </Pressable>
    );
  }, []);

  const closeDrawer = React.useCallback(() => {
    navigation.closeDrawer();
    setopen(!open);
  }, [navigation, open]);

  const openDrawer = React.useCallback(() => {
    if (open === true) {
      navigation.openDrawer();
    } else {
      navigation.openDrawer(setopen(!open));
    }
  }, [navigation, open]);
  return (
    <Container backgroundColor={Colors.greyDark}>
      <Animated.View style={[styles.shadowContainer, animatedStyle]}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            title: 'Menu Marker',
            headerTitleStyle: {
              fontFamily: 'Roboto-Bold',
              fontSize: 18,
            },
            headerLeft: headerLeft,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </Animated.View>
    </Container>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: Colors.greyDark,
            flex: 1,
            width: '62%',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 18,
          },
        }}
        drawerContent={props => <SlicerBar {...props} />}>
        <Drawer.Screen name="Screens" options={{}}>
          {props => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    marginTop: 30,
    marginLeft: 20,
    position: 'absolute',
  },
  containerHeader: {
    marginBottom: 25,
    left: 80,
    position: 'relative',
  },
  shadowContainer: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'stretch',
    shadowColor: '#000000',
    shadowOffset: {
      height: 20,
      width: -20,
    },
    shadowOpacity: 0.6,
    shadowRadius: 0,
    elevation: 20,
  },
  headerLeft: {
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    height: 70,
    alignItems: 'center',
  },
});
