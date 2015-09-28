// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var rentalYield = angular.module('rentalYield', ['ionic']);

rentalYield.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    /*  CALCULATIONS  */

    var buyInput = document.getElementById('buy');
    var rentInput = document.getElementById('rent');
    var submit = document.getElementById('submit');
    var percentageInput = document.getElementById('percentage');
    var $rentalYield = $('#rental-yield');

    $rentalYield.css("display", "none");

    submit.addEventListener('click', function() {
      var buy = buyInput.value;
      var rent = rentInput.value;

      if (!buy || !rent) {
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Please make sure both fields are filled out.'
        });
      } else {
        var rentPerYear = rent * 52;

        var rentalYield = (rentPerYear / buy) * 100;

        percentageInput.innerHTML = rentalYield + '%';

        $rentalYield.fadeTo(500, 1)
      }

    });

    /*                */

  });
});
