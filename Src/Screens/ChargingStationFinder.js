import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet,ActivityIndicator, TouchableOpacity } from "react-native";

const EVStationList = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const location =[
    {
      "id": "1",
      "name": "EV Fast Charge - Downtown",
      "distance": "2.3 km",
      "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "123 Main St, Downtown City",
      "availability": "Available"
    },
    {
      "id": "2",
      "name": "SuperVolt Charging",
      "distance": "3.7 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
   "address": "456 Energy Ave, PowerCity",
      "availability": "In Use"
    },
    {
      "id": "3",
      "name": "Green Energy EV Station",
      "distance": "4.1 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
   "address": "789 Green St, EcoTown",
      "availability": "Available"
    },
    {
      "id": "4",
      "name": "EcoCharge Hub",
      "distance": "5.5 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
   "address": "101 Eco Rd, GreenVille",
      "availability": "Under Maintenance"
    },
    {
      "id": "5",
      "name": "PowerUp Charging Station",
      "distance": "6.0 km",
      "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",

      "address": "202 Volt Ave, ElectraCity",
      "availability": "Available"
    },
    {
      "id": "6",
      "name": "Tesla Supercharger - East",
      "distance": "6.5 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
   "address": "303 Lightning Rd, SpeedCity",
      "availability": "Available"
    },
    {
      "id": "7",
      "name": "EV ChargeX - Central",
      "distance": "7.2 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "404 Ampere St, ChargeTown",
      "availability": "In Use"
    },
    {
      "id": "8",
      "name": "MegaCharge EV Point",
      "distance": "8.4 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "505 Mega Lane, HighVolt",
      "availability": "Available"
    },
    {
      "id": "9",
      "name": "EV Boost Station",
      "distance": "9.1 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "606 Spark Ave, ChargeCity",
      "availability": "Under Maintenance"
    },
    {
      "id": "10",
      "name": "FastCharge Hub - North",
      "distance": "10.0 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "707 Quick Rd, FastTown",
      "availability": "Available"
    },
    {
      "id": "11",
      "name": "CityCharge - West",
      "distance": "10.5 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "808 Charge Blvd, WestCity",
      "availability": "In Use"
    },
    {
      "id": "12",
      "name": "ChargeUp Station",
      "distance": "11.1 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "909 EV Road, EastTown",
      "availability": "Available"
    },
    {
      "id": "13",
      "name": "VoltPoint Charging",
      "distance": "12.0 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1010 Battery St, PowerHub",
      "availability": "Under Maintenance"
    },
    {
      "id": "14",
      "name": "EcoPower EV Station",
      "distance": "12.8 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1111 Clean Ave, GreenCity",
      "availability": "Available"
    },
    {
      "id": "15",
      "name": "HyperCharge Hub",
      "distance": "13.5 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1212 Hyper Rd, ChargeMax",
      "availability": "Available"
    },
    {
      "id": "16",
      "name": "EV Spot - Midtown",
      "distance": "14.2 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1313 Center St, UrbanCharge",
      "availability": "In Use"
    },
    {
      "id": "17",
      "name": "UltraFast EV Charging",
      "distance": "15.0 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1414 Ultra Lane, SpeedCharge",
      "availability": "Under Maintenance"
    },
    {
      "id": "18",
      "name": "RapidCharge Station",
      "distance": "15.8 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1515 Quick Drive, FastTown",
      "availability": "Available"
    },
    {
      "id": "19",
      "name": "HighVoltage Charging",
      "distance": "16.5 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1616 VoltWay, PowerGrid",
      "availability": "Available"
    },
    {
      "id": "20",
      "name": "ElectroCharge EV Hub",
      "distance": "17.1 km",
       "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
      "address": "1717 Electric Blvd, ShockCity",
      "availability": "In Use"
    },
  
      {
        "id": "21",
        "name": "FutureCharge Station",
        "distance": "18.2 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "1818 Future Rd, InnovationCity",
        "availability": "Available"
      },
      {
        "id": "22",
        "name": "Lightning Fast EV",
        "distance": "19.0 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "1919 Thunder Ave, SpeedCity",
        "availability": "Under Maintenance"
      },
      {
        "id": "23",
        "name": "SmartCharge Hub",
        "distance": "20.1 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2020 Smart St, AI Town",
        "availability": "Available"
      },
      {
        "id": "24",
        "name": "ChargeGo Express",
        "distance": "21.4 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2121 Express Ln, QuickCity",
        "availability": "In Use"
      },
      {
        "id": "25",
        "name": "EcoVolt Charging",
        "distance": "22.8 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2222 Eco Blvd, GreenWorld",
        "availability": "Available"
      },
      {
        "id": "26",
        "name": "Power Grid EV Station",
        "distance": "23.3 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2323 Grid Rd, EnergyHub",
        "availability": "Under Maintenance"
      },
      {
        "id": "27",
        "name": "AmpCharge - Central",
        "distance": "24.1 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2424 Ampere St, CityCenter",
        "availability": "Available"
      },
      {
        "id": "28",
        "name": "Blue Energy EV Spot",
        "distance": "25.7 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2525 Blue Lane, EcoCharge",
        "availability": "Available"
      },
      {
        "id": "29",
        "name": "TurboVolt Charging",
        "distance": "26.9 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2626 Turbo Rd, SpeedCharge",
        "availability": "In Use"
      },
      {
        "id": "30",
        "name": "UltraPower Charging Hub",
        "distance": "28.3 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2727 Power Dr, ShockTown",
        "availability": "Available"
      },
      {
        "id": "31",
        "name": "SuperGreen EV Station",
        "distance": "29.5 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2828 Green Way, NatureCity",
        "availability": "Available"
      },
      {
        "id": "32",
        "name": "HyperSpeed Charge",
        "distance": "30.8 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "2929 Speed Blvd, FastTown",
        "availability": "Under Maintenance"
      },
      {
        "id": "33",
        "name": "RenewCharge EV Hub",
        "distance": "32.0 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3030 Renew Rd, SolarCity",
        "availability": "Available"
      },
      {
        "id": "34",
        "name": "PeakPower Station",
        "distance": "33.6 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3131 Peak Dr, EnergyMax",
        "availability": "In Use"
      },
      {
        "id": "35",
        "name": "ChargePoint Express",
        "distance": "35.2 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3232 Fast Ln, ChargeCity",
        "availability": "Available"
      },
      {
        "id": "36",
        "name": "EcoMax EV Spot",
        "distance": "36.7 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3333 Eco St, NatureHub",
        "availability": "Available"
      },
      {
        "id": "37",
        "name": "VoltEdge Charging",
        "distance": "37.9 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3434 Volt Ave, ElectricWorld",
        "availability": "Under Maintenance"
      },
      {
        "id": "38",
        "name": "NextGen Charge",
        "distance": "39.5 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3535 Future Rd, InnovationCity",
        "availability": "Available"
      },
      {
        "id": "39",
        "name": "UltraGreen EV Station",
        "distance": "40.7 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3636 Green Blvd, NatureZone",
        "availability": "In Use"
      },
      {
        "id": "40",
        "name": "ThunderCharge Hub",
        "distance": "42.1 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3737 Lightning Ave, ShockCity",
        "availability": "Available"
      },
      {
        "id": "41",
        "name": "GridPower EV",
        "distance": "43.5 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3838 Grid St, PowerMax",
        "availability": "Under Maintenance"
      },
      {
        "id": "42",
        "name": "EV FutureCharge",
        "distance": "44.6 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "3939 EV Blvd, FutureTown",
        "availability": "Available"
      },
      {
        "id": "43",
        "name": "ChargeBoost Station",
        "distance": "46.1 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4040 Boost Ln, SpeedCharge",
        "availability": "Available"
      },
      {
        "id": "44",
        "name": "QuickVolt EV Hub",
        "distance": "47.3 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4141 Quick Rd, EnergyHub",
        "availability": "Under Maintenance"
      },
      {
        "id": "45",
        "name": "SolarCharge EV",
        "distance": "48.5 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4242 Solar Ave, GreenEnergy",
        "availability": "Available"
      },
      {
        "id": "46",
        "name": "TurboCharge Express",
        "distance": "49.2 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4343 Turbo St, ChargeMax",
        "availability": "In Use"
      },
      {
        "id": "47",
        "name": "ChargeEasy Station",
        "distance": "50.0 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4444 Easy Rd, EVCity",
        "availability": "Available"
      },
      {
        "id": "48",
        "name": "MegaVolt Charging",
        "distance": "51.3 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4545 Volt Ln, MegaCity",
        "availability": "Available"
      },
      {
        "id": "49",
        "name": "EV Spark Plug",
        "distance": "52.7 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4646 Spark Ave, EVWorld",
        "availability": "In Use"
      },
      {
        "id": "50",
        "name": "HyperPower EV Hub",
        "distance": "54.0 km",
         "image": "https://www.merchantsfleet.com/wp-content/uploads/2022/12/EV-Ecosystem-How-to-Successfully-Approach-EV-Adoption.jpg",
        "address": "4747 Hyper Blvd, FastCharge",
        "availability": "Available"
      }
    
  ]
  

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setStations(location);
      setLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity>

    <View style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.distance}>{item.distance}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={[styles.badge, getBadgeStyle(item.availability)]}>
          <Text style={styles.badgeText}>{item.availability}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>

  );

  const getBadgeStyle = (status) => {
    switch (status) {
      case "Available":
        return { backgroundColor: "#4CAF50" };
      case "In Use":
        return { backgroundColor: "#FFC107" };
      case "Under Maintenance":
        return { backgroundColor: "#F44336" };
      default:
        return { backgroundColor: "#9E9E9E" };
    }
  };

  return (
    <View>
       {loading ? (
        <ActivityIndicator size="extra-large" color="#4CAF50" />
      ) : (
        <FlatList
          data={stations}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  address: {
    fontSize: 12,
    color: "#555",
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default EVStationList;
