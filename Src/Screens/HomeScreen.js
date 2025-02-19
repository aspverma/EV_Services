import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0D47A1", padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: width * 0.06, color: "#FFF", fontWeight: "bold" }}>EV Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          {/* <Image source={require("../assets/user_icon.png")} style={{ width: 40, height: 40, borderRadius: 20 }} /> */}
        </TouchableOpacity>
      </View>

      {/* Services Section */}
      <ScrollView>
        <View style={{ backgroundColor: "#FFF", borderRadius: 10, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#0D47A1" }}>Book a Service</Text>
          <Text style={{ color: "#666", marginTop: 5 }}>Schedule a service for your electric vehicle easily.</Text>
          <TouchableOpacity style={{ backgroundColor: "#FFD600", padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text style={{ textAlign: "center", color: "#0D47A1", fontWeight: "bold" }}>Book Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#FFF", borderRadius: 10, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#0D47A1" }}>Find Charging Stations</Text>
          <Text style={{ color: "#666", marginTop: 5 }}>Locate the nearest EV charging stations.</Text>
          <TouchableOpacity onPress={() =>  navigation.navigate("ChargingStationFinder")} style={{ backgroundColor: "#FFD600", padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text style={{ textAlign: "center", color: "#0D47A1", fontWeight: "bold" }}>Find Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#FFF", borderRadius: 10, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#0D47A1" }}>EV Tips & Guides</Text>
          <Text style={{ color: "#666", marginTop: 5 }}>Learn how to maintain and optimize your EV performance.</Text>
          <TouchableOpacity style={{ backgroundColor: "#FFD600", padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text style={{ textAlign: "center", color: "#0D47A1", fontWeight: "bold" }}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#FFF", borderRadius: 10, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#0D47A1" }}>Profile</Text>
          <Text style={{ color: "#666", marginTop: 5 }}>Learn how to maintain and optimize your EV performance.</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen')} style={{ backgroundColor: "#FFD600", padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text style={{ textAlign: "center", color: "#0D47A1", fontWeight: "bold" }}>Go  to Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
