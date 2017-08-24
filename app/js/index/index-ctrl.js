angular.module( 'index', ['home','products'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'index', {
    url: '/',
    abstract:true,
    templateUrl: 'app/js/index/index.tpl',
    controller: 'IndexCtrl',
  } );
} ).controller( 'IndexCtrl', function( $scope ) {
  console.log( 'in index ctrl' );
} );
