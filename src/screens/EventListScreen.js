import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";

export default function EventListScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setEvents(data.products))
      .catch(err => console.error(err));
  }, []);
    
   const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully!");
        navigation.replace("Login");
      })
      .catch(err => alert(err.message));
  };

return (
  <View style={styles.container}>
         <View style={styles.header}>
  <Text style={styles.headerText}>Events</Text>

  <View style={styles.profileButtons}>
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Text style={styles.profileLink}>My Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleLogout}>
      <Text style={styles.logoutLink}>Logout</Text>
    </TouchableOpacity>
  </View>
</View>


    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate("EventDetail", { event: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.brand}</Text>
          <Text style={styles.detail}>📅 Date: 2025-08-17</Text>
          <Text style={styles.detail}>📍 Location: Bangalore</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 12, 
    alignItems: "center",
   
    backgroundColor: "#1fa2abff" // light background
  },
 header: {
  width: "100%",                // ✅ full width
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 14,
  backgroundColor: "#007BFF",
  elevation: 4,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 3,
},
headerText: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#fff",
},
profileButtons: {
  flexDirection: "row",
  alignItems: "center",
},
profileLink: {
  color: "#fff",
  marginRight: 18,
  fontWeight: "600",
  fontSize: 16,
},
logoutLink: {
  color: "#FFD700",
  fontWeight: "600",
  fontSize: 16,
},

  card: { 
    backgroundColor: "#fff",
    width: "85%",
    maxWidth: 400,
   
    padding: 18,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4, // Android shadow
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333", 
    marginBottom: 6 
  },
  subtitle: {
    fontSize: 14,
    color: "#0d0d0d7b",
    marginBottom: 8
  },
  detail: {
    fontSize: 14,
    color: "#1c1b1bff",
    marginBottom: 4
  }
});
