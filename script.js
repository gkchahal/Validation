var loggedIn = false;
var array = [
  {
    text: "heckin good boys I am bekom fat aqua doggo. Dat tungg tho snoot length boy wow such tempt snoot dat tungg tho, noodle horse adorable doggo wow very biscit doggo. Thicc you are doing me a frighten mlem yapper floofs fat boi, I am bekom fat doing me a frighten much ruin diet pats long water shoob, sub woofer h*ck borkdrive mlem. Boofers such treat wow such tempt fluffer, boof. I am bekom fat shoob fluffer borking doggo thicc boof, pats wrinkler wow very biscit.",
    importance: 3, date: 3
  },
  {
    text: "Rub against owner because nose is wet. Sit and stare loved it, hated it, loved it, hated it attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently purr when being pet the cat was chasing the mouse. While happily ignoring when being called lick butt and make a weird face yet stares at human while pushing stuff off a table fall asleep on the washing machine kitty scratches couch bad kitty. Cats woo please stop looking at your phone and pet me really likes hummus, for scream for no reason at 4 am so show belly, fish i must find my red catnip fishy fish or a nice warm laptop for me to sit on. I am the best all of a sudden cat goes crazy eat plants, meow, and throw up because i ate plants yet push your water glass on the floor. Stares at human while pushing stuff off a table let me in let me out let me in let me out let me in let me out who broke this door anyway for curl up and sleep on the freshly laundered towels but leave dead animals as gifts. Flex claws on the human's belly and purr like a lawnmower.",
    importance: 2, date: 2
  },
  {
    text: "Lorem ipsum dolor sit amet, sea ne affert consul regione, ut liber eripuit quo. Augue ancillae nam ea, ius an invidunt democritum. Duis officiis mei eu, nisl ridens at sed, te duo omnis iuvaret. Eam deseruisse expetendis eu, has ex vocibus ullamcorper disputationi. Nonumy everti laboramus ne cum, ex nam reque porro.",
    importance: 5, date: 5
  },
  {
    text: "I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. ",
    importance: 4, date: 4
  },
  {
    text: "Bacon ipsum dolor amet shankle sausage cow chuck leberkas pancetta strip steak short loin ham brisket turkey jowl prosciutto. Hamburger pastrami pork chop, boudin pancetta kevin bresaola beef pig t-bone cow frankfurter tail. Shankle beef burgdoggen, tenderloin pork belly turkey swine kevin leberkas spare ribs bresaola ham hock corned beef pancetta meatloaf. Short ribs sausage pork belly cow. Filet mignon turducken cow spare ribs sausage pancetta salami landjaeger.",
    importance: 2, date: 2
  },
  {
    text: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    importance: 1, date: 1
  }  
];

function app() {
  if (loggedIn == true) {
    var pages = ["Home", "Add Notes", "Display Notes", "About"];
    

    nav(pages);
  } else {
    initialElements();
    renderPage("Submit");
  }
}

function initialElements() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper"); 
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}

function nav(list) {
  for (var i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    const val = list[i];
    button.innerHTML = list[i];
    button.addEventListener("click", function () {
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page) {
  if (page === "Submit") {
    submit();
  } else if (page === "Home") {
    home();
  } else if (page === "Add Notes") {
    addNotes();
  } else if (page === "Display Notes") {
    displayNotes();
  } else if (page === "About") {
    about();
  }
}

function submit() {
  var wrapper = document.querySelector(".wrapper");

  var username = document.createElement("input");
  username.id = "inputUser";
  username.placeholder = "Username";

  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.id = "inputPass";
  password.placeholder = "Password";

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.className = "button";

  var enterInsight = document.createElement("h4");
  enterInsight.innerHTML =
    "Enter your Username and Password.";
  enterInsight.id = "enterInsight";

  wrapper.innerHTML = "";
  wrapper.appendChild(enterInsight);
  wrapper.appendChild(username);
  wrapper.appendChild(password);
  wrapper.appendChild(submitButton);

  document.body.querySelector(".button").addEventListener("click", function () {
    if (usernameValid(inputUser) && passwordValid(inputPass)) {
      loggedIn = true;
      app();
     
      home();
    } else {
      if (!usernameValid(inputUser) && passwordValid(inputPass)) {
        window.alert("Incorrect Username. Try again.");
      }
    }
  });

  function usernameValid(ele) {
    if (ele.value == "coolStudent123") {
      return true;
    } else {
      return false;
    }
  }

  function passwordValid(ele) {
    if (ele.value == "coolPassword") {
      return true;
    } else {
      return false;
    }
  }
}

function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  
  button1.innerHTML = "Add Notes";
  button1.addEventListener("click", function () {
    renderPage("Add Notes");
  });

}

function addNotes() {
  var wrapper = document.querySelector(".wrapper");

  var text = document.createElement("textarea");
  text.id = "inputNote";
  text.placeholder = "Insert Notes.";


  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.className = "button"; 
  }
app();