var grammar;
function initGrammar() {
  grammar = tracery.createGrammar(grammar_json);
  grammar.addModifiers(baseEngModifiers);
}

function setBlaseballer() {
  if (document.getElementById("factsCheck").checked) {
    document.getElementById("blaseballer").innerHTML = grammar.flatten("#origin#").toUpperCase();
  } else {
    document.getElementById("blaseballer").innerHTML = grammar.flatten("#noFactsOrigin#").toUpperCase();
  }
}

function changeButton() {
  document.getElementById("genBtn").innerHTML = grammar.flatten("#button#").toUpperCase();
}

window.onload = function() {
  initGrammar();
  setBlaseballer();
  document.getElementById("factsCheck").checked = true;
};

