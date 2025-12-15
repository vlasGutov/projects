alert("helloooooooo")

let id = (id) => document.getElementById(id);

let classes = (classes) =>
document.getElementsByClassName(classes);

function checkPasswords(form) {
    var password = form.password.value; // Берем пароль из формы
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
	for (var i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
      else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
      else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
    }
	var text = "Confirmation email sent";
	if(is_s == false) {text = password.length; alert(text); return false;}
	else if(is_b == false) {text = "At least 1 uppercase letter"; alert(text); return false;};
	if(is_d == false) {text = "At least 1 number"; alert(text); return false;};
	if(password.length < 8) {text = "Not shorter then 8 characters"; alert(text); return false;};
	alert(text);
	return true;
}

let engine = (id, serial, message) => {
 if (id.value.trim() === "") {
 errorMsg[serial].innerHTML = message;
 id.style.border = "2px solid red";
 
 // icons
 failureIcon[serial].style.opacity = "1";
 successIcon[serial].style.opacity = "0";
} else if (serial == 2) {
 if (checkPasswords(form) == false){
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";	 
 } else {
 failureIcon[serial].style.opacity = "0";
 successIcon[serial].style.opacity = "1";
 }
} else {
 errorMsg[serial].innerHTML = "";
 id.style.border = "2px solid green";
 
 // icons
 failureIcon[serial].style.opacity = "0";
 successIcon[serial].style.opacity = "1";
 }
};

let username = id("username"),
 email = id("email"),
 password = id("password"),
 password2 = id("password2"),
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");
form.addEventListener("submit", (e) => {
 e.preventDefault();
 
 engine(username, 0, "Username cannot be blank");
 engine(email, 1, "Email cannot be blank");
 engine(password, 2, "Password cannot be blank");
 engine(password2, 3, "Confirm your password");
});