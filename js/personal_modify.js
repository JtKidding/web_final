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
    var mailElement = document.getElementById("personalmail_mod");
    var data = snapshot.val();
    mailElement.value= data;
});
firebase.database().ref("users/password").on('value', function (snapshot) {
    var pwdElement = document.getElementById("personalpwd_mod");
    var data = snapshot.val();
    pwdElement.value= data;
});
firebase.database().ref("users/name").on('value', function (snapshot) {
    var nameElement = document.getElementById("personalname_mod");
    var data = snapshot.val();
    nameElement.value= data;
});
firebase.database().ref("users/year").on('value', function (snapshot) {
    var yearElement = document.getElementById("personalyear_mod");
    var data = snapshot.val();
    yearElement.value= data;
});
firebase.database().ref("users/month").on('value', function (snapshot) {
    var monthElement = document.getElementById("personalmonth_mod");
    var data = snapshot.val();
    monthElement.value= data;
});
firebase.database().ref("users/day").on('value', function (snapshot) {
    var dayElement = document.getElementById("personalday_mod");
    var data = snapshot.val();
    dayElement.value= data;
});
firebase.database().ref("users/interest").on('value', function (snapshot) {
    var intElement = document.getElementById("personalinter_mod");
    var data = snapshot.val();
    intElement.value= data;
});
firebase.database().ref("users/constellation").on('value', function (snapshot) {
    var conElement = document.getElementById("personalconstellation_mod");
    var data = snapshot.val();
    conElement.value= data;
});

function personal_modify(){
    var mailElement = document.getElementById("personalmail_mod");
    var mail = mailElement.value;
    var pwdElement = document.getElementById("personalpwd_mod");
    var pwd = pwdElement.value;
    var name = document.getElementById("personalname_mod").value;
    var year = document.getElementById("personalyear_mod").value;
    var month = document.getElementById("personalmonth_mod").value;
    var day = document.getElementById("personalday_mod").value;
    var inter = document.getElementById("personalinter_mod").value;
    var constellation = document.getElementById("personalconstellation_mod").value;
    firebase.database().ref("users").set({
        email: mail,
        password: pwd,
        name: name,
        year: year,
        month: month,
        day: day,
        interest: inter,
        constellation: constellation
    });
    alert(mail);
    window.location.href="index.html";
}