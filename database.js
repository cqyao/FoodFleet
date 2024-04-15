const Supabase = require("@supabase/supabase-js");

const supabaseUrl = "https://ascvsyhxtaewmaehmgxk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzY3ZzeWh4dGFld21hZWhtZ3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NzEwNDUsImV4cCI6MjAyNjE0NzA0NX0.hWnMU8kZV5IkCrMZ15mYK4DWEfu4mM5jzXyV-NXAUjs";
const supabase = Supabase.createClient(supabaseUrl, supabaseKey);

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

//CUSTOMER QUERIES

//Done
const CreateCustomer = async function (
  firstName,
  lastName,
  address,
  state,
  postcode,
  city,
  emailAddress,
  phoneNumber,
  password
) {
  const { data, error } = await supabase
    .from("Customers")
    .insert([
      {
        firstName: firstName,
        lastName: lastName,
        address: address,
        state: state,
        postcode: postcode,
        city: city,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        password: password,
      },
    ])
    .select();

  return data;
};

//Done
const AddCustomerPaymentMethod = async function (
  customerId,
  cardNumber,
  ccv,
  expiry
) {
  const { data, error } = await supabase
    .from("CustomerPaymentMethods")
    .insert({
      customerId: customerId,
      cardNumber: cardNumber,
      ccv: ccv,
      expiry: expiry,
    })
    .select();

  return data;
};

const CustomerLogin = async function (emailAddress, password) {
  const { data, error } = await supabase
    .from("Customers")
    .select("*")
    .eq("emailAddress", emailAddress)
    .eq("password", password);

  if (data.length > 0) return data[0];
  else return null;
};

//Done
const GetCustomer = async function (customerId) {
  const { data, error } = await supabase
    .from("Customers")
    .select("*")
    .eq("id", customerId);

  return data[0];
};

//Done
const GetMembership = async function (customerId) {
  const { data, error } = await supabase
    .from("Memberships")
    .select("*")
    .eq("customerId", customerId);

  return data;
};

const AddFeedback = async function (customerId, restaurantId, rating) {
  const { data, error } = await supabase
    .from("Ratings")
    .insert([
      { customerId: customerId, restaurantId: restaurantId, rating: rating },
    ])
    .select();

  return data;
};

//RESTAURANT QUERIES

//Done
const RestaurantLogin = async function (emailAddress, password) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .eq("contactEmail", emailAddress)
    .eq("password", password);

  if (data.length > 0) return data[0];
  else return null;
};

//Done
const CreateRestaurant = async function (
  restaurantName,
  email,
  postcode,
  password,
  category
) {
  console.log("email =", email);
  const { data, error } = await supabase
    .from("Restaurants")
    .insert([
      {
        name: restaurantName,
        contactEmail: email,
        postcode: postcode,
        password: password,
        category: category,
      },
    ])
    .select();

  return data;
};

//Done
const GetRestaurantRatings = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Ratings")
    .select("*")
    .eq("restaurantId", restaurantId);

  return data;
};

//Done
const GetNearbyRestaurants = async function (postcode) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .gt("postcode", postcode - 5)
    .lt("postcode", postcode + 5);

  return data;
};

//Done
const GetRestaurantsByCategory = async function (category) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .eq("category", category);

  return data;
};

const SearchRestaurant = async function (name) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .ilike("name", "%" + name + "%");

  return data;
};

//Done
const GetRestaurant = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .eq("id", restaurantId);

  return data[0];
};

//Done
const GetRestaurantOrders = async function (restaurantId, status) {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("restaurantId", restaurantId)
    .eq("status", status);

  //Pending
  //Accepted
  //Cancelled
  //In Preparation
  //Delivered

  return data;
};

//Done
const MakeOrder = async function (
  restaurantId,
  customerId,
  paymentMethodId,
  dishId,
  amount
) {
  const { data, error } = await supabase
    .from("Orders")
    .insert([
      {
        restaurantId: restaurantId,
        customerId: customerId,
        paymentMethodId: paymentMethodId,
        dishId: dishId,
        amount: amount,
        status: "Preparing",
      },
    ])
    .select();

  return data;
};

//Done
const UpdateOrder = async function (orderId, status) {
  const { data, error } = await supabase
    .from("Orders")
    .update({ status: status })
    .eq(id, orderId)
    .select();

  return data;
};

//Done
const CreateCart = async function (customerId, restaurantId) {
  const { data, error } = await supabase
    .from("Carts")
    .insert([{ customerId: customerId, restaurantId: restaurantId }])
    .select();

  return data;
};

//Done
const AddToCart = async function (dishId, cartId) {
  const { data, error } = await supabase
    .from("CartEntries")
    .insert([{ dishId: dishId, cartId: cartId }])
    .select();

  return data;
};

//Done
const GetCart = async function (cartId) {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("id", cartId);

  return data[0];
};

//Done
const GetSubscriptionPlans = async function (restaurantId) {
  const { data, error } = await supabase
    .from("SubscriptionPlans")
    .select("*")
    .eq("restaurantId", restaurantId);

  return data;
};

//Done
const GetDishes = async function (dishIds) {
  const { data, error } = await supabase.from("Dishes").select("*");

  let filtered = [];
  for (let i = 0; i < data.length; i++) {
    if (dishIds.indexOf(data[i].id) != -1) {
      filtered.push(data[i]);
    }
  }
};

//Done
const GetSubscriptions = async function (memberId) {
  const { data, error } = await supabase
    .from("Subscriptions")
    .select("*")
    .eq("memberId", memberId);

  return data[0];
};

//Done
const GetMenus = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Dishes")
    .select("*")
    .eq("restaurantId", restaurantId);

  grouped = Object.fromEntries(groupBy(data, (x) => x.menuName));
  return grouped;
};

export { CreateRestaurant, CreateCustomer };
