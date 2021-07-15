const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  if (document.getElementById("nome").value == "") {
    alert("Por favor, preencha o campo nome");
    document.getElementById("nome").focus();
    return false;
  }
  let email = document.getElementById("email").value;
  if (
    document.getElementById("email").value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe um E-MAIL válido!");
    document.getElementById("email").focus();
    return false;
  }
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let content = document.getElementById("content");
  const form = document.getElementById("form");

  alert("Obrigada por se cadastrar");
});
