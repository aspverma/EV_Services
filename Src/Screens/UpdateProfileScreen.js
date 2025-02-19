import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import CustomInput from "../Components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { ALERT_TYPE, Toast, AlertNotificationRoot,Dialog } from "react-native-alert-notification";
import CustomButton from "../Components/CustomButton";

const { width, height } = Dimensions.get("window");

const UpdateProfileScreen = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(require("../Assests/user.png"));
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);
  const [location, setLocation] = useState("");

  // Validation Function
  const validateFields = () => {
    if (!name || !username || !email || !number || !location) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please fill in all required fields.",
        button: "OK",
      });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Invalid Email",
        textBody: "Please enter a valid email address.",
        button: "OK",
      });
      return false;
    }
    if (!/^\d{10}$/.test(number)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Invalid Phone Number",
        textBody: "Phone number must be exactly 10 digits.",
        button: "OK",
      });
      return false;
    }
    if (!gender) {
      Dialog.show({
        type: ALERT_TYPE.INFO,
        title: "Gender Required",
        textBody: "Please select your gender.",
        button: "OK",
      });
      return false;
    }
    if (!vehicleType) {
      Dialog.show({
        type: ALERT_TYPE.INFO,
        title: "Vehicle Type Required",
        textBody: "Please select your vehicle type.",
        button: "OK",
      });
      return false;
    }
    return true;
  };
  
  // Save Profile Handler
  const handleSaveProfile = () => {
    if (!validateFields()) return;

    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Profile updated successfully!",
    });

    setTimeout(()=>{

        navigation.goBack(); // Navigate back after saving
    },2000)
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={styles.profileContainer}>
            <Image
              source={profileImage.uri ? { uri: profileImage.uri } : profileImage}
              style={styles.userimg}
            />
          </View> */}
          <Text style={styles.detailText}>Your Details</Text>

          <CustomInput placeholder={"Full Name"} value={name} setValue={setName} />
          <CustomInput placeholder={"Username"} value={username} setValue={setUsername} />
          <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
          <CustomInput placeholder={"Phone Number"} value={number} setValue={setNumber} />
          <CustomInput placeholder={"Location"} value={location} setValue={setLocation} />

          <Text style={styles.labelText}>Gender</Text>
          <View style={styles.optionContainer}>
            {["Male", "Female", "Prefer not to say"].map((g) => (
              <TouchableOpacity
                key={g}
                style={[styles.optionButton, gender === g && styles.selectedOption]}
                onPress={() => setGender(g)}
              >
                <Text style={[styles.optionText, gender === g && styles.selectedOptionText]}>{g}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.labelText}>Vehicle Type</Text>
          <View style={styles.optionContainer}>
            {["EV", "Non-EV"].map((v) => (
              <TouchableOpacity
                key={v}
                style={[styles.optionButton, vehicleType === v && styles.selectedOption]}
                onPress={() => setVehicleType(v)}
              >
                <Text style={[styles.optionText, vehicleType === v && styles.selectedOptionText]}>{v}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <CustomButton
          title="Save"
          onPress={handleSaveProfile}
          backgroundColor="#00C853" // Matches EV Services button
          textColor="#FFFFFF"
          style={styles.saveButton}
        />
      </View>
    </AlertNotificationRoot>
  );
};

export default UpdateProfileScreen;
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1, padding: width * 0.03 }, // Set container background to white
  profileContainer: { alignItems: "center", justifyContent: "center", marginBottom: height * 0.02 },
  userimg: {
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: height * 0.075,
    borderWidth: 2,
    borderColor: "#00C853",
  },
  detailText: { fontSize: height * 0.028, fontWeight: "bold", color: "#000", marginBottom: height * 0.02 }, // Changed text color to black
  labelText: { fontSize: height * 0.02, color: "#000", fontWeight: "600", marginTop: height * 0.015 }, // Changed label text color to black
  optionContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: height * 0.02 },
  optionButton: {
    width: width * 0.3,
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002244",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#666666",
  },
  selectedOption: { backgroundColor: "#00C853", borderColor: "#00C853" },
  optionText: { color: "#FFFFFF", fontSize: height * 0.02 },
  selectedOptionText: { color: "#FFFFFF", fontWeight: "bold" },
  saveButton: { width: width * 0.95, marginTop: height * 0.04 },

  // Custom Input Styling
  input: {
    backgroundColor: "#fff", // Set input background to white
    color: "#000", // Set input text color to dark (black)
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: height * 0.02,
    marginBottom: height * 0.02,
    fontSize: height * 0.02,
  },
});
