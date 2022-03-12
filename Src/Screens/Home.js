import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import One from "../../images/1.jpg";
import Two from "../../images/2.jpg";
import Three from "../../images/3.jpg";
import Four from "../../images/4.jpg";
import Five from "../../images/5.jpg";
import Six from "../../images/6.png";
import Seven from "../../images/7.jpg";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';



const images = [One, Two, Three, Four, Five, Six, Seven];

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState({});
  const [randomImages, setrandomImages] = useState(images[0]);
  const [Loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7660502e18522ab907b2e5fdd0dd07f1`
      );
      setweather(res.data);
      const n = Math.floor(Math.random() * images.length);
      setrandomImages(images[n]);
      setLoading(false);
    } catch (error) {
      alert("تاكد من أسم المدينة");
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={randomImages}
      resizeMode="cover"
      style={styles.image}
      imageStyle={{ opacity: 0.9 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
       
        <View style={styles.textInputContiner}>
          <TextInput
            style={styles.textInput}
            value={city}
            placeholder="أكتب مدينتك"
            onChangeText={(text) => setCity(text)}
          />

          {Loading ? (
            <ActivityIndicator size="small" color="#212121" />
          ) : (
            <AntDesign
              onPress={getWeather}
              name="check"
              size={24}
              color="black"
            />
          )}
        </View>
        {Object.keys(weather).length > 0 ? (
          <>
            <View styles={styles.LocationContainer}>
              <Text style={styles.Location}>
                {weather.name} | {weather.sys.country}
              </Text>
            </View>

            <View styles={styles.weatherContainer}>
              <Text style={styles.temp}>
                {Math.round(weather.main.temp - 35)}&#176;C
              </Text>
              <Text style={styles.weather}>{weather.weather[0].main}</Text>
            </View>
          </>
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  textInputContiner: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    width: "60%",
    margin: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    fontWeight: "600",
    height: 40,
  },
  LocationContainer: {
    marginVertical: 15,
  },
  Location: {
    color: "#FFFFFF",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.55)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  weatherContainer: {
    alignItems: "center",
  },
  temp: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 100,
    fontWeight: "800",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10,
    width: "80%",
    justifyContent: "center",
    marginLeft: 40,
  },
  weather: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
    textShadowColor: "#000000",
    textShadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.7,
  },
});
