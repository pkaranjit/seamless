'use strict';

/**
 * @ngdoc overview
 * @name SeamlessApp
 * @description
 * # SeamlessApp
 *
 * Main module of the application.
 */

 var seamlessApp = angular.module('SeamlessApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ]);

 seamlessApp.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
 });

 seamlessApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .otherwise({
        redirectTo: '/'
    });
});

seamlessApp.constant('URL', 'data/');

seamlessApp.factory('DataService', function ($http, URL) {
    var getData = function () {
        return $http.get(URL + 'content.json');
    };

    return {
        getData: getData
    };
});

seamlessApp.factory('TemplateService', function ($http, URL) {
    var getTemplates = function () {
        return $http.get(URL + 'templates.json');
    };

    return {
        getTemplates: getTemplates
    };
});

seamlessApp.controller('ContentCtrl', function (DataService) {
    var ctrl = this;

    ctrl.content = [];

    ctrl.fetchContent = function () {
        DataService.getData().then(function (result) {
            ctrl.content = result.data;
        });
    };

    ctrl.fetchContent();
});

seamlessApp.directive('contentItem', function ($compile, TemplateService) {
    var getTemplate = function (templates, contentType) {
        var template = '';

        switch (contentType) {
            case 'image':
                template = templates.imageTemplate.join(' ');
                break;
            case 'video':
                template = templates.videoTemplate.join(' ');
                break;
            case 'notes':
                template = templates.noteTemplate.join(' ');
                break;
            case 'polaroid':
                template = templates.polaroidTemplate.join(' ');
        }

        return template;
    };

    var linker = function (scope, element, attrs) {
        scope.rootDirectory = 'images/';

        TemplateService.getTemplates().then(function (response) {
            var templates = response.data;

            element.html(getTemplate(templates, scope.content.content_type));           

            element.on('mouseenter', function(){
                TweenMax.to(element.find(".entry-container"), 0.3, 
                    {scale:1.1, x:0, delay:0.6}
                );
            });

            element.on('mouseleave', function(){
                TweenMax.to($(element).find(".entry-container"), 0.3, 
                    {scale:1, x:0, overwrite:"all"}
                );
            })

            $compile(element.contents())(scope);
        });
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '='
        }
    };
});
