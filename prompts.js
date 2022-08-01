window.addEventListener("load", () => {

    var dronegenLength = [{
        word: 'prompt 1',
        desc: 'words.'
    }, {
        word: 'prompt 2',
        desc: 'words.'
    }, {
        word: 'prompt 3',
        desc: 'words.'
    }, {
        word: 'prompt 4',
        desc: 'words.'
    }, {
        word: 'prompt 5',
        desc: 'words.'
    }, {
        word: 'prompt 6',
        desc: 'words.'
    }, {
        word: 'prompt 7',
        desc: 'words.'
    }, {
        word: 'prompt 8',
        desc: 'words.'
    }, {
        word: 'prompt 9',
        desc: 'words.'
    }, {
        word: 'prompt 10',
        desc: 'words.'
    },];
    // bucket to hold used items
    var usedDrones = [];

    function randomSelector() {
        var dronegenLength = dronegen.length;

        var randomNumber = Math.floor(Math.random() * dronegenLength);

        var newword = dronegen[randomNumber].word;
        var newdesc = dronegen[randomNumber].desc;

        document.getElementById("word").innerHTML = newword;
        document.getElementById("desc").innerHTML = newdesc;

        usedDrones.push(dronegen[randomNumber]);
        dronegen.splice(randomNumber, 1);

        if (dronegenLength === 1) {
            // copy usedDrones into dronegen
            dronegen = [...usedDrones];
            //empty bucket - so next time we don't have doubles
            usedDrones = [];
        }
    }

    var handleClick = () => {
        event.preventDefault();
        randomSelector();
    };
    genbtn.addEventListener("touchend", handleClick, false);
    genbtn.addEventListener("click", handleClick);

});
