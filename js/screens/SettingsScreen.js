import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

function SettingsHeader(props) {
  return <Text style={styles.section}>{props.text}</Text>;
}

function SettingsItem(props) {
  return <Text style={styles.item}>{props.text}</Text>;
}

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          // data = {[{key:1, name: 'Alice'},{key:2, name: 'Bob'}]}
          sections={[
            {
              title: "Version", // Section
              data: [{ key: "1", info: "1.0" }], // item
            }, // Abschnitt1
            {
              title: "Impressum",
              data: [
                { key: "3", info: "Minktec GmbJ" },
                { key: "4", info: "Copyright 2021" },
              ],
            }, // Abschnitt2
          ]}
          renderItem={({ item }) => <SettingsItem text={item.info} />}
          renderSectionHeader={({ section }) => (
            <SettingsHeader text={section.title} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    backgroundColor: "whitesmoke",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 18,
    padding: 5,
  },
  item: {
    color: "dimgrey",
    fontSize: 18,
    padding: 5,
  },
});
