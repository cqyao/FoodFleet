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
const AddCustomerPaymentMethod = async function(customerId, cardNumber, ccv, expiry)
{
	const { data, error } = await supabase
	  .from('CustomerPaymentMethods')
	  .insert({"customerId": customerId, "cardNumber": cardNumber, "ccv": ccv, "expiry": expiry })
	  .select()
	  
	return data
}


export const CustomerLogin = async function(emailAddress, password) {
	const { data, error } = await supabase
	.from('Customers')
	.select('*')
	.eq("emailAddress", emailAddress)
	.eq("password", password);
	
	if (data.length > 0)
		return data[0]
	else
		return null
}


//Done
const GetCustomer = async function(customerId) {  	
	const { data, error } = await supabase
	.from('Customers')
	.select('*')
	.eq("id", customerId);
	
	return data[0]
}


//Done
export const GetPaymentMethods = async function(customerId) {  	
	const { data, error } = await supabase
	.from('CustomerPaymentMethods')
	.select('*')
	.eq("customerId", customerId);
	
	return data
}





//Done
const CreateMembership = async function(customerId, restaurantId) {
	const { data, error } = await supabase
	  .from('Memberships')
	  .insert([
	    { "customerId": customerId, "restaurantId": restaurantId },
	  ])
	  .select()
	  
	  return data
}


//Done
const GetMembership = async function(customerId) {
	const { data, error } = await supabase
	.from('Memberships')
	.select('*')
	.eq("customerId", customerId);
	
	return data
}



const AddFeedback = async function(customerId, restaurantId, rating) {
	const { data, error } = await supabase
	  .from('Ratings')
	  .insert([
	    { "customerId": customerId, "restaurantId": restaurantId, "rating": rating }
	  ])
	  .select()
	  
	  return data
}





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
const GetRestaurant = async function(restaurantId) {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*')
	.eq("id", restaurantId);
	
	return data[0]
}



//Done
export const GetRestaurants = async function() {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*');

	return data
}




//Done
const CreateRestaurant = async function(name, address, state, postcode, city, contactEmail, contactNumber) {
	const { data, error } = await supabase
	  .from('Restaurants')
	  .insert([
	    { "name": name, "address": address, "state": state, "postcode": postcode,
	      "city": city, "contactEmail": contactEmail, "contactNumber": contactNumber }
	  ])
	  .select()
	  
	  return data
}


//Done
const GetRestaurantRatings = async function(restaurantId) {
	const { data, error } = await supabase
	.from('Ratings')
	.select('*')
	.eq("restaurantId", restaurantId)
	return data
}



//Done
const GetNearbyRestaurants = async function(postcode) {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*')
	.gt('postcode', postcode - 5)
	.lt('postcode', postcode + 5)

	return data;
}

//Done
const GetRestaurantsByCategory = async function(category) {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*')
	.eq("category", category)

	return data;
}


const SearchRestaurant = async function(name) {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*')
	.ilike("name", "%"+name+"%")

	return data;
}



//Done
const GetDish = async function(dishId) {
	const { data, error } = await supabase
	.from('Dishes')
	.select('*')
	.eq("id", dishId)
	
	return data[0]
}

//Done
const GetMenus = async function(restaurantId) {
	const { data, error } = await supabase
	.from('Dishes')
	.select('*')
	.eq("restaurantId", restaurantId);
		
	grouped = Object.fromEntries(groupBy(data, x => x.menuName))
	return data
}



//Done
const GetRestaurantOrders = async function(restaurantId) { 
	const { data, error } = await supabase
	.from('Orders')
	.select('*')
	.eq("restaurantId", restaurantId)
	//.eq("status", status) No need to match status?
	
	//Pending
	//Accepted
	//Cancelled
	//In Preparation
	//Delivered
	
	return data
}	

const GetRestOrdersById = async function (orderId) {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("id", orderId);

  return data[0];
};

//Done
const MakeOrder = async function (paymentMethodId, total, cartId) {
  const { data, error } = await supabase
    .from("Orders")
    .insert([
      { paymentMethodId: paymentMethodId, total: total, cartId: cartId },
    ])
    .select();

  const { data2, error2 } = await supabase
    .from("Carts")
    .update({ status: "Purchased" })
    .eq("id", cartId)
    .select();

  return data2;
};

//Done
const UpdateOrder = async function (orderId, status) {
  const { data, error } = await supabase
    .from("Orders")
    .update({ status: status })
    .eq("id", orderId)
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

const GetCartItems = async function (cartId) {
  const { data, error } = await supabase
    .from("CartEntries")
    .select("*")
    .eq("cartId", cartId);

  return data;
};

const GetCustomerCarts = async function (customerId) {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("customerId", customerId)
    .is("status", null);

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

const GetRestaurantSales = async function(restaurantId) {
	var carts = await GetRestaurantCarts(restaurantId)
	for (let i=0; i < carts.length; i++){
		carts[i].dishes = await GetCartItems(carts[i].id)
		for (let x=0; x < carts[i].dishes.length; x++){
			carts[i].dishes[x].dish = await GetDish(carts[i].dishes[x].dishId)
		}
	}
	
	return carts
}




//Done
const GetSubscriptionPlans = async function(restaurantId) {
	const { data, error } = await supabase
	.from('SubscriptionPlans')
	.select('*')
	.eq("restaurantId", restaurantId);
	
	return data
}


//Done
const CreateSubscriptionPlan = async function(restaurantId, name, price, discount, paymentFrequency) {
	const { data, error } = await supabase
	  .from('SubscriptionPlans')
	  .insert([
	    { "restaurantId": restaurantId, "name": name, "price": price,
	      "discount": discount, "paymentFrequency": paymentFrequency },
	  ])
	  .select()
	  
	  return data
} 


//Done
const GetSubscriptions = async function(memberId) {
	const { data, error } = await supabase
	.from('Subscriptions')
	.select('*')
	.eq("memberId", memberId);
	
	return data[0]
}



const main = async function() {
	const result = await GetRestaurantSales(13)
	//console.log(result[0].dishes)
}

// export functions for Restaurant
export { CreateRestaurant, RestaurantLogin, GetRestaurantRatings, GetRestaurantOrders, GetRestOrdersById, GetRestaurant, GetMenus };
// export functions for Customer
export { GetCustomer, CreateCustomer }
// export others
export { GetRestaurantCarts };

//main()
