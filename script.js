const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");

document.getElementById("toRegister").addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});

document.getElementById("toLogin").addEventListener("click", () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});



/*
📌 1. Pegando elementos HTML

👉 Linha 1
const loginForm = document.querySelector(".login");

. document → representa toda a página HTML
. querySelector() → procura um elemento na página
. ".login" → procura um elemento que tenha class="login"
. const loginForm → cria uma variável que guarda esse elemento encontrado

Resumo:
O JavaScript pega do HTML o bloco do formulário de login e 
guarda dentro da variável loginForm.
*/

/*
1. Pegando elementos HTML
const loginForm = document.querySelector(".login");

. document → representa toda a página HTML
. querySelector() → procura um elemento na página
. ".login" → procura um elemento que tenha class="login"
. const loginForm → cria uma variável que guarda esse elemento encontrado

Resumo:
O JavaScript pega do HTML o bloco do formulário de login e 
guarda dentro da variável loginForm.

👉 Linha 2
const registerForm = document.querySelector(".register");
- Mesma lógica:

. procura um elemento com class="register"
. guarda na variável registerForm

📌 Resumo:
Aqui ele pega o formulário de cadastro.

//////////////////////////////////////
📌 2. Ao clicar no botão “Ir para Cadastro”
👉 Linha 3
document.getElementById("toRegister")

. procura no HTML um elemento que tenha id="toRegister"
. geralmente é um link ou botão tipo:

<a id="toRegister">Criar conta</a>

//////////////////////////////////////
👉 Linha 3–4 (resto)
.addEventListener("click", () => {

. addEventListener → fica "escutando" quando algo acontece
. "click" → quando esse botão/elemento for clicado
.  () => { ... } → isso é uma função que roda quando o clique acontece

📌 Resumo:
Quando alguém clicar no botão "Cadastro", execute esse código:

//////////////////////////////////////
👉 Linha 5 e 6
loginForm.classList.remove("active");
registerForm.classList.add("active");

.classList → lista de classes do elemento HTML
.remove("active") → tira a classe "active" do formulário de login
.add("active") → adiciona a classe "active" no formulário de cadastro

📌 Efeito:
👉 O formulário de login some
👉 O formulário de cadastro aparece

//////////////////////////////////////
📌 3. Ao clicar no botão “Ir para Login”
👉 Linha 8
document.getElementById("toLogin").addEventListener("click", () => {

    Procura o botão com:
    <a id="toLogin">Já tenho conta</a>

    E quando clicar:
//////////////////////////////////////

👉 Linha 9 e 10
registerForm.classList.remove("active");
loginForm.classList.add("active");

Faz o contrário:

. tira o “active” do cadastro
. coloca “active” no login

📌 Efeito:
👉 Cadastro some
👉 Login aparece



*/