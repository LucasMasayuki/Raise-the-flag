import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button } from 'react-native';

import { TabOneParamList } from '../../types';
import TabOneScreen from '../../screens/TabOneScreen';
import LogoTitle from '../app_bar/LogoTitle';

export default function FlagsNavigator() {
  // Each tab has its own navigation stack, you can read more about this pattern here:
  // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
  const TabOneStack = createStackNavigator<TabOneParamList>();

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => {
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          }
        }}
      />
    </TabOneStack.Navigator>
  );
}