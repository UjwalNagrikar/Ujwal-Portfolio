const roles = ["Cloud Engineer", "DevOps Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const roleElement = document.getElementById("dynamic-role");
    const currentRole = roles[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    roleElement.textContent = currentRole.substring(0, charIndex);

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // पूरा टेक्स्ट टाइप होने के बाद पॉज
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 500); // डिलीट होने के बाद पॉज
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 150); // टाइपिंग स्पीड
    }
}

typeEffect(); 