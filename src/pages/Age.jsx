import React, { useState } from "react";
import { View, TextInput, Button, Image, StyleSheet, Text } from "react-native";
import axios from "axios";

export default function Age() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [ageGroup, setAgeGroup] = useState("");

  const predictAge = () => {
    axios
      .get(`https://api.agify.io/?name=${name}`)
      .then((response) => {
        setAge(response.data.age);
        if (response.data.age < 18) {
          setAgeGroup("Young");
        } else if (response.data.age < 60) {
          setAgeGroup("Adult");
        } else {
          setAgeGroup("Old");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getImage = () => {
    if (ageGroup === "Young") {
      return require("../../assets/young.jpg");
    } else if (ageGroup === "Adult") {
      return require("../../assets/adult.jpg");
    } else if (ageGroup === "Old") {
      return require("../../assets/old.jpg");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/toolbox.png")}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Predict Age" onPress={predictAge} />
      {age && (
        <Text>
          The predicted age for {name} is {age}, {ageGroup}
        </Text>
      )}
      {age && <Image style={styles.imageAge} source={getImage()} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  imgContainer: {
    backgroundColor: "#cbb1cb",
    borderRadius: "20%",
    display: "flex",
    alignItems: "center",
    padding: 20,
    height: 210,
    width: 280,
    marginVertical: 20,
    marginLeft: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageAge: {
    height: 210,
    width: 280,
    resizeMode: "contain",
  },
});
