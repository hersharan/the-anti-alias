/*
* @Author: harry
* @Date:   2017-08-25 00:40:20
* @Last Modified by:   harry
* @Last Modified time: 2017-08-25 00:43:59
*/
angular.module( 'product-detail', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'product-detail', {
  	parent:"index",
    url: 'product-detail',
    templateUrl: 'app/js/product-detail/product-detail.tpl',
    controller: 'ProductDetailCtrl',
  } );
} ).controller( 'ProductDetailCtrl', function( $scope ) {
  console.log( 'in Product detail ctrl' );
} );