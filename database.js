const Supabase = require('@supabase/supabase-js')

const supabaseUrl = 'https://ascvsyhxtaewmaehmgxk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzY3ZzeWh4dGFld21hZWhtZ3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NzEwNDUsImV4cCI6MjAyNjE0NzA0NX0.hWnMU8kZV5IkCrMZ15mYK4DWEfu4mM5jzXyV-NXAUjs';
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


//Done
const CreateCustomer = async function(firstName, lastName, address, state, postcode, city, emailAddress, phoneNumber, cardNumber, ccv, expiry) {
	const { data, error } = await supabase
	  .from('Customers')
	  .insert([
	    { "firstName": firstName, "lastName": lastName, "address": address, "state": state, "postcode": postcode,
	      "city": city, "emailAddress": emailAddress, "phoneNumber": phoneNumber,
	      "cardNumber": cardNumber, "ccv": ccv, "expiry": expiry },
	  ])
	  .select()
	  
	  return data
}


//Done
const GetCustomer = async function(customerId) {  	
	const { data, error } = await supabase
	.from('Customers')
	.select('*')
	.eq("id", customerId);
	
	return data
}



//Done
const CreateRestaurant = async function(name) {
	const { data, error } = await supabase
	  .from('Restaurants')
	  .insert([
	    { "name": name },
	  ])
	  .select()
	  
	  return data
}


//Done
const GetRestaurant = async function(restaurantId) {
	const { data, error } = await supabase
	.from('Restaurants')
	.select('*')
	.eq("id", restaurantId);
	
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


//Done
const GetDishes = async function(dishIds) {
	const { data, error } = await supabase
	.from('Dishes')
	.select('*')
	

	let filtered = []
	for (let i=0; i < data.length; i++) {
		if (dishIds.indexOf(data[i].id) != -1){
			filtered.push(data[i])
		}
	}
	
	return filtered
}

//Done
const GetMenus = async function(restaurantId) {
	const { data, error } = await supabase
	.from('Dishes')
	.select('*')
	.eq("restaurantId", restaurantId);
		
	grouped = Object.fromEntries(groupBy(data, x => x.menuName))
	return grouped
}



//Done
const GetOrders = async function(customerId) { 
	const { data, error } = await supabase
	.from('Orders')
	.select('*')
	.eq("customerId", customerId);
	
	return data
}


//Done
const MakeOrder = async function(customerId, dishId) {
	const { data, error } = await supabase
	  .from('Orders')
	  .insert([
	    { "customerId": customerId, "dishId": dishId },
	  ])
	  .select()
	  
	  return data
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


const GetSubscriptions = async function(memberId) {
	const { data, error } = await supabase
	.from('Subscriptions')
	.select('*')
	.eq("memberId", memberId);
	
	return data
}


const main = async function() {
	const customer1 = await GetCustomer(7);
	console.log("Customer1: ", customer1)

 	const restaurant1 = await GetRestaurant(1)
	console.log("Restaurant 1: ", restaurant1)
	
	const restaurant1Menus = await GetMenus(1)
	console.log("Restaurant 1 menu: ", restaurant1Menus)
	
	const dishes123 = await GetDishes([1,2,3])
	console.log("Dishes (id = 1,2,3): ", dishes123)
	
	const subscriptionPlan1 = await GetSubscriptionPlans(1)
	console.log("Subscription plan 1: ", subscriptionPlan1)

	const memberSubscription1 = await GetSubscriptions(2)
	console.log("Member 1 subscriptions: ", memberSubscription1)
}

main()

export { CreateRestaurant, };
