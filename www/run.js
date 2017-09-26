(function (angular) {
    'use strict';
    angular.module('app').run(['$rootScope', 'Session', '$state','$ionicPlatform', function ($rootScope, Session, $state, $ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
		  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		  // for form inputs)
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

		  // Don't remove this line unless you know what you are doing. It stops the viewport
		  // from snapping when text inputs are focused. Ionic handles this internally for
		  // a much nicer keyboard experience.
		  cordova.plugins.Keyboard.disableScroll(true);
			}
			if(window.StatusBar) {
			  StatusBar.styleDefault();
			}
		});
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.current = toState.name;
            if (!(toState.name == 'login'|| toState.name == 'register')) {
                if (!Session.isLoggedIn()) {
                    event.preventDefault();
                    $state.go('login');
                }
            }

        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
            window.scrollTo(0, 0);
        });
    }]);
})(angular);