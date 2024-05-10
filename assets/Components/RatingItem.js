import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GetRestaurantRatings, GetCustomer } from '../../database';  // Make sure this path is correct

const RatingItem = ({ customerId, message, rating }) => {
    const [cust, setCust] = useState('');

    useEffect(() => {
        const fetchRating = async () => {
            const cust = await GetCustomer(customerId)
            setCust(cust.firstName + " " + cust.lastName);
        };

        fetchRating();
    }, [customerId]);

    const starArray = [];
    

    // Only run this loop if rating is fetched
    if (rating !== null) {
        for (let i = 0; i < rating; i++) {
            starArray.push(
                <Image
                    key={`star-${i}`}
                    style={styles.star}
                    source={require("../screens/EveryImages/star.png")}
                />
            );
        }

        for (let i = rating; i < 5; i++) {
            starArray.push(
                <Image
                    key={`star-${i}`}
                    style={styles.star}
                    source={require("../screens/EveryImages/empty_star.png")}
                />
            );
        }
    } 
  
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://links.papareact.com/wru'}} 
                />
                <Text style={styles.name}>{cust}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                {starArray}
            </View>
            <Text style={styles.message}>"{message}"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15, // Added to make the avatar circular
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 20,
    },
    message: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 10,
    },
    container: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        elevation: 3, // Added for shadow on Android
        shadowColor: '#000', // Shadow properties for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    star: {
        height: 25,
        width: 25,
    }
});

export default RatingItem;
