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

// $(document).ready(function(){
//     var email;
//     var password;

//     function isLogin() {
//         firebase.auth().onAuthStateChanged(function (user) {
//             if (user) {
//                 console.log("User is logined", user.uid)
//                 window.location.href = "./index.html";  //登入時改跳轉頁面

//             } else {
//                 console.log("User is not logined yet.");
//             }

//         });
//     }

//     $("#login").click(function () {
//         email = document.getElementById('mail').value;
//         password = document.getElementById('password').value;
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .catch(function (error) {
//                 var errorMessage = error.message;
//                 console.log(errorMessage);
//                 if (errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted.")
//                     $('.lmessage').html('此帳號不存在').css('color', 'red');
//                 else if (errorMessage == "The password is invalid or the user does not have a password.")
//                     $('.lmessage').html('密碼錯誤').css('color', 'red');
//             });

//         isLogin();
//     });

    

//     // 註冊

//     $("#register").click(function () {
//         email = document.getElementById('mail').value;
//         password = document.getElementById('password').value;
//         firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
//             //登入成功後，取得登入使用者資訊
//             loginUser = firebase.auth().currentUser;
//             console.log("登入使用者為", loginUser.email);
//             uid = loginUser.uid;
//             firebase.database().ref('users/' + loginUser.uid).set({ email: loginUser.email, studentId: $('#studentId').val() }).then(function () {
//                 window.location.href = "index.html";
//             });

//         }).catch(function (error) {
//             console.error("寫入使用者資訊錯誤", error);
//             if (error.message == "The email address is already in use by another account.")
//                 $('.rmessage').html('電子郵件已被註冊').css('color', 'red');
//         });
//     });

//     $('#rpassword').on('keyup', function () {
//         if ($('#password').val() != $('#rpassword').val()) {
//             document.getElementById('register').setAttribute("disabled", 'true');
//         }
//         else {
//             document.getElementById('register').removeAttribute("disabled");
//         }
//     });

//     //
// })

function index(){
    var mailElement = document.getElementById("mail");
    var mail = mailElement.value;
    var pwdElement = document.getElementById("password");
    var pwd = pwdElement.value;
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var inter = document.getElementById("inter").value;
    var constellation = document.getElementById("constellation").value;
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
    window.location.href = "index.html";
}

