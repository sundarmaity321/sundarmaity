// Main JavaScript for portfolio website functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document ready!");

  const navLinks = document.querySelectorAll(".nav-links a, .logo");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinksContainer = document.querySelector(".nav-links");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
      // Close menu on link click in mobile view
      if (navLinksContainer.classList.contains("active")) {
        navLinksContainer.classList.remove("active");
        const icon = hamburgerMenu.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Hamburger menu toggle
  if (hamburgerMenu && navLinksContainer) {
    hamburgerMenu.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");
      const icon = hamburgerMenu.querySelector("i");
      if (navLinksContainer.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Back to Top and Go to Bottom buttons
  const backToTopButton = document.getElementById("back-to-top");
  const goToBottomButton = document.getElementById("go-to-bottom");

  // Show/hide Back to Top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      if (backToTopButton) {
        backToTopButton.style.display = "block";
      }
    } else {
      if (backToTopButton) {
        backToTopButton.style.display = "none";
      }
    }
  });

  // Back to Top button click event
  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Go to Bottom button click event
  if (goToBottomButton) {
    goToBottomButton.addEventListener("click", () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
  }

  // Scroll reveal animation
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Script for auto type my name
// const words = [
//   "सुन्दर मैति",
//   "SUNDAR MAITY",
//   "সুন্দর মাইতি",
//   "सुंदर माईती",
//   "સુંદર મૈટી",
//   "ସୁନ୍ଦର ମାଇଟି",
//   "ꯁꯨꯟꯗꯔ ꯃꯥꯏꯇꯤ꯫",
//   "சுந்தர் மைதி",
//   "సుందర్ మైటీ",
//   "ಸುಂದರ್ ಮೈಟಿ",
//   "സുന്ദർ മൈറ്റി",
//   "ਸੁੰਦਰ ਮੈਟੀ",
//   "སུན་དར་མའི་ཏི།",
//   "ᱥᱩᱱᱫᱟᱨ ᱢᱟᱭᱛᱤ",
//   "سوندار مايتي",
//   "سندر میٹی",
//   "桑达尔·迈蒂",
//   "サンダー・マイティ",
//   "순다 마이티",
// ];
// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const speed = 150;
// const delay = 1000;
// const textElement = document.getElementById("text");

// function typeEffect() {
//   const currentWord = words[wordIndex];

//   if (isDeleting) {
//     textElement.textContent = currentWord.substring(0, charIndex--);
//   } else {
//     textElement.textContent = currentWord.substring(0, charIndex++);
//   }

//   if (!isDeleting && charIndex === currentWord.length + 1) {
//     isDeleting = true;
//     setTimeout(typeEffect, delay);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     wordIndex = (wordIndex + 1) % words.length;
//     setTimeout(typeEffect, 200);
//   } else {
//     setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
//   }
// }
// function explore() {
//   alert("This Portfolio Make For Desktop or Laptop Only.");
// }
// typeEffect();

// Js for submition success popup
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a successful submission

    // Show success popup
    popupOverlay.classList.add("active");

    // Reset form
    contactForm.reset();
  });

  // Close popup when close button is clicked
  closePopup.addEventListener("click", function () {
    popupOverlay.classList.remove("active");
  });

  // Close popup when clicking outside the popup
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  });
});

// Help Center functionality
// Script for Help center
// --- 1. Modal Control Logic ---

// Get the modal elements
const modal = document.getElementById("help-modal");
const helpBtn = document.getElementById("help-btn");
const closeBtn = document.querySelector(".close-btn");

// When the user clicks the button, open the modal
helpBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// --- 2. Accordion Logic ---

// Get all elements with the class "faq-question"
const accordions = document.querySelectorAll(".faq-question");

// Function to update parent panel heights recursively
function updateParentPanels(element, heightChange) {
  // Find the closest parent answer panel
  let parentPanel = element.closest(".faq-answer");

  // Loop upwards through all parent panels
  while (parentPanel) {
    // Only update if the parent panel is actually open
    if (parentPanel.style.maxHeight) {
      // Get the current height (as an integer)
      const currentHeight = parseInt(parentPanel.style.maxHeight, 10);
      // Calculate and set the new height
      const newHeight = currentHeight + heightChange;
      parentPanel.style.maxHeight = newHeight + "px";
    }
    // Move to the next parent
    parentPanel = parentPanel.parentElement.closest(".faq-answer");
  }
}

// --- 2. Accordion Logic (DYNAMICALLY GENERATED) ---

// Wait for the DOM to be fully loaded before running our script
document.addEventListener("DOMContentLoaded", function () {
  // --- A. DEFINE ALL FAQ DATA HERE ---
  // This is where you can edit all your links and content.
  const faqData = [
    {
      question: "Know Some Think New ?",
      answer: "This is ai chat bot, you can search to know something",
      mainLink: {
        text: "Click Here",
        href: "../AdvanceAi ChatBot/Index.html" /* <-- AI chat bot */,
      },
    },
    {
      question: "About My Self",
      answer:
        "I am Sundar Maity, I am in Final year in Diploma in CSE from BRAINWARE UNIVERSITY.Know more in my CV.",
      mainLink: {
        text: "My CV",
        href: "Sundar Maity CV (org).pdf" /* <-- Link to CV */,
      },
      supporting: {
        question: "My Skills",
        answer:
          "My skills are HTML and CSS, I have some knowledge in JavaScript and Python, use Ai tools. My projects are based on HTML,CSS also some of Java Script.",
      },
      supporting: {
        question: "My Hobby",
        answer:
          "My hobbis are playing cricket, watching movies,reading book, and listening to music and Storys.",
      },
    },
    {
      question: "My Strength",
      answer:
        "I am a quick learner and a good team player. I can work under pressure and meet deadlines.I am punctual, also have leadership ability.",

      supporting: {
        question: "My Weekness",
        answer: "I am a little bit lazy and I am not good at public speaking.",
      },
    },
    {
      question: "Contact With Me",
      answer: "E-mail: sundarmaity111@gmail.com, Phone Number: +91 7319185590",
    },
    // {
    //     question: "Where can I find my order history?",
    //     answer: "Your complete order history is available in your 'My Account' dashboard under the 'Orders' tab.",
    //     mainLink: {
    //         text: "Go to My Account",
    //         href: "/account/dashboard.html" /* <-- Example: Link to a nested page */
    //     },
    //     supporting: {
    //         question: "Can I cancel an order from my history?",
    //         answer: "You can cancel an order within 30 minutes of placing it. After that, the order is processed and cannot be canceled. You can, however, return it once it arrives.",
    //         link: {
    //             text: "View Your Orders",
    //             href: "/account/orders.html" /* <-- Example: Link to another project page */
    //         }
    //     }
    // },
  ];

  // --- B. FUNCTION TO BUILD THE HTML ---
  function buildHelpCenter() {
    const container = document.querySelector(".faq-container");
    if (!container) return; // Safety check

    container.innerHTML = ""; // Clear container

    // Loop through each item in our data
    faqData.forEach((item) => {
      // 1. Check for and build the supporting question HTML (if it exists)
      let supportingHtml = "";
      if (item.supporting) {
        // --- Create hyperlink HTML if link data exists ---
        let linkHtml = "";
        if (
          item.supporting.link &&
          item.supporting.link.text &&
          item.supporting.link.href
        ) {
          linkHtml = `
                                <a href="${item.supporting.link.href}" class="support-link" target="_blank" rel="noopener noreferrer">${item.supporting.link.text}</a>
                            `;
        }
        // --- End of link logic ---

        supportingHtml = `
                            <div class="supporting-faq">
                                <button class="faq-question support-question">${item.supporting.question}</button>
                                <div class="faq-answer support-answer">
                                    <p>${item.supporting.answer}</p>
                                    ${linkHtml} <!-- Hyperlink is inserted here -->
                                </div>
                            </div>
                        `;
      }

      // --- 2. NEW: Build the main answer link ---
      let mainLinkHtml = "";
      if (item.mainLink && item.mainLink.text && item.mainLink.href) {
        mainLinkHtml = `
                            <a href="${item.mainLink.href}" class="support-link" target="_blank" rel="noopener noreferrer">${item.mainLink.text}</a>
                        `;
      }
      // --- End of new link logic ---

      // 3. Build the main question HTML
      const itemHtml = `
                        <div class="faq-item">
                            <button class="faq-question">${item.question}</button>
                            <div class="faq-answer">
                                <p>${item.answer}</p>
                                ${mainLinkHtml} <!-- Insert main link here -->
                                ${supportingHtml} <!-- Insert supporting question here -->
                            </div>
                        </div>
                    `;

      // 4. Add the complete item to the page
      container.insertAdjacentHTML("beforeend", itemHtml);
    });
  }

  // --- C. FUNCTION TO UPDATE PARENT PANEL HEIGHTS ---
  // (This is the same as before)
  function updateParentPanels(element, heightChange) {
    let parentPanel = element.closest(".faq-answer");
    while (parentPanel) {
      if (parentPanel.style.maxHeight) {
        const currentHeight = parseInt(parentPanel.style.maxHeight, 10);
        const newHeight = currentHeight + heightChange;
        parentPanel.style.maxHeight = newHeight + "px";
      }
      parentPanel = parentPanel.parentElement.closest(".faq-answer");
    }
  }

  // --- D. FUNCTION TO ATTACH EVENT LISTENERS ---
  function attachAccordionListeners() {
    // Find all question buttons *inside* the container we just filled
    const accordions = document.querySelectorAll(
      ".faq-container .faq-question"
    );

    accordions.forEach((acc) => {
      acc.addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        const panelScrollHeight = panel.scrollHeight;

        if (panel.style.maxHeight) {
          // Close it
          const heightChange = -panelScrollHeight;
          panel.style.maxHeight = null;
          panel.style.paddingTop = null; /* Changed */
          panel.style.paddingBottom = null; /* Changed */
          updateParentPanels(this, heightChange);
        } else {
          // Open it
          const heightChange = panelScrollHeight;
          panel.style.maxHeight = panelScrollHeight + "px";
          panel.style.paddingTop = "18px"; /* Changed */
          panel.style.paddingBottom = "18px"; /* Changed */
          updateParentPanels(this, heightChange);
        }
      });
    });
  }

  // --- E. RUN THE FUNCTIONS ---
  buildHelpCenter(); // 1. Build the HTML
  attachAccordionListeners(); // 2. Attach listeners to the new HTML
}); // End of DOMContentLoaded.

// js for blinker
// const blinker = document.getElementById("blinker");
// setInterval(() => {
//     blinker.classList.toggle("shadow-on");
//     blinker.classList.toggle("shadow-off");
// }, 500); // Change every 500ms
//   Blinker END
