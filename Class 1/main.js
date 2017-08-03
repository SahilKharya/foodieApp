var foodieApp = angular.module('foodieApp',[]);
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
})