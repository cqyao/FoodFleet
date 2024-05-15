import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useContext} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { UserContext } from '../../../../context/UserContext'
import { AddDish } from '../../../../database'


const AddDishPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [menuName, setMenuName] = useState('');
  const {user, setUser} = useContext(UserContext);

  const handleAdd = async() => {
    await AddDish(name, description, price, user.id, menuName)
    navigation.navigate("RestaurantProfile")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Add a new dish for your restaurant
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Dish name'
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder='Add a description'
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder='Set price'
        onChangeText={setPrice}
        value={price}
      />
      <TextInput
      style={styles.input}
        placeholder='Menu name'
        onChangeText={setMenuName}
        value={menuName}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    width: "90%",
    height: 50,
  },
  container: {
    alignItems: "center",
    paddingTop: 90
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
})

export default AddDishPage