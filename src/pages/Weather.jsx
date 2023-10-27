import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=b94ce0566c904ec1a4943140232710&q=${city}&aqi=no`
      )
      .then((response) => {
        setWeather(response.data.current);
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
        placeholder="Enter a city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather && (
        <Text>
          The current weather in {city} is {weather.condition.text}
        </Text>
      )}
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
