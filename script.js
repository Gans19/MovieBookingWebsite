const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const container = document.getElementById("container");

signUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Animation Section
function addData() {
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pass").value;
  var username = document.getElementById("text").value;

  localStorage.getItem("userEmail", email);
  localStorage.getItem("userPwd", pwd);
}
