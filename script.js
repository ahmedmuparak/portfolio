        // === Scroll Reveal Animation ===
        window.addEventListener('scroll', reveal);
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for(var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 100; 

                if(revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
        reveal();

        // === Scroll to Top Button & Active Nav Link ===
        let mybutton = document.getElementById("scrollTopBtn");
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                mybutton.style.display = "flex"; 
            } else {
                mybutton.style.display = "none";
            }
            
            // Active Link Highlight
            let sections = document.querySelectorAll('section');
            let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('.navbar-nav .nav-link[href*=' + id + ']').classList.add('active');
                    });
                }
            });
        }

        mybutton.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    emailjs.init("FXguWhvlkvFL6CDn9");

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_rvm8hfp", "template_tpxg8cp", this)
            .then(function() {
                alert("Message sent successfully!");
            }, function(error) {
                alert("Failed to send message.");
                console.log(error);
            });
    });
