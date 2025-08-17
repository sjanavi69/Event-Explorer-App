import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let stored = await AsyncStorage.getItem("registeredEvents");
      setRegisteredEvents(stored ? JSON.parse(stored) : []);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Registered Events</Text>
      <FlatList
        data={registeredEvents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.brand}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: { backgroundColor: "#f2f2f2", padding: 10, marginVertical: 5, borderRadius: 6 },
  title: { fontSize: 16, fontWeight: "600" }
});
