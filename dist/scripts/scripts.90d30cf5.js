"use strict";angular.module("todoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("todoApp").controller("MainCtrl",["$scope",function(a){function b(){TweenMax.to($(this).find("a"),.3,{rotation:0,backgroundColor:"#90EE90",borderColor:"#90EE90",scale:1.1,x:0,delay:.6})}function c(){TweenMax.to($(this).find("a"),.3,{rotation:0,backgroundColor:"#eeeeee",borderColor:"#ffffff",scale:1,x:0,overwrite:"all"})}$("li").hover(b,c)}]),angular.module("todoApp").controller("AboutCtrl",function(){}),angular.module("todoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<ul class="gallery"> <li> <a href="#" onclick="return false"><img src="images/thumbs/1.2bd47008.jpg"><br> <label>Cambridge, MA</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/2.0ed3ec20.jpg"><br> <label>Tokyo, Japan</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/3.962896f3.jpg"><br> <label>San Francisco, CA</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/4.a7831b02.jpg"><br> <label>Okinawa, Japan</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/5.66ce810d.jpg"><br> <label>Singapore, Singapore</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/6.01d96fe8.jpg"><br> <label>New Delhi, India</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/7.166695b4.jpg"><br> <label>Mustang, Nepal</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/8.6128b630.jpg"><br> <label>Oxford, UK</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/9.986fbade.jpg"><br> <label>Stamford, VA</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/10.74a18740.jpg"><br> <label>Fairfield, CT</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/11.f01915d5.jpg"><br> <label>Beijing, China</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/12.14c27d5e.jpg"><br> <label>Brussels, Belgium</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/13.03906285.jpg"><br> <label>Paris, France</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/14.5b50b152.jpg"><br> <label>London, UK</label> </a> </li> <li> <a href="#" onclick="return false"><img src="images/thumbs/15.905059a1.jpg"><br> <label>Osaka, Japan</label> </a> </li> </ul>')}]);