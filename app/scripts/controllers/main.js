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
    TweenMax.to($(this).find("img"), 0.3, {rotation:0, scale:1.02, x:0, delay:0.6})
  }
  function out(){
    TweenMax.to($(this).find("img"), 0.3, {rotation:0, scale:1, x:0, overwrite:"all"})
  }
});

