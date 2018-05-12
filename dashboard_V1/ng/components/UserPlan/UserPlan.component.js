var app = angular.module('dIApp');
app.component('greetUser', {
    templateUrl: 'ng/components/UserPlan/UserPlan.tmpl.html',
    controller: function () {
        this.user = 'Welcome to MyWorld!!!';

    }
});