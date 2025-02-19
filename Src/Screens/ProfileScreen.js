import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const menuOptions = [
    { title: "Edit Profile", color: "#FFD600", screen: "UpdateProfileScreen" },
    { title: "Service History", color: "#FFD600", screen: "ServiceHistoryScreen" },
    { title: "Settings", color: "#FFD600", screen: "SettingsScreen" },
    { title: "EV Services", color: "#00C853", screen: "EVServicesScreen" }, // New Option for EV Services
  ];
  const LogOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);  // Set loading to false after the navigation
      navigation.navigate('LoginScreen');
    }, 2000);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#0D47A1", alignItems: "center", padding: 20 }}>
      {/* Profile Picture */}
      {/* <Image source={require("../Assests/user.png")} style={{ width: 100, height: 100, borderRadius: 50, marginTop: height * 0.05 }} /> */}
      
      {/* User Name & Email */}
      <Text style={{ fontSize: width * 0.06, color: "#FFF", fontWeight: "bold", marginTop: 10 }}>John Doe</Text>
      <Text style={{ fontSize: width * 0.04, color: "#BBDEFB" }}>johndoe@example.com</Text>
      
      {/* Options */}
      {menuOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: item.color,
            padding: 15,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
            marginTop: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
          }}
          onPress={() => navigation.navigate(item.screen)} // Navigate to respective screen
        >
          <Text style={{ color: "#0D47A1", fontWeight: "bold", fontSize: width * 0.05 }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      
      {/* Logout */}
      <TouchableOpacity
        style={{
          backgroundColor: "#D32F2F",
          padding: 15,
          borderRadius: 10,
          width: "80%",
          alignItems: "center",
          marginTop: 30,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
        onPress={LogOut}
      >
       
<Text style={{ color: "#FFF", fontWeight: "bold", fontSize: width * 0.05 }}>
  {loading ? <ActivityIndicator size="small" color="#00C853" /> : "Log Out"}
</Text>

      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
