import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoList from '../ToDoList';
import ToDo from '../ToDo';
import {Button, View} from 'react-native';

const Header = ({scene, previous, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {navigation.canGoBack() ? (
        <Button onPress={navigation.goBack} title={'Back'} />
      ) : null}
    </View>
  );
};

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToDo"
        component={ToDo}
        options={{
          header: ({scene, previous, navigation}) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// function RootNavigator() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

export default StackNavigator;
