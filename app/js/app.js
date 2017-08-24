angular.module( 'app', [ 'templates','ui.router', 'index' ] ).config( function( $locationProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode( true );
  $urlRouterProvider.otherwise( '/products' );
} ).run( function() {
  console.log( 'angular started' );
} );
