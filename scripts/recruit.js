/**
 * Created by Huang on 2017/2/28.
 */
(function (angular) {
    angular.module("Home")
        .directive("mainContent",function () {
            return{
                restrict:'EC',
                templateUrl:"layout/recruit.html",
                replace:false,
                scope:{
                    newString:"="
                }
            }
        });


})(window.angular);