/*
* @Author: harry
* @Date:   2017-08-25 00:04:01
* @Last Modified by:   harry
* @Last Modified time: 2017-08-25 00:04:47
*/
angular.module( 'products', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'products', {
  	parent:"index",
    url: 'products',
    templateUrl: 'app/js/products/products.tpl',
    controller: 'ProductsCtrl',
  } );
} ).controller( 'ProductsCtrl', function( $scope ) {
  console.log( 'in Product ctrl' );
} );
