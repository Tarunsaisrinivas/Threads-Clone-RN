import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/Button";
export default function index() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Button />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
