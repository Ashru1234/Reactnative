import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Signup from "./Signup";

const HomePage = () => {
  const [isSignup, setSignup] = useState(false);
  return (
    <View style={styles.container}>
      {isSignup ? (
        <Signup />
      ) : (
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/564x/69/b2/a7/69b2a784a9b367218b150a567d30968a.jpg",
          }}
          style={styles.backgroundImage}
        >
          <Text style={styles.heading}>Welcome to the App</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSignup(true)}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#FFDE95",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default HomePage;
