// 추가된 아이템을 스크롤 뷰를 통해 보여주는 부분
// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text>TodoList</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
