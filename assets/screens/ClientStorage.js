import AsyncStorage from "@react-native-async-storage/async-storage";

const savePostCode = async (postCode) => {
  try {
    await AsyncStorage.setItem("PostCode", JSON.stringify(postCode));
    console.log("PostCode saved successfully");
  } catch (error) {
    console.error("Error saving PostCode:", error);
  }
};

const getPostCode = async () => {
  try {
    const savedPostCode = await AsyncStorage.getItem("PostCode");
    if (savedPostCode !== null) {
      return JSON.parse(savedPostCode);
    }
    return null;
  } catch (error) {
    console.error("Error loading PostCode:", error);
    return null;
  }
};

export { savePostCode, getPostCode };
