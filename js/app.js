function letterCounter(obj) {
    // set a variable to hold the length of input object
    let numLetters = obj.value.length;
    // select the output paragraph
    const output = document.getElementById("output");

    // live editing the output paragraph
    output.innerHTML = "Letter Counter: " + numLetters;
}