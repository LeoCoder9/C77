import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.driodSafeArea} />
        <ImageBackground source = {require('../assets/bg.png')} style = {styles.backgroundImage}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>ISS Tracker App</Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress = {()=> this.props.navigation.navigate("IssLocation")}>
        <Image source = {require('../assets/iss_icon.png')} style = {styles.iconImage} ></Image>
          <Text style={styles.routeText}>ISS Location</Text>
          <Text style={styles.bgDigit}>1</Text>
          <Text style={styles.knowMore}>know more ➜ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard} onPress = {()=> this.props.navigation.navigate("Meteors")} >
        <Image source = {require('../assets/meteor_speed3.gif')} style = {styles.iconImage}></Image>
          <Text style={styles.routeText}>Meteors</Text>
          <Text style={styles.bgDigit}>2</Text>
          <Text style={styles.knowMore}>know more ➜ </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  driodSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },
  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});
