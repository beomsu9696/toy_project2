import React, { Component, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

class HabitAddForm extends Component {
  onSubmitEditing = () => {
    console.log("text");
  };
  onChangeText = () => {
    console.log("abc");
  };

  render() {
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
        ></TextInput>
        <TouchableOpacity style={styles.icon} onPress={this.onSubmitEditing}>
          <FontAwesomeIcon icon={faFolderPlus} color={"green"} size={32} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HabitAddForm;
