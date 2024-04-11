import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MenuItem from '../../Components/MenuItem';

const RestaurantProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        {/* Icon for settings would go here */}
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.restaurantName}>Hanok</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ 4.6 (200+ ratings)  Korean BBQ  $$</Text>
        <Text style={styles.hoursText}>Open until 10:00 PM</Text>
      </View>
      <ScrollView style={height= 200}>
        <MenuItem
            title="Couple Set"
            price="AUD $89.00"
            description="Wagyu scotch fillet, pork belly, Bean paste soup or kimchi soup, deep fried vegetable dumpling"
            imageUrl="https://links.papareact.com/wru"
        />
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
        {/* Logout icon would go here */}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 16,
  },
  hoursText: {
    fontSize: 16,
    marginTop: 4,
  },
  menuItemContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  menuItemDescription: {
    fontSize: 16,
    marginTop: 4,
  },
  menuItemImage: {
    height: 200, // Set this to match your design
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: 'gold',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    bottom:35,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantProfile;
