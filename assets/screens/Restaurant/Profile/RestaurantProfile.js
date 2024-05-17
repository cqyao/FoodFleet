import React, {useEffect, useContext, useState, useCallback} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import MenuItem from '../../../Components/MenuItem';
import { UserContext } from '../../../../context/UserContext'
import { GetMenus, AddDish } from '../../../../database';

const RestaurantProfile = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [ menu, setMenu ] = useState([]);
  const [ refreshing, setRefreshing ] = useState(false)
  

  const fetchMenu = async() => {
    const dish = await GetMenus(user.id)
    console.log(dish)
    setMenu(dish);
  }

  useEffect(() => {
      fetchMenu();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchMenu();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const logout = () => {
    navigation.navigate('Login')
    //setUser(null); Currently causes error with user being null. 
    //Clearing login fields should be good enough
  }

  const edit = () => {
    navigation.navigate('EditProfile')
  }

  const addDish = async() => {
    navigation.navigate("AddDish")
  }
  

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={edit}>
          <Text>Edit</Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: user.image_url }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.restaurantName}>{user.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ 4.6 (200+ ratings)  {user.category} $$</Text>
        <Text style={styles.hoursText}>Open until 10:00 PM</Text>
      </View>
      <ScrollView>
        {
          menu !== 0 &&
          menu.map((dish) => (
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
        <TouchableOpacity style={styles.addButton} onPress={addDish}>
          <Text style={styles.addButtonText}>
            Add Dish
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
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
    marginTop: 10,

  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    borderColor: 'gold',
    borderWidth: 5,
    borderRadius: 25,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    alignSelf: "center",
    marginTop: 10
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantProfile;
