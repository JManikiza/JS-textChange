const paleo = document.getElementById('paleolithic');
const egypt = document.getElementById('egypt');
const china = document.getElementById('china');
const romans = document.getElementById('romans');
const plague = document.getElementById('plague');
const ottoman = document.getElementById('ottoman');
const wwi = document.getElementById('wwi');
const wwii = document.getElementById('wwii');

var history = document.getElementById('history-text');


paleo.onclick = function() {
    history.innerText = `The Paleolithic Age refers to a time period in history, from approximately 2.6
    million years ago to roughly 10,000 years ago. The Paleolithic Age covers the period from when stone
    tools were first used by man to the beginning of the Mesolithic Age. The Paleolithic Age is divided into
    three divisions, including the Lower, Middle, and Upper Paleolithic periods. During the Paleolithic Age
    man evolved from his former ape-like existence to become a human. During this period many human cultures
    emerged, and community living became a way of life. During this time man began to use fire for cooking,
    develop early religions, and create art as can be seen in cave paintings dating back to this time.`;
};

egypt.onclick = function() {
    history.innerText = `Bam!`
};