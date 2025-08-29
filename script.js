 const text = "your own UI library";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("my-heading").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // speed in ms
      }
    }
    typeWriter();


