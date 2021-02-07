import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          ref={this.inputRef}
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmit}
        ></TextInput>
        <TouchableOpacity style={styles.icon} onPress={this.onSubmit}>
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
