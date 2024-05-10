import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { UserContext } from '../../../../context/UserContext';
import { GetRestaurant, UpdateRestaurant} from '../../../../database';

const EditProfile = ( {navigation} ) => {
  const {userId, setUserId } = useContext(UserContext);

  const [name, setName] = useState(name);
  const [postcode, setPostcode] = useState(postcode);
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const handleEdit = async() => {
    await UpdateRestaurant(userId, name, postcode, number, email, category)
    navigation.navigate("RestaurantMain")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Change name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Change postcode"
        onChangeText={setPostcode}
        value={postcode}
      />
      <TextInput
        style={styles.input}
        placeholder="Change contact number"
        onChangeText={setNumber}
        value={number}
      />
      <TextInput
        style={styles.input}
        placeholder="Change contact e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Change category"
        onChangeText={setCategory}
        value={category}
      />

      <TouchableOpacity onPress={ () => handleEdit(name, postcode, number, email, category)}>
        <Text>Finish Edit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
})

export default EditProfile