function sendMail() {
    var link = "mailto:rebeccakhidsheli@outlook.com"
        + "?cc=" + encodeURIComponent(document.getElementById('email').value)
        + "&subject=" + encodeURIComponent("From: " + document.getElementById('name').value)
        + "&body=" + encodeURIComponent(document.getElementById('message').value)
        ;

    window.location.href = link;
}


new Date().getFullYear()

document.getElementById("year").innerHTML = new Date().getFullYear();


const navLinks = document.querySelectorAll('.nav-item')
const menuToggle1 = document.getElementById('navbarSupportedContent1')
const menuToggle2 = document.getElementById('navbarSupportedContent2')
const bsCollapse1 = new bootstrap.Collapse(menuToggle1, {toggle:false})
const bsCollapse2 = new bootstrap.Collapse(menuToggle2, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {bsCollapse1.toggle() })
    l.addEventListener('click', () => {bsCollapse2.toggle()})
})
