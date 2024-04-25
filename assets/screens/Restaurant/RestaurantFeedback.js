import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect } from 'react'
import RatingItem from '../../Components/RatingItem'
import { GetRestaurantRatings, GetRestaurant } from '../../../database';
import { UserContext } from '../../../context/UserContext';

const RestaurantFeedback = () => {
    const { userId, setUserId } = useContext(UserContext);
    const [ reviews, setReviews ] = useState([])
    const {name, setName} = useState('');

    useEffect(() => {
        const fetchReview = async() => {
            const review = await GetRestaurantRatings(userId)
            setReviews(review)
        }
        const fetchName = async() => {
            const rest = await GetRestaurant(userId)
            const tempName = rest.name
            setName(tempName)
        }
        fetchReview();
        fetchName();
    });

    return (
        <View
            style = {[
                styles.container,
                {flexDirection: 'column',}
            ]}
        >
        <View style={[styles.topContainer, {alignItems: "center"}]}>
            <Text style={styles.header}>
                "{name}"
            </Text>
            <Text style={styles.ratingHeader}>
                3.2
            </Text>
            <View style={{flexDirection: "row"}}>
            <Image 
                style={styles.star}
                source={require("../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../screens/EveryImages/empty_star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../screens/EveryImages/empty_star.png")}/>
            
            </View>
            </View>
        <ScrollView style={{flex:3}}>
            {reviews.map((review) =>  (
                <RatingItem
                    customerId={review.customerId}
                    message={review.message}
                    rating={review.rating}
                />
            ))}
            
        </ScrollView>
        </View>
        
    )

  
  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    topContainer: {
        padding: 20,
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
    },
    ratingHeader: {
        fontSize: 30,
        fontWeight: "600",
    },
    star: {
        height: 50,
        width: 50,
    }
})

export default RestaurantFeedback