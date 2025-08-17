import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EventDetailScreen({ route, navigation }) {
  const { event } = route.params;

  const handleRegister = async () => {
    try {
      let storedEvents = await AsyncStorage.getItem("registeredEvents");
      storedEvents = storedEvents ? JSON.parse(storedEvents) : [];
      storedEvents.push(event);
      await AsyncStorage.setItem("registeredEvents", JSON.stringify(storedEvents));
      alert("Event Registered!");
      navigation.navigate("Profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentBox}>
        <Image source={{ uri: event.thumbnail }} style={styles.image} />
        
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.brand}>{event.brand}</Text>
        
        <Text style={styles.description}>{event.description}</Text>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  contentBox: {
    width: '100%',
    maxWidth: 500,    // ✅ keeps it neat on desktop
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: { 
    width: '100%', 
    height: 220, 
    borderRadius: 10, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 6 
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15
  },
  description: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

