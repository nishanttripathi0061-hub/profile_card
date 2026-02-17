let profileCards = document.querySelectorAll(".profile-card");
profileCards.forEach(card => {
    card.addEventListener("click", () => {
        if(card.classList.contains("active")){
            card.classList.remove("active");
            return;
        }
        profileCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

  
       
    });

});


let followButtons = document.querySelectorAll(".follow-btn");
followButtons.forEach(button => {
    button.addEventListener("click", (e) => { if(button.innerText === "Follow"){
        button.innerText = "Following";
        button.style.backgroundColor = "#4CAF50";
    } else {
        button.innerText = "Follow";
       button.style.backgroundColor = "#7707e8";
    } 
    });
});

