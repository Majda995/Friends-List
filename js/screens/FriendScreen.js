import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, ScrollView, Text } from "react-native";

export default class FriendScreen extends Component {
  render() {
    const friend = this.props.route.params.friend;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scrollview}
      >
        <Image
          style={styles.image}
          source={{ uri: friend.picture.thumbnail }}
        />
        <Text style={styles.text}>
          {friend.name.first} {friend.name.last}
        </Text>
      </ScrollView>
    );
  }
}

const width = Dimensions.get("window").width * 0.75;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scrollview: {
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: width,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
