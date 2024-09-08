function getPasswordStrength(password){
    let s=0;
    if(password.length>7) s++;
    if(/[A-Z]/.test(password)) s++;
    if(/[0-9]/.test(password)) s++;
    if(/[\W_]/.test(password)) s++;
   return s;
}
document.querySelector(".pw-form #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display="block";
})
document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
let e1=document.querySelector(".pw-meter .pw-display-toggle-btn");
if(e1.classList.contains("active")){
    document.querySelector(".pw-meter #password").setAttribute("type","password");
    e1.classList.remove("active");
}
else{
    document.querySelector(".pw-meter #password").setAttribute("type","text");
    e1.classList.add("active");
}
});

document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
let password=e.target.value;
let s=getPasswordStrength(password);
let passwordStrengthSpans=document.querySelectorAll(".pw-meter .pw-strength span");
if(password===""){
    passwordStrengthSpans[0].innerText = "Weak";
    passwordStrengthSpans[1].style.width = "0%";
    passwordStrengthSpans[1].style.background = "transparent";
}
else{
s=Math.max(s,1);
passwordStrengthSpans[1].style.width =s*25+"%";
if(s<2){
    passwordStrengthSpans[0].innerText="Weak";
    passwordStrengthSpans[1].style.color="#111";
    passwordStrengthSpans[1].style.background="#d13636";
} else if(s>=2 && s<=3){
    passwordStrengthSpans[0].innerText="Medium";
    passwordStrengthSpans[1].style.color="#111";
    passwordStrengthSpans[1].style.background="#e6da44";
} else{
    passwordStrengthSpans[0].innerText="Strong";
    passwordStrengthSpans[1].style.color="#fff";
    passwordStrengthSpans[1].style.background="#20a820";
}}
});

document.querySelector(".pw-form").addEventListener("reset", function() {
    let passwordInput = document.querySelector("#password");
    let strengthSpans = document.querySelectorAll(".pw-strength span");
    
    passwordInput.value = ""; // Clear the password input
    strengthSpans[0].innerText = "Weak"; // Reset the strength text
    strengthSpans[1].style.width = "0%"; // Reset the strength bar width
    strengthSpans[1].style.background = "#d13636"; // Default color for "Weak"
});

document.querySelector(".btn-101").addEventListener("click", function(event) {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.querySelector(".error-message");
    if (passwordInput === "") {
        // Prevent form submission and show error
        event.preventDefault();
        errorMessage.style.display = "block";
    }else {
        // Hide error message and proceed
        errorMessage.style.display = "none";
        // Here you can add code to submit the form or proceed with further validation
        // For now, this will just hide the error if password is valid
    }
});