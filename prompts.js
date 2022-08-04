// https://docs.google.com/document/d/1UnWj567YW0f_W_zA8GW_DoYtmdryq13UVYG11KcqM_w/edit#
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
        desc: 'Have you made space for your audience to show up? Have you left a pause for them to speak?'
    }, {
        word: ' ',
        desc: 'How are you answering the questions of your audience? How are you making space for the questions to emerge before you answer them?'
    }, {
        word: ' ',
        desc: 'How can you go to your audience rather than trying to bring an audience to you? In a literal and direct sense, how could you do this?'
    }, {
        word: ' ',
        desc: 'How can you take your audience by the hand and pull them in? Does your audience take you by the hand and pull you in?'
    }, {
        word: ' ',
        desc: 'How do you know if you are making something that is *relevant* to people? What clues can you find?'
    }, {
        word: ' ',
        desc: 'How do you make your audience feel seen?'
    }, {
        word: ' ',
        desc: 'How do you prime your audience for your work? How do they prime you?'
    }, {
        word: ' ',
        desc: 'What does it mean if there is no stage? '
    }, {
        word: ' ',
        desc: 'How is the relationship between artists and audiences changing in the digital age? In the past, if you went to the museum and took photos you would be thrown out. Now museums have selfie stations.'
    }, {
        word: ' ',
        desc: 'If digital audience engagement is not marketing, what is it?'
    }, {
        word: ' ',
        desc: 'Put an end to terminal thinking. The curtain never really comes down.'
    }, {
        word: ' ',
        desc: 'What is the difference between an audience and a community?'
    }, {
        word: ' ',
        desc: 'What does the audience encounter before they walk in the door? What is “the door” in your project?'
    }, {
        word: ' ',
        desc: 'What is the difference between doing a show on Instagram live and doing a show on a street corner?'
    }, {
        word: ' ',
        desc: 'What does it mean if the curtain never really comes down?'  
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
