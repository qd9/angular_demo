app.directive("ngCompare", function() {
    return {

        require: "ngModel",
        link: function(scope, ele, attrs, ctrl) {
            var comparefield = document.getElementsByName(attrs.ngCompare)[0];
            compareEl = angular.element(comparefield); // 相当于jquery里的 $("password")
            //current field key up
            ele.on("keyup", function() {
                if (compareEl.val() != "") {
                    var isMatch = compareEl.val() === ele.val();
                    ctrl.$setValidity("compare", isMatch);
                    scope.$digest();
                }
            });
            //compare field key up
            compareEl.on("keyup", function() {
                if (ele.val() != "") {
                    var isMatch = compareEl.val() === ele.val();
                    ctrl.setValidity("compare", isMatch);
                    scope.$digest();
                }
            });
        }
    }

});