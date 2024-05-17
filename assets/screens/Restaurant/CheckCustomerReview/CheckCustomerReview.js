import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect } from 'react'
import RatingItem from '../../../Components/RatingItem'
import { GetRestaurantRatings, GetRestaurant } from '../../../../database';
import { UserContext } from '../../../../context/UserContext';

const RestaurantFeedback = () => {
    const { user, setUser } = useContext(UserContext);
    const [ reviews, setReviews ] = useState([])

    useEffect(() => {
        const fetchReview = async() => {
            const review = await GetRestaurantRatings(user.id)
            setReviews(review)
        }
        fetchReview();
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
                {user.name}
            </Text>
            <Text style={styles.ratingHeader}>
                3.2
            </Text>
            <View style={{flexDirection: "row"}}>
            <Image 
                style={styles.star}
                source={require("../../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../../screens/EveryImages/star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../../screens/EveryImages/empty_star.png")}/>
            <Image 
                style={styles.star}
                source={require("../../../screens/EveryImages/empty_star.png")}/>
            
            </View>
            </View>
        <ScrollView style={{flex:3}}>
            {reviews.map((review) =>  (
                <RatingItem
                    key={review.id}
                    customerId={review.customerId}
                    message={review.feedback}
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
