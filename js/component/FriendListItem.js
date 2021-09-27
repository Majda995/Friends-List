import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function (props) {
  const { friend, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: friend.picture.medium }} />
        <View style={styles.column}>
          <Text style={styles.text}>
            {friend.name.first} {friend.name.last}
          </Text>
          <Text style={styles.mail}>{friend.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 1,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
  },
  mail: {
    fontSize: 16,
    fontWeight: "100",
  },
});
