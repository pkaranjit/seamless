'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
 angular.module('todoApp').controller('MainCtrl', function ($scope) {

  $("li").hover(over, out);
  function over(){
    TweenMax.to($(this).find("a"), 0.3, {rotation:0, backgroundColor:"#90EE90", borderColor:"#90EE90", scale:1.1, x:0, delay:0.6});
  }
  function out(){
    TweenMax.to($(this).find("a"), 0.3, {rotation:0, backgroundColor:"#eeeeee", borderColor:"#ffffff", scale:1, x:0, overwrite:"all"});
  }
});

