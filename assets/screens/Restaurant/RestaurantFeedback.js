import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import RatingItem from '../../Components/RatingItem'

const RestaurantFeedback = () => {
  return (
    <View
        style = {[
            styles.container,
            {flexDirection: 'column',}
        ]}
    >
      <View style={[styles.topContainer, {alignItems: "center"}]}>
        <Text style={styles.header}>
            Hanok
        </Text>
        <Text style={styles.ratingHeader}>
            3.2
        </Text>
        <View style={{flexDirection: "row"}}>
        <Image 
            style={styles.star}
            source={require("../images/star.png")}/>
        <Image 
            style={styles.star}
            source={require("../images/star.png")}/>
        <Image 
            style={styles.star}
            source={require("../images/star.png")}/>
        <Image 
            style={styles.star}
            source={require("../images/empty_star.png")}/>
        <Image 
            style={styles.star}
            source={require("../images/empty_star.png")}/>
        
        </View>
        </View>
      <ScrollView style={{flex:3}}>
        <RatingItem 
            name="Jacob Jonathon"
            rating="3"
            message="Hello was good"
        />
        <RatingItem 
            name="Philip Wilson"
            rating="4"
            message="Loved the ambience!"
        />
        <RatingItem 
            name="Greg Winston"
            rating="1"
            message="Staff was rude and did not serve the correct order."
        />
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