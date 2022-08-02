window.addEventListener("load", () => {

    var dronegen = [{
      word: 'Social Media',
      desc: 'How has social media changed the way people consume content? How has it changed the way people comment on and relate to art?'
    }, {
      word: 'Relevance',
      desc: 'How do you know if you are making something that is *relevant* to people? What clues can you find?'
    }, {
      word: 'Outside of Your Control',
      desc: 'How much of the audience experience is completely outside your control or knowledge?'
    }, {
      word: 'Listen',
      desc: 'Are you just talking to your audience? Or are you letting them talk too?'
    }, {
      word: 'Call and Response',
      desc: 'Art is call and response. Audiences call. Artists respond.'
    }, {
      word: 'Meet Them',
      desc: 'Audiences are people too. Meet them.'
    }, {
      word: 'Gather',
      desc: 'Can a community gather around a work of art? Have you seen this happen before? Why did it happen?'
    }, {
      word: 'New Ways',
      desc: 'Can you use old technology in a new way to connect with people?'
    }, {
      word: 'Wonder',
      desc: 'Can you use technology to create wonder?'
    }, {
      word: 'Curiosity',
      desc: 'Can you use technology to invite curiosity?'
    }, {
      word: 'Real Contributions',
      desc: 'Could you make space for your audience to materially change your artwork? To make contributions that actually matter?'
    }, {
      word: 'Meaningful Contributions',
      desc: 'How do you feel about inviting people into your artistic process in a meaningful way?'
    }, {
      word: 'Breadth or Depth',
      desc: 'Do you want a bigger audience? Or stronger ties with a smaller audience?'
    }, {
      word: 'Dilute or Strengthen',
      desc: 'Does audience participation dilute or strengthen your work?'
    }, {
      word: 'Listen',
      desc: 'Does your audience feel heard? What does it mean to listen to your audience?'
    }, {
      word: 'Safe',
      desc: 'Does your audience feel safe enough to speak up? Do you want your audience to feel safe?'
    }, {
      word: 'Question Marks',
      desc: 'Does your work have question marks?'
    }, {
      word: 'Earplugs',
      desc: 'Every public artistic act is a conversational gambit. Take off your earplugs.'
    }, {
      word: 'Space',
      desc: 'Have you made space for your audience to show up? Have you left a pause for them to speak?'
    }, {
      word: 'Questions',
      desc: 'How are you answering the questions of your audience? How are you making space for the questions to emerge before you answer them?'
    }, {
      word: 'Go to Them',
      desc: 'How can you go to your audience rather than trying to bring an audience to you? In a literal and direct sense, how could you do this?'
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