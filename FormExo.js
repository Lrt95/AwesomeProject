/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo} from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FormExo: () => Node = () => {
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  useEffect(() => {
    password.length > 3 ? setIsValid(true) : setIsValid(false);
  }, [password]);

  useMemo(() => {
    if (confirmPassword !== password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [confirmPassword, password]);

  const handleSend = useCallback(() => {
    if (isValid) {
      Alert.alert(
        `Bonjour ${firstName} ${lastName}, votre mot de passe est ${password}`,
      );
    }
  }, [isValid, firstName, lastName, password]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.containerKeyboard}>
        <View style={styles.containerText}>
          <Text style={{textAlign: 'center'}}>Inscription</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png',
            }}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            onChangeText={onChangeFirstName}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Nom"
            onChangeText={onChangeLastName}
            value={lastName}
          />
          <TextInput
            style={isValid ? styles.input : styles.inputError}
            secureTextEntry={true}
            placeholder="Mot de passe"
            onChangeText={onChangePassword}
            value={password}
          />
          <TextInput
            style={isValid ? styles.input : styles.inputError}
            secureTextEntry={true}
            placeholder="Confirmer le mot de passe"
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <View style={styles.button}>
          <Button title="Press me" onPress={() => handleSend()} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerKeyboard: {
    flexGrow: 1,
    alignItems: 'center',
  },
  containerInput: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerText: {
    flex: 2,
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputError: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default FormExo;
