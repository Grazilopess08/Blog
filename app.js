angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});


angular.module('blogPost', []);
angular.module('blogPost').controller('RestPost', function ($scope, $http){
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagem/3').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});
