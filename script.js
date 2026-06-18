const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")){
                themeBtn.innerHTML = "☀️";
                    }
                        else{
                                themeBtn.innerHTML = "🌙";
                                    }
                                    });

                                    const hamburger =
                                    document.getElementById("hamburger");

                                    const navLinks =
                                    document.getElementById("navLinks");

                                    hamburger.addEventListener("click", () => {
                                        navLinks.classList.toggle("active");
                                        });