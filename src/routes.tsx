import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComingSoon from './pages/ComingSoon';
import Following from './pages/Following';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={Following} />
      <Screen name="Discover" component={ComingSoon} />
      <Screen name="Browse" component={ComingSoon} />
      <Screen name="Esports" component={ComingSoon} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
