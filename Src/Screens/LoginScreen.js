import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { ALERT_TYPE, Dialog, Root, Toast } from "react-native-alert-notification";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email,password)

  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please enter email and password",
      });
      return;
    }

    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Login Successful",
      textBody: "Welcome to EV Service App!",
    });

    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 1500);
  };

  return (
    <Root>  
      <View style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", padding: width * 0.05 }}>
        <Image source={require("../Assests/EvLogo.png")} style={{ width: width * 0.42, height: width * 0.45, marginBottom: height * 0.04, borderRadius: 5 }} />

        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor="#1b4b23"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{color:'#1b4b23', width: "85%", padding: height * 0.018, backgroundColor: "#e3f9d8", borderRadius: 12, marginBottom: height * 0.02, fontSize: width * 0.04 }}
        />

        <TextInput
          placeholder="Create your Password"
          placeholderTextColor="#1b4b23"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{color:'#1b4b23', width: "85%", padding: height * 0.018, backgroundColor: "#e3f9d8", borderRadius: 12, marginBottom: height * 0.03, fontSize: width * 0.04 }}
        />

        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#1b4b23", padding: height * 0.025, borderRadius: 12, width: "85%", alignItems: "center", shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 }}>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: width * 0.05 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </Root>
  );
};

export default LoginScreen;
