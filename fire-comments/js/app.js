var app = angular.module('app', ['firebase']);

app.controller('MainController', function($scope, FirebaseFactory) {
    FirebaseFactory.commentsObject().$bindTo($scope, 'comments').then(function() {});

    $scope.login = {
        github: function() {
            FirebaseFactory.auth().$authWithOAuthPopup('github').then(function(authData) {
                var userData = authData.github;
                $scope.user = {username: userData.username, picture: userData.profileImageURL};
            }).catch(function(err) {
                alert(err);
            });
        }
        //TODO Other providers
    };
    $scope.submit = function() {
        //Prevent users from sending blank messages
        if(!/\S/.test($scope.data.comment)) return alert('Please enter a valid message');

        FirebaseFactory.commentsArray().$add({username: $scope.user.username, picture: $scope.user.picture, body: $scope.data.comment, date: Date.now()}).then(function() {}).catch(function(err) {
            alert(err);
        });
    };
    $scope.data = {};
});
