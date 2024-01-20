let registerlink = document.querySelector(".registerlink");
let loginlink= document.querySelector(".loginlink");
let register = document.querySelector(".register");
let login= document.querySelector(".login"); 


registerlink.addEventListener("click", ()=>{
    if(login.classList.contains("moveloginleft")||register.classList.contains("moveregisterleft")){
        login.classList.remove("moveloginleft");
        register.classList.remove("moveregisterleft");
    }else{
        login.classList.add("moveloginleft");
        register.classList.add("moveregisterleft");
    }
})

loginlink.addEventListener("click", ()=>{
    if(register.classList.contains("moveregisterleft")||login.classList.contains("moveloginleft")){
        login.classList.remove("moveloginleft");
        register.classList.remove("moveregisterleft");
    }else{
        login.classList.add("moveloginleft");
        register.classList.add("moveregisterleft");
    }
})
