import * as React from 'react';
import {Text, View} from 'react-native';

function ToDo({route, navigation}) {
  return (
    <View>
      <Text>Ma Todo :</Text>
      <Text>{route.params.toDo}</Text>
    </View>
  );
}

export default ToDo;
