var firebaseConfig = {
    apiKey: "AIzaSyClAXMI-5rOVJh5Aqe5ZG_G2-gqwdxTN7Q",
    authDomain: "finalproject-f1efd.firebaseapp.com",
    databaseURL: "https://finalproject-f1efd.firebaseio.com",
    projectId: "finalproject-f1efd",
    storageBucket: "finalproject-f1efd.appspot.com",
    messagingSenderId: "635114775431",
    appId: "1:635114775431:web:be26338ae2f18d10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

firebase.database().ref("users/email").on('value', function (snapshot) {
    var mailElement = document.getElementById("personmail");
    var data = snapshot.val();
    mailElement.value= data;
});
firebase.database().ref("users/password").on('value', function (snapshot) {
    var pwdElement = document.getElementById("personpwd");
    var data = snapshot.val();
    pwdElement.value= data;
});
firebase.database().ref("users/name").on('value', function (snapshot) {
    var nameElement = document.getElementById("personname");
    var data = snapshot.val();
    nameElement.value= data;
});
firebase.database().ref("users/year").on('value', function (snapshot) {
    var yearElement = document.getElementById("personyear");
    var data = snapshot.val();
    yearElement.value= data;
});
firebase.database().ref("users/month").on('value', function (snapshot) {
    var monthElement = document.getElementById("personmonth");
    var data = snapshot.val();
    monthElement.value= data;
});
firebase.database().ref("users/day").on('value', function (snapshot) {
    var dayElement = document.getElementById("personday");
    var data = snapshot.val();
    dayElement.value= data;
});
firebase.database().ref("users/interest").on('value', function (snapshot) {
    var intElement = document.getElementById("personinter");
    var data = snapshot.val();
    intElement.value= data;
});
firebase.database().ref("users/constellation").on('value', function (snapshot) {
    var conElement = document.getElementById("personconstellation");
    var data = snapshot.val();
    conElement.value= data;
});

