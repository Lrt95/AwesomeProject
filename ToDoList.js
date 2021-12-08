/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useMemo } from "react";
import type {Node} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, removeTodo } from "./store/reducer/todo-reducer";

const ToDoList: () => Node = () => {
  const [listToDo, setListToDo] = React.useState([]);
  const [toDo, setToDo] = React.useState('');
  const [search, setSearch] = React.useState('');
  const toDoList = useSelector(state => state.todoList.todoList);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    setListToDo(toDoList);
  }, [toDoList]);

  const handleAdd = useCallback(() => {
    dispatch(addTodo(toDo));
  }, [dispatch, toDo]);

  const handleDelete = useCallback(
    index => {
      dispatch(removeTodo(index));
    },
    [dispatch],
  );

  const toDoFiltered = useMemo(() => {
    return listToDo.filter(toDo => toDo.includes(search));
  }, [listToDo, search]);

  const goToToDo = useCallback(
    item => {
      return navigation.navigate('ToDo', {toDo: item});
    },
    [navigation],
  );

  function toDoItem(item, index) {
    return (
      <View ref={index} style={styles.containerText}>
        <TouchableOpacity
          onPress={() => goToToDo(item)}
          style={styles.containerItemText}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
        <View style={styles.containerItemButton}>
          <Button title={'Supprimer'} onPress={() => handleDelete(index)} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.containerTodo}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={styles.inputSearch}
          placeholder="Recherche"
        />
        <FlatList
          style={styles.flatList}
          data={toDoFiltered}
          renderItem={({item, index}) => {
            return toDoItem(item, index);
          }}
        />
      </View>
      <View style={styles.containerAdd}>
        <View style={styles.containerTextInputAdd}>
          <TextInput
            value={toDo}
            onChangeText={setToDo}
            style={styles.inputAdd}
            placeholder="Ajouter"
          />
        </View>
        <View style={styles.containerButtonAdd}>
          <Button onPress={handleAdd} title={'Ajouter'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  containerTodo: {
    flex: 11,
    alignItems: 'center',
    margin: 5,
  },
  containerText: {
    margin: 5,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    height: 50,
  },
  text: {
    marginLeft: 5,
    fontSize: 20,
  },
  inputSearch: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputAdd: {
    margin: 5,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  containerItemText: {
    flex: 4,
    justifyContent: 'center',
  },
  containerItemButton: {
    flex: 2,
    justifyContent: 'center',
    margin: 5,
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  containerAdd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerTextInputAdd: {
    flex: 3,
  },
  containerButtonAdd: {
    flex: 1,
    margin: 5,
  },
});

export default ToDoList;
