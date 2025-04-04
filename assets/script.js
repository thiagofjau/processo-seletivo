document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    // Lmpar mensagens de erro
    document.getElementById("nomeError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("senhaError").textContent = "";

    // Validação do nome
    if (!nome) {
      document.getElementById("nomeError").textContent =
        "O campo nome é obrigatório.";
      isValid = false;
    } else if (!nome.includes(" ")) {
      document.getElementById("nomeError").textContent = "Insira o sobrenome.";
      isValid = false;
    }

    // Validação do e-mail
    if (!email) {
      document.getElementById("emailError").textContent =
        "O campo e-mail é obrigatório.";
      isValid = false;
    }

    // Validação da senha
    if (!senha) {
      document.getElementById("senhaError").textContent =
        "O campo senha é obrigatório.";
      isValid = false;
    } else if (senha.length < 6) {
      document.getElementById("senhaError").textContent =
        "A senha deve ter pelo menos 6 caracteres.";
      isValid = false;
    }

    // Se tudo for válido, exibir os dados usando um Sweet Alert
    if (isValid) {
      Swal.fire({
        title: "Sucesso!",
        html: `<strong>Nome:</strong> ${nome}<br><strong>E-mail:</strong> ${email}<br><strong>Senha:</strong> ${senha}`,
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal",
        },
      }).then(() => {
        location.reload();
      });
    }
  });
