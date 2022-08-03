window.addEventListener("load", () => {

    var dronegen = [{
      word: ' ',
      desc: 'Are you just talking to your audience? Or are you letting them talk too?'
    }, {
      word: ' ',
      desc: 'Art is call and response. Audiences call. Artists respond.'
    }, {
      word: ' ',
      desc: 'Audiences are people too. Meet them.'
    }, {
      word: ' ',
      desc: 'Can a community gather around a work of art? Have you seen this happen? Why did it happen?'
    }, {
      word: ' ',
      desc: 'Can you use an old technology in a new way to connect with people?'
    }, {
      word: ' ',
      desc: 'Can you use technology to create wonder?'
    }, {
      word: ' ',
      desc: 'Can you use technology to invite curiosity?'
    }, {
      word: ' ',
      desc: 'Could you make space for your audience to materially change your artwork? To make contributions that actually matter?'
    }, {
      word: ' ',
      desc: 'How do you feel about inviting people into your artistic process in a meaningful way?'
    }, {
      word: ' ',
      desc: 'Do you want a bigger audience? Or stronger ties with a smaller audience?'
    }, {
      word: ' ',
      desc: 'Does audience participation dilute or strengthen your work?'
    }, {
      word: ' ',
      desc: 'Does your audience feel heard? What does it mean to listen to your audience?'
    }, {
      word: ' ',
      desc: 'Does your audience feel safe enough to speak up? Do you want your audience to feel safe?'
    }, {
      word: ' ',
      desc: 'Does your work have question marks?'
    }, {
      word: ' ',
      desc: 'Every public artistic act is a conversational gambit. Take off your earplugs.'
    }, ];
  
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
