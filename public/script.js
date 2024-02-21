window.onload = () => {
    let brandDiv = document.getElementById('typewriter');
    let footerDiv = document.getElementById('typewriter-footer');
    
    let typewriter = new Typewriter(brandDiv, {
        loop: false,
        delay: 75,
    });

    let typewriterFooter = new Typewriter(footerDiv, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(500)
        .typeString('E-Commerce App')
        .start();

    typewriterFooter
        .pauseFor(500)
        .typeString('E-Commerce App')
        .pauseFor(2000)
        .start();
};