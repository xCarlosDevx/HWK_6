import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  Image,
} from "react-native";
import axios from "axios";

export default function Country() {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const getUniversities = () => {
    axios
      .get(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
        placeholder="Enter a country"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <Button title="Get Universities" onPress={getUniversities} />
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Domain: {item.domains[0]}</Text>
            <Text>Web Page: {item.web_pages[0]}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
});
