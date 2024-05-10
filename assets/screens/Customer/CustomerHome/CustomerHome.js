// CustomerHome.js
import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";
import { GetRestaurants, CreateCart, GetMenus } from "../../../../database";

const CustomerHome = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [restaurants, setRestaurants] = useState([]);

  const categoriesData = [
    {
      id: "1",
      title: "Cafes",
      image: require("../../../../assets/screens/EveryImages/Cafe.png"),
    },
    {
      id: "2",
      title: "Clubs",
      image: require("../../../../assets/screens/EveryImages/Clubs.png"),
    },
    {
      id: "3",
      title: "Asian food",
      image: require("../../../../assets/screens/EveryImages/AsianFood.png"),
    },
    {
      id: "4",
      title: "Asian food",
      image: require("../../../../assets/screens/EveryImages/AsianFood.png"),
    },
    {
      id: "5",
      title: "Asian food",
      image: require("../../../../assets/screens/EveryImages/AsianFood.png"),
    },
    // Add more category data here.
  ];

  const CategoryItem = ({ title, image }) => (
    <View style={styles.categoryItem}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );

  const RestaurantItem = ({
    id,
    name,
    type,
    rating,
    isFreeDelivery,
    deliveryTime,
    image_url,
  }) => {
    const navigation = useNavigation();

    const handlePress = async () => {
      user.restaurantId = id;
      var cart = await CreateCart(user.id, user.restaurantId);
      user.cartId = cart.id;
      user.menus = await GetMenus(user.restaurantId);

      console.log("Selected restaurant:", id);
      navigation.navigate("HanokMenu");
    };

    return (
      <TouchableOpacity style={styles.restaurantItem} onPress={handlePress}>
        <Image source={{ uri: image_url }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantType}>{type}</Text>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantRating}>⭐ {rating}</Text>
          {isFreeDelivery && <Text style={styles.deliveryText}>Free</Text>}
          <Text style={styles.deliveryTime}>{deliveryTime}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const HomeButton = () => {
    const navigation = useNavigation();

    const handleHomePress = () => {
      navigation.navigate("CustomerHome");
    };

    return (
      <TouchableOpacity style={styles.iconContainer} onPress={handleHomePress}>
        <Ionicons name="home-outline" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  const ProfileIcon = () => {
    const navigation = useNavigation();

    const handleProfilePress = () => {
      navigation.navigate("Profile");
    };

    return (
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handleProfilePress}
      >
        <Ionicons name="person-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  const MotorcycleImage = () => {
    const navigation = useNavigation();

    const handleMotorcyclePress = () => {
      navigation.navigate("AlmostThere");
    };

    return (
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handleMotorcyclePress}
      >
        <Image
          source={require("../../../../assets/screens/EveryImages/motorcycle.png")}
          style={styles.motorcycleImage}
        />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const fetchedRestaurants = await GetRestaurants();
        const formattedRestaurants = fetchedRestaurants.map((restaurant) => ({
          ...restaurant,
          image_url: restaurant.image_url[0], // 배열의 첫 번째 요소를 사용
        }));
        setRestaurants(formattedRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleMorePress = () => {
    navigation.navigate("CategoriesMain");
  };

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };


  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.locationText}>Wollongong</Text>
      </View>

      <Text style={styles.greetingText}>Good Morning, Jacob</Text>

      <TouchableOpacity onPress={handleSearchPress}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for lunch"
            style={styles.searchInput}
            editable={false}
          />
          <Ionicons name="search" size={24} color="grey" />
        </View>
      </TouchableOpacity>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity onPress={handleMorePress}>
          <Text style={styles.moreText}>More</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categoriesData}
        renderItem={({ item }) => <CategoryItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Nearby Restaurants</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem {...item} id={item.id} />}
        keyExtractor={(item) => item.id}
      /> 
      <ScrollView>
        {
          user.restaurants !== 0 &&
          user.restaurants.map((restaurant) => (
            <RestaurantItem
              name={restaurant.name}
              type = {restaurant.type}
              rating={restaurant.rating}
              isFreeDelivery={restaurant.isFreeDelivery}
              deliveryTime={restaurant.deliveryTime}
              imageUrl={restaurant.imageUrl}
            />
          ))
        }
      </ScrollView>

      <View style={styles.menuBar}>
        <MotorcycleImage />
        <HomeButton />
        <ProfileIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  locationText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  greetingText: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  moreText: {
    color: "green",
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  seeAllText: {
    color: "green",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  categoryTitle: {
    marginTop: 10,
    flex: 1,
    textAlign: "center",
  },
  restaurantItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  restaurantImage: {
    width: 100,
    height: 180,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  restaurantType: {
    color: "grey",
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantRating: {
    marginRight: 10,
  },
  deliveryText: {
    backgroundColor: "#dedede",
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  deliveryTime: {
    color: "grey",
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  motorcycleImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});

export default CustomerHome;
