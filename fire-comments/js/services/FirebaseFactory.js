app.factory('FirebaseFactory', function($firebaseAuth, $firebaseObject, $firebaseArray) {
    return {
        auth: function() {
            return $firebaseAuth(new Firebase('https://fire-comment.firebaseio.com'));
        },
        commentsObject: function() {
            return $firebaseObject(new Firebase('https://fire-comment.firebaseio.com'));
        },
        commentsArray: function() {
            return $firebaseArray(new Firebase('https://fire-comment.firebaseio.com'));
        }
    }
});
