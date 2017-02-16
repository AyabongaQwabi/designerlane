var DL = angular.module('DesignerLane',[])

DL.controller('main','$scope','$http',function($scope,$http){
    $scope.slides =[
                              {id:0,src:'img/k.jpg',caption:'DA Les lit at NMMU central campus'},
                              {id:1,src:'img/g.jpg',caption:'Designers battle it out at Design INdaba hosted by MaXhosa Laduma'},
                              {id:2,src:'img/m.jpg',caption:'Ltdo to perform in Pariliament Street his new hit single Fresh as Funk'}
                           ]
    $scope.NavMenuItems =['Home','Whats Hot','News','About','Contact']
})
