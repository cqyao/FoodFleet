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
  expiry,
  country
) {
  const { data, error } = await supabase
    .from("CustomerPaymentMethods")
    .insert({
      customerId: customerId,
      cardNumber: cardNumber,
      ccv: ccv,
      expiry: expiry,
      country: country,
    })
    .select();

  return data;
};

export const GetPaymentMethods = async function (customerId) {
  const { data, error } = await supabase
    .from("CustomerPaymentMethods")
    .select("*")
    .eq("customerId", customerId);

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

  return data;
};

//Done
const GetMembership = async function (customerId) {
  const { data, error } = await supabase
    .from("Memberships")
    .select("*")
    .eq("customerId", customerId);

  return data;
};

export const AddFeedback = async function (
  customerId,
  restaurantId,
  rating,
  feedback
) {
  const { data, error } = await supabase
    .from("Ratings")
    .insert([
      {
        customerId: customerId,
        restaurantId: restaurantId,
        rating: rating,
        feedback: feedback,
      },
    ])
    .select();
  if (error) {
    console.error("Error adding feedback:", error.message);
    throw error;
  }
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
const GetRestaurant = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .eq("id", restaurantId);

  return data[0];
};

export const GetRestaurants = async function () {
  const { data, error } = await supabase.from("Restaurants").select("*");

  if (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }

  // 이미지 URL을 절대 경로로 변환
  const formattedRestaurants = data.map((restaurant) => ({
    ...restaurant,
    //image_url: `../../../../../${restaurant.image_url}`, // 상대 경로에서 절대 경로로 변환
  }));

  return formattedRestaurants;
};

//Done
const CreateRestaurant = async function (
  name,
  contactEmail,
  contactNumber,
  postcode,
  password,
  category
) {
  const { data, error } = await supabase
    .from("Restaurants")
    .insert([
      {
        name: name,
        contactEmail: contactEmail,
        contactNumber: contactNumber,
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
export const GetNearbyRestaurants = async function (
  postcode,
  distance,
  rating
) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .gt("postcode", postcode - distance)
    .lt("postcode", postcode + distance)
    .gte("rating", rating);
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

export const SearchRestaurant = async function (name) {
  const { data, error } = await supabase
    .from("Restaurants")
    .select("*")
    .ilike("name", "%" + name + "%");

  return data;
};

//Done
const GetDish = async function (dishId) {
  const { data, error } = await supabase
    .from("Dishes")
    .select("*")
    .eq("id", dishId);

  return data[0];
};

//Done
export const RemoveDish = async function (dishId) {
  const { error } = await supabase.from("Dishes").delete().eq("id", dishId);
};

export const AddDish = async function (
  name,
  description,
  price,
  restaurantId,
  menuName,
  imageUrl
) {
  const { data, error } = await supabase
    .from("Dishes")
    .insert([
      {
        name: name,
        description: description,
        price: price,
        restaurantId: restaurantId,
        menuName: menuName,
        image_url: imageUrl,
      },
    ])
    .select();

  return data;
};

//Done
const GetMenus = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Dishes")
    .select("*")
    .eq("restaurantId", restaurantId);

  grouped = Object.fromEntries(groupBy(data, (x) => x.menuName));
  return data;
};

//Done
const GetRestaurantOrders = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("restaurantId", restaurantId);

  return data;
};

export const UpdateRestaurant = async function (
  restaurantId,
  name,
  postcode,
  contactNumber,
  contactEmail,
  category
) {
  const { data, error } = await supabase
    .from("Restaurants")
    .update([
      {
        name: name,
        postcode: postcode,
        contactNumber: contactNumber,
        contactEmail: contactEmail,
        category: category,
      },
    ])
    .eq("id", restaurantId)
    .select();

  return data;
};

//Done
const GetRestaurantOrdersWithStatus = async function (restaurantId, status) {
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

const GetRestOrdersById = async function (orderId) {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("id", orderId);

  return data[0];
};

export const MakeOrder = async function (
  paymentMethodId,
  total,
  cartId,
  restaurantId,
  status = "Pending"
) {
  try {
    const { data, error } = await supabase
      .from("Orders")
      .insert([{ paymentMethodId, total, cartId, restaurantId, status }])
      .select();

    if (error) {
      console.error("Order creation error:", error);
      return { error };
    }

    const { data: data2, error: error2 } = await supabase
      .from("Carts")
      .update({ status: "Purchased" })
      .eq("id", cartId)
      .select();

    if (error2) {
      console.error("Cart update error:", error2);
      return { error: error2 };
    }

    return { data, data2 };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { error: err };
  }
};

//Done
export const UpdateOrder = async function (orderId, status) {
  const { data, error } = await supabase
    .from("Orders")
    .update({ status: status })
    .eq("id", orderId)
    .select();

  return data;
};

//Done
export const CreateCart = async function (customerId) {
  const { data, error } = await supabase
    .from("Carts")
    .insert([{ customerId: customerId }])
    .select();

  return data;
};

//Done
export const AddToCart = async function (dishId, cartId, quantity) {
  const { data, error } = await supabase
    .from("CartEntries")
    .insert([{ dishId: dishId, cartId: cartId, quantity: quantity }])
    .select();

  return data;
};

export const GetCartItems = async function (cartId) {
  const { data, error } = await supabase
    .from("CartEntries")
    .select("*")
    .eq("cartId", cartId);

  for (let i = 0; i < data.length; i++) {
    data[i].dish = await GetDish(data[i].dishId);
  }

  return data;
};

export const GetCustomerCarts = async function (customerId) {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("customerId", customerId)
    .is("status", null);

  return data;
};

export const GetCartById = async function (cartId) {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("id", cartId);

  return data;
};

const GetRestaurantCarts = async function (restaurantId) {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("restaurantId", restaurantId)
    .eq("status", "Purchased");

  return data;
};

const GetCustomerPurchases = async function (customerId) {
  var carts = await GetCustomerCarts(customerId);
  for (let i = 0; i < carts.length; i++) {
    carts[i].dishes = await GetCartItems(carts[i].id);
    for (let x = 0; x < carts[i].dishes.length; x++) {
      carts[i].dishes[x].dish = await GetDish(carts[i].dishes[x].dishId);
    }
  }

  return carts;
};

const GetRestaurantSales = async function (restaurantId) {
  var orders = await GetRestaurantOrders(restaurantId);

  for (let i = 0; i < carts.length; i++) {
    carts[i].dishes = await GetCartItems(carts[i].id);
    for (let x = 0; x < carts[i].dishes.length; x++) {
      carts[i].dishes[x].dish = await GetDish(carts[i].dishes[x].dishId);
    }
  }

  return carts;
};

//Done
const GetSubscriptionPlans = async function () {
  const { data, error } = await supabase.from("SubscriptionPlans").select("*");

  return data;
};

const GetSubscription = async function (customerId) {
  const { data, error } = await supabase
    .from("Subscriptions")
    .select("*")
    .eq("customerId", customerId);

  return data;
};

//Done
export const Subscribe = async function (customerId, type) {
  const { data, error } = await supabase
    .from("Subscriptions")
    .insert([{ customerId: customerId, type: type }])
    .select();

  const { data2, error2 } = await supabase
    .from("Customers")
    .update({ membership: true })
    .eq("id", customerId)
    .select();

  return data;
};

export const CreateMembership = async function (customerId) {
  const { data, error } = await supabase
    .from("Subscriptions")
    .insert([{ customerId: customerId }])
    .select();

  return data;
};

//Done
const CreateSubscriptionPlan = async function (
  restaurantId,
  name,
  price,
  discount,
  paymentFrequency
) {
  const { data, error } = await supabase
    .from("SubscriptionPlans")
    .insert([
      {
        restaurantId: restaurantId,
        name: name,
        price: price,
        discount: discount,
        paymentFrequency: paymentFrequency,
      },
    ])
    .select();

  return data;
};

//Done
export const GetRestaurantOrdersWithDate = async function (
  restaurantId,
  from,
  to
) {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("status", "Delivered")
    .eq("restaurantId", restaurantId)
    .gte("transactionTime", from)
    .lte("transactionTime", to);

  for (let i = 0; i < data.length; i++) {
    data[i].cartEntries = await GetCartItems(data[i].cartId);
    for (let x = 0; x < data[i].cartEntries.length; x++) {
      data[i].cartEntries[x].dish = await GetDish(
        data[i].cartEntries[x].dishId
      );
    }
  }
  
  return data;
};

// const main = async function() {
// 	const result = await Subscribe(1, 1)
// 	console.log(result)
//}

// export functions for Restaurant
export {
  CreateRestaurant,
  RestaurantLogin,
  GetRestaurantRatings,
  GetRestaurantOrders,
  GetRestOrdersById,
  GetRestaurant,
  GetMenus,
};
// export functions for Customer
export { GetCustomer, CreateCustomer, CustomerLogin, AddCustomerPaymentMethod };
// export others
export { GetRestaurantCarts };

//main()
