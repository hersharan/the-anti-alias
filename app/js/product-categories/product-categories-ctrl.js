/*
* @Author: harry
* @Date:   2017-08-25 00:40:47
* @Last Modified by:   harry
* @Last Modified time: 2017-08-25 00:44:04
*/
angular.module( 'product-categories', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'product-categories', {
  	parent:"index",
    url: 'product-categories',
    templateUrl: 'app/js/product-categories/product-categories.tpl',
    controller: 'ProductCategoriesCtrl',
  } );
} ).controller( 'ProductCategoriesCtrl', function( $scope ) {
  console.log( 'in Product categories ctrl' );
} );