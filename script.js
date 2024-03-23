document.getElementById("button").addEventListener('click', function() {
    document.querySelector(".share").style.display = 'flex';
    document.getElementById("buttonclose").style.display = 'inline-block';
    document.getElementById("button").style.display = 'none';
});

function init() {
    document.querySelector(".share").style.display = 'none';
    document.getElementById("button").style.display = 'inline-block';
    document.getElementById("buttonclose").style.display = 'none';
}

document.getElementById("buttonclose").addEventListener('click', init);
document.getElementById("buttonclosetwo").addEventListener('click', init);