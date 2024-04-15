import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import OrderCard from '../../Components/OrderCard';

const OrderManagement = () => {
  return (
    <View 
        style={[
            styles.container,
            {flexDirection: 'column',
        },
    ]}>
        <View style={{alignItems: "center",}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>In Preparation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>Cancelled</Text>
                </TouchableOpacity>
            </View>

        </View>

        <ScrollView style={{}}>
            <OrderCard
                name="Jacob"
                items="Wagyu"
                price="$490.00"
                address="70 Throsby Dr"
            />
            <OrderCard
                name="Peter"
                items="Wilson"
                price="$320.50"
                address="25 Figtree Ave"
            />
        </ScrollView>
        <View style={{flex:1,}} />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    navButton: {
        backgroundColor: '#FFCF70',
        borderRadius: 20,
        width: "30%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        marginBottom: 40,
    },
    navButtonText: {
        fontSize: 12,
    }
});

export default OrderManagement