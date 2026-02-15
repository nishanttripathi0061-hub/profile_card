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


