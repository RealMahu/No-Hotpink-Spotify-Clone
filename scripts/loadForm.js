import { loadMain } from "./loadMain.js";

const tabBox = document.querySelector(".tab-box");

function loadRegister() {
	let accounts = JSON.parse(localStorage.getItem("accounts"));
	const formBox = document.createElement("div");
	formBox.classList.add("form-box");
	formBox.innerHTML = `
		<form class="register-form" action="">
			<h2>Register</h2>
			<div class="alert-box">
				<p class="alert-message">&nbsp;</p>
			</div>
			<div class="email-box form-row">
				<label for="email">E-Mail<span>*</span></label>
				<input autocomplete="off" type="email" name="email" id="email" required>
			</div>
			<div class="nickname-box form-row">
				<label for="nickname">Nickname<span>*</span></label>
				<input autocomplete="off" type="text" name="nickname" id="nickname" required>
			</div>
			<div class="password-box form-row">
				<label for="password">Password<span>*</span></label>
				<input autocomplete="off" type="password" name="password" id="password" required>
			</div>
			<div class="picture-box form-row">
				<label for="picupload">Profilbild setzen</label>
				<input type="file" name="picupload" id="picupload">
			</div>
			<div class="button-box form-row">
				<label class="LogRegBtn" id="submitReg" for="submitReg">Register</label>
				<button type="submit" id="submitReg"></button>
			</div>
			<div class="already-box form-row">
				<p>Already got an account? > <span class="sign-link">Sign in</span> <</p>
				<small>Mit <span>*</span> gekennzeichnete Felder sind Pflichtfelder</small>
			</div>
		</form>
	`;
	tabBox.appendChild(formBox);

	// profilepicture
	const fileElement = document.getElementById("picupload");
	let imgUrl;
	fileElement.addEventListener("change", (e) => {
		e.preventDefault();
		const fr = new FileReader();
		fr.readAsDataURL(fileElement.files[0]);

		fr.addEventListener("load", () => {
			imgUrl = fr.result;
		});
	});

	const signInBtn = document.querySelector(".sign-link");
	signInBtn.addEventListener("click", (e) => {
		e.preventDefault();
		tabBox.innerHTML = '';
		loadLogin();
	});

	function register(){
		const email = document.getElementById("email");
		const nickname = document.getElementById("nickname");
		const password = document.getElementById("password");
		const alertMessage = document.querySelector(".alert-message");
		const nickValue = nickname.value;
		const emailValue = email.value;
		const passValue = password.value;
		const defaultImg = 'img/defaultProfilepic.webp';
		const existingNick = accounts.find(account => account.username === nickValue);
		const existingEmail = accounts.find(account => account.email === emailValue);
		if (existingNick || existingEmail) {
			alertMessage.innerText = 'Nickname or E-Mail already exists!';
			alertMessage.style.color = 'red';
			setTimeout(clearAlert, 3000);
		} else if (!nickValue || !emailValue || !passValue) {
			alertMessage.innerText = 'Please fill all inputs!';
			alertMessage.style.color = 'red';
			setTimeout(clearAlert, 3000);
		} else {
			accounts.push({ email: emailValue, username: nickValue, password: passValue, loggedIn: false, profilePic: imgUrl || defaultImg });
			localStorage.setItem("accounts", JSON.stringify(accounts));
			alertMessage.innerText = 'Successfully registered!';
			alertMessage.style.color = 'green';
			nickname.value = '';
			email.value = '';
			password.value = '';
			setTimeout(clearAlert, 3000);
		};
	};

	const registerForm = document.querySelector(".register-form");
	const registerBtn = document.getElementById("submitReg");
	registerForm.addEventListener("submit", (e) => {
		e.preventDefault();
		register();
	});
	registerBtn.addEventListener("click", (e) => {
		e.preventDefault();
		register();
	});
};

function loadLogin(){
	if (!localStorage.getItem("accounts")) {
		localStorage.setItem("accounts", JSON.stringify([]));
	};
	let accounts = JSON.parse(localStorage.getItem("accounts"));
	const formBox = document.createElement("div");
	formBox.classList.add("form-box");
	formBox.innerHTML = `
	<form class="login-form" action="">
		<h2>Login</h2>
		<div class="alert-box">
			<p class="alert-message">&nbsp;</p>
		</div>
		<div class="nickname-box form-row">
			<label for="nickname">Nickname</label>
			<input autocomplete="off" type="text" name="nickname" id="nickname" required>
		</div>
		<div class="password-box form-row">
			<label for="password">Password</label>
			<input autocomplete="off" type="password" name="password" id="password" required>
		</div>
		<div class="button-box form-row">
			<label class="LogRegBtn" id="submitLog" for="submitLog">Login</label>
			<button type="submit" id="submitLog"></button>
		</div>
		<div class="already-box form-row">
			<p>Don't have an account? > <span class="sign-link">Sign up</span> <</p>
		</div>
	</form>
	`;
	tabBox.appendChild(formBox);
	const signUpBtn = document.querySelector(".sign-link");
	signUpBtn.addEventListener("click", (e) => {
		e.preventDefault();
		tabBox.innerHTML = '';
		loadRegister();
	});
	function login(){
		const nickname = document.getElementById("nickname");
		const password = document.getElementById("password");
		const alertMessage = document.querySelector(".alert-message");
		const nickValue = nickname.value;
		const passValue = password.value;
		if (!nickValue || !passValue){
			alertMessage.innerText = 'Please fill the inputs!';
			alertMessage.style.color = 'red';
			setTimeout(clearAlert, 3000);
		} else {
			const user = accounts.find(account => account.username === nickValue && account.password === passValue);
			if (user) {
				user.loggedIn = true;
				localStorage.setItem("accounts", JSON.stringify(accounts));
				alertMessage.innerText = 'Logging in..';
				alertMessage.style.color = 'green';
				nickname.value = '';
				password.value = '';
				setTimeout(clearAlert, 3000);
				setTimeout(logging, 3000);
				setTimeout(loadMain, 3000);
			} else {
				alertMessage.innerText = 'Invalid username or password';
				alertMessage.style.color = 'red';
				setTimeout(clearAlert, 3000);
			};
		};
	};
	const loginForm = document.querySelector(".login-form")
	const loginBtn = document.getElementById("submitLog");
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		login();
	});
	loginBtn.addEventListener("click", (e) => {
		e.preventDefault();
		login();
	});
};

function clearAlert() {
	const alertBox = document.querySelector(".alert-box");
	alertBox.innerHTML = `<p class="alert-message">&nbsp;</p>`;
};

function logging(){
	const chartBtn = document.querySelector(".charts");
	const creatorBtn = document.querySelector(".creators");
	const loginBtn = document.querySelector(".login");
	const accBtn = document.querySelector(".acc");

	accBtn.classList.add("active");
	chartBtn.classList.remove("active");
	creatorBtn.classList.remove("active");
	loginBtn.classList.remove("active");

	const loginTab = document.querySelector(".login");
	const accTab = document.querySelector(".acc");
	let accounts = JSON.parse(localStorage.getItem("accounts"));
	loginTab.style.display = 'none';
	accTab.style.display = 'flex';
	tabBox.innerHTML = '';
	const loggedInUser = accounts.find(account => account.loggedIn === true);
	if (loggedInUser) {
		const loggedInBox = document.createElement("div");
		const profilePic = loggedInUser.profilePic;
		loggedInBox.classList.add("loggedIn-box");
		loggedInBox.innerHTML = `
			<div class="logged-heading">
				<h2>User Panel</h2>
			</div>
			<div class="logged-profilepic">
				<div class="profilePicture-wrapper">
					<img id="profilePicture" src="${profilePic}" alt="">
					<input type="file" id="fileInput" style="display: none;" accept="image/jpeg, image/png, image/webp">
				</div>
			</div>
			<div class="logged-info">
				<p>Nickname: ${loggedInUser.username}</p>
				<p>E-Mail: ${loggedInUser.email}</p>
			</div>
			<div class="logged-btn">
				<p id="logoutBtn">Log out</p>
			</div>
		`;
		tabBox.appendChild(loggedInBox);
		const editImgBtn = document.querySelector(".profilePicture-wrapper");
		const fileInput = document.getElementById("fileInput");
		editImgBtn.addEventListener("click", () => {
			fileInput.click();
		});
		let imgUrl;
		fileInput.addEventListener("change", (e) => {
			e.preventDefault();
			const fr = new FileReader();
			fr.addEventListener("load", () => {
				imgUrl = fr.result;
				loggedInUser.profilePic = imgUrl;
				localStorage.setItem("accounts", JSON.stringify(accounts));
				logging();
			});
			fr.readAsDataURL(fileInput.files[0]);
		});
	} else {
		console.log("Kein Benutzer eingeloggt");
	};

	const logoutBtn = document.getElementById("logoutBtn");
	logoutBtn.addEventListener("click", (e) => {
		e.preventDefault();
		tabBox.innerHTML = '';
		loggedInUser.loggedIn = false;
		localStorage.setItem("accounts", JSON.stringify(accounts));
		loginTab.style.display = 'flex';
		accTab.style.display = 'none';
		setTimeout(loadLogin, 300);
		loadMain();
	});
};

export { loadLogin, logging };