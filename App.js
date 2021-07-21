  
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Test1, Test2 } from './android/app/src/components'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="test1" component={Test1}/>
      <Tab.Screen name="test2" component={Test2}/>
    </Tab.Navigator>
  )
}

export default App;