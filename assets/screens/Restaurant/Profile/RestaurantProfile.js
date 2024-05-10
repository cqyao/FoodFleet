import React, {useEffect, useContext, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MenuItem from '../../../Components/MenuItem';
import { UserContext } from '../../../context/UserContext';
import { GetRestaurant, GetMenus } from '../../../../database';

const RestaurantProfile = ({ navigation }) => {
  const { userId, setUserId } = useContext(UserContext);
  const [ name, setName ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ menu, setMenu ] = useState([]);

  useEffect(() => {
    const fetchMenu = async() => {
      const dish = await GetMenus(userId)
      console.log(dish)
      setMenu(dish);
    }
    fetchMenu();
  }, []);

  useEffect(() => {
    const fetchRestaurant = async() => {
      const rest = await GetRestaurant(userId)
      setName(rest.name);
      setCategory(rest.category);
    }
    fetchRestaurant();
  })

  const logout = () => {
    setUserId(null);
    navigation.navigate('Login')
  }

  const edit = () => {
    navigation.navigate('EditProfile')
  }
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={edit}>
          <Text>Edit</Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://links.papareact.com/gn7' }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.restaurantName}>{name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ 4.6 (200+ ratings)  {category} $$</Text>
        <Text style={styles.hoursText}>Open until 10:00 PM</Text>
      </View>
      <ScrollView>
        {
          menu !== 0 &&
          menu.map((dish) => (
          //title, price, description, imageUrl
            <MenuItem
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              imageUrl={dish.image_url}
            />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
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
    width: 130,
    height: 130,
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
    alignSelf: "center",
    marginTop: 10
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantProfile;
