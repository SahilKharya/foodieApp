/*We are storing the value returned by the angular.module() function here
The first argument in function is the name of the app we mentioned in 'ng-app' directive
The second parameter is an array of 'extra powers' we want to add to our app*/
var foodieApp = angular.module('foodieApp',['ngRoute']);   //A module contains the different components of an AngularJS app

/* .config() is a function that allows us to set-up our app in some way. '$routeProvider' is an object defined in ngRoute, it allows us to set-up routes */
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/home',{                            //  '/' means the root route
		templateUrl: 'pages/login.html',   //URL of the route, The place where we have the template/view saved
		controller: 'loginController'      //The controller to use with that view
	})
	.when('/',{                        // '/home' is anothr route
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
    .when('/restaurant/:id', {       //The :id part in the URL is known as a route parameter
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

//"mainController" -name of the controller we want to create inside variable 'foodieApp', we are passing function which the controller will do.
//A controller manages the app's data
foodieApp.controller('mainController',function($scope) {
    //$scope is an object to which we can add a list of properties and functions
    // the prop. or function which are present in html file can be accessed though '$scope.property' and $scope can be used inside the controller in which it is defined.
    $scope.restaurants = [{
        name: 'Mama Loca',
        address: 'G-1, Princess Centre, 6/3, New Palasia, Indore',
        location: 'New Palasia',
        category: 'Casual Dining',
        vote: '4.2',
        cuisines: 'Greek, Lebanese',
        cost: '1200',
        hours: '12 Noon to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/4/1401934/eb2c40ad80fbd6aa6e2ee3242913e3c1.jpg',
        id: '1'
    },
    {   name: 'Hong Kong Chinese Restaurant',
        address: 'Opposite Canara Bank, Nagar Nigam Market, Old Palasia, Indore',
        location: 'Old Palasia',
        category: 'Casual Dining',
        vote: '3.7',
        cuisines: 'Chinese',
        cost: '450',
        hours: '11 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/reviews_photos/5db/e2e6e4c773b9a4a59920b6b38fbcb5db_1451312383.jpg',
        id: '2'
    },
    {   name: 'The Chocolate Room',
        address: 'UG-6&7, BCM Heights, Scheme 54, PU4, Vijay Nagar, Indore',
        location: 'BCM Heights, Vijay Nagar',
        category: 'CAFÉ, DESSERT PARLOR',
        vote: '4.0',
        cuisines: 'Cafe, desserts',
        cost: '700',
        hours: '10 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/reviews_photos/865/705144a375d6a581969faff2a19aa865_1499600491.jpg',
        id: '3'
    },
    {   name: 'Bollywood Theka',
        address: 'Infiniti Hotel, IC/CA Scheme 94, Vijay Nagar, Indore',
        location: 'Infiniti Hotel, Vijay Nagar',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Chinese, Continental, North Indian, Finger Food',
        cost: '500',
        hours: '11 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/reviews_photos/2cf/c04858934a788aebe85e7507435f92cf_1501344533.jpg',
        id: '4'
    },
    {   name: 'Level 3',
        address: 'Second Floor, Mangal City Mall, AB Road, Vijay Nagar, Indore',
        location: 'Mangal City Mall, Vijay Nagar',
        category: 'Pub',
        vote: '3.2',
        cuisines: 'North Indian, Chinese, Mughlai',
        cost: '1500',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/2/1400042/a6e71e532fe59078edbb2591d620a21b.jpg',
        id: '5'
    },
    {   name: 'Mr. Beans',
        address: '100, Saket, Old Palasia, Indore',
        location: 'Old Palasia',
        category: 'Cafe',
        vote: '3.8',
        cuisines: 'Cafe, French, Italian',
        cost: '800',
        hours: '10 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/3/1401633/f076bdb7e3fda3a87ba182207862632c.jpg',
        id: '6'
    }]
})

foodieApp.controller('loginController',function($scope, $location) {    //controller for login.html
	$scope.goToHome = function() {
        //$location object helps us modify the URL of the webpage automatically
		$location.url('home')     //change the url of the browser to the 'home' route
	}
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {  //controller for restaurant.html
    //'$http object make it easy to use the functionality of making HTTP requests without jQuery
	$scope.restaurantId = $routeParams.id;   //$routeParams give us access to all the route parameters (variables) as property of the object, the value of $routeParams.id is the value we specified in the URL
    
    // giving the var values of restaurant as object
    var restaurants = [{
        name: 'Mama Loca',
        address: 'G-1, Princess Centre, 6/3, New Palasia, Indore',
        location: 'New Palasia',
        category: 'Casual Dining',
        vote: '4.2',
        cuisines: 'Greek, Lebanese',
        cost: '1200',
        hours: '12 Noon to 11 PM (Mon-Sun)',
        hours: '12 Noon to 1 AM',
        bestDish: {
	       name: 'Corn Pizza',
	       image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
        image: 'https://b.zmtcdn.com/data/pictures/chains/4/1401934/eb2c40ad80fbd6aa6e2ee3242913e3c1.jpg'
        
    },
    {   name: 'Hong Kong Chinese Restaurant',
        address: 'Opposite Canara Bank, Nagar Nigam Market, Old Palasia, Indore',
        location: 'Old Palasia',
        category: 'Casual Dining',
        vote: '3.7',
        cuisines: 'Chinese',
        cost: '450',
        hours: '11 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/reviews_photos/5db/e2e6e4c773b9a4a59920b6b38fbcb5db_1451312383.jpg'
    },
    {   name: 'The Chocolate Room',
        address: 'UG-6&7, BCM Heights, Scheme 54, PU4, Vijay Nagar, Indore',
        location: 'BCM Heights, Vijay Nagar',
        category: 'CAFÉ, DESSERT PARLOR',
        vote: '4.0',
        cuisines: 'Cafe, desserts',
        cost: '700',
        hours: '10 AM to 11 PM (Mon-Sun)',
        bestDish: {
	       name: 'Brownie Shake',
	       image: 'http://www.bitememore.com/media/drink/115_1814122271_l.jpg'
        },
        image: 'https://b.zmtcdn.com/data/reviews_photos/865/705144a375d6a581969faff2a19aa865_1499600491.jpg'
    },
    {   name: 'Bollywood Theka',
        address: 'Infiniti Hotel, IC/CA Scheme 94, Vijay Nagar, Indore',
        location: 'Infiniti Hotel, Vijay Nagar',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Chinese, Continental, North Indian, Finger Food',
        cost: '500',
        hours: '11 AM to 11 PM (Mon-Sun)',
        bestDish: {
	       name: 'Biryani',
	       image: 'http://www.cukzy.com/wp-content/uploads/vegetable-biryani.jpeg'
        },
        image: 'https://b.zmtcdn.com/data/reviews_photos/2cf/c04858934a788aebe85e7507435f92cf_1501344533.jpg'
    },
    {   name: 'Level 3',
        address: 'Second Floor, Mangal City Mall, AB Road, Vijay Nagar, Indore',
        location: 'Mangal City Mall, Vijay Nagar',
        category: 'Pub',
        vote: '3.2',
        cuisines: 'North Indian, Chinese, Mughlai',
        cost: '1500',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/2/1400042/a6e71e532fe59078edbb2591d620a21b.jpg'
    },
    {   name: 'Mr. Beans',
        address: '100, Saket, Old Palasia, Indore',
        location: 'Old Palasia',
        category: 'Cafe',
        vote: '3.8',
        cuisines: 'Cafe, French, Italian',
        cost: '800',
        hours: '10 AM to 11 PM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/3/1401633/f076bdb7e3fda3a87ba182207862632c.jpg'
    }]
    

    
	$scope.restaurant = restaurants[$routeParams.id - 1];  //array starts from 0 so '-1' 
        $scope.ingredients = [];
    $scope.getIngredients = function(url) {
        var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'      //the way var is written is the syntax Clarifai told us to write
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key d760af0fffdd4c0cb2022c7db97b3836',
			'Content-Type': 'application/json'
		},
		'data': data
        //"$http().then(function1,function2)" - first makes the request, THEN runs the first function if it was successful or second function
	})
        .then(function (response) {         //Here we are just running a loop through all the ingredients we got and pushing each value in the array
            var ingredients = response.data.outputs[0].data.concepts;
        console.log(ingredients);
            
            for (var i =0;i < ingredients.length;i++) {
            $scope.ingredients.push(ingredients[i].name);
            }
        },
            function (xhr) {
        	console.log(xhr);
    })
    }// function(url)
    

})//restaurant controller
