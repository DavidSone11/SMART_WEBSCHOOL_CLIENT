'use strict';
var app = angular.module("dIApp");
function Customer() {
    this.customerCode = "001";
    this.customerName = "Santosh";
}

function Phone() {
    this.PhoneNo = "7403465159";

}
function Address() {
    this.address1 = "Bangalore";
    this.address2 = "Mangalore";
}

function CreateAddress() {
    var add = new Address();
    return add;
}
function CreatePhone() {
    var phone = new Phone();
    return phone;
}

app.factory("Customerfactory", function () {

    return {
        CreateWithAddress: function () {
            var cust = new Customer();
            cust.Address = CreateAddress();
            return cust;
        },
        CreateWithPhone: function () {
            var cust = new Customer();
            cust.Phone = {};
            cust.Phone = CreatePhone();
            return cust;
        },
        CreateWithPhoneAddress: function () {
            //debugger;
            var cust = new Customer();
            cust.Phone = CreatePhone();
            cust.Address = CreateAddress();
            return cust;
        }
    };

});
