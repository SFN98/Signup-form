

function submit(){
    let form=document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let input =document.querySelectorAll("input") 
        for(let i=0; i<input.length; i++){
            if(input[i].value.length<=2){
                input[i].classList.add("error") 
            }
                //display an error text if the user makes an error
                let p_liste = document.querySelectorAll("form p")
                if(input[i].value.length<=2){
                    p_liste[i].classList.add("visible")
                    
                    //grow the input container if the user makes an error
                    let growform=document.querySelector(".block-input-form")
                    growform.classList.add("grow")
                }
                
                //display an error icon if the user makes an error
                let icon_liste=document.querySelectorAll("form img")
                if(input[i].value.length<=2){
                    icon_liste[i].classList.add("icon-error-visible")
                }
        }
        error()
    })
}
submit()

function error(){
      let regex=new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+") //email format
      let email= document.getElementById("email").value
    if (regex.test(email)){//verify if the user's email is correct
        console.log("Email valide")
    }else{//if not do this
        let button = document.querySelector("input[type='submit']")
        button.disabled=true
        let p_email=document.querySelector(".p-email")
        p_email.classList.add("visible") 
        let icon_liste=document.querySelector(".icon-error-email")
        icon_liste.classList.add("icon-error-visible")

        let inputemail =document.querySelector("input[type='email']")
        inputemail.classList.add("error")
      }
}