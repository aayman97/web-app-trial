
const template = document.createElement("template")

template.innerHTML = `
<style>
.input-container{
	display: flex;
    flex-direction: column;
	align-items: center;
}

#emailInput,#passwordInput{
	padding : 10px
}

.signInButton {

  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor : pointer;

}

</style>
<div id="inputContainer" class="input-container">
	<input id="emailInput"></input>
	<input id="passwordInput" type="password"></input>
	<button id="signInButtonID" class="signInButton"></button>
</div>

`



class InputLoginComponent extends HTMLElement {
  constructor() {
    super();
	this.attachShadow({mode : 'open'})
	this.shadowRoot.appendChild(template.content.cloneNode(true))
	this.emailInput = ""
	this.password =""
	this.shadowRoot.getElementById("signInButtonID").disabled = true
  }






  connectedCallback() {
	this.shadowRoot.getElementById("emailInput").style.width = `${this.getAttribute('widthOfTheInput')}px`
	this.shadowRoot.getElementById("passwordInput").style.width = `${this.getAttribute('widthOfTheInput')}px`
	this.shadowRoot.getElementById("emailInput").style.height = `${this.getAttribute('heightOfTheInput')}px`
	this.shadowRoot.getElementById("passwordInput").style.height = `${this.getAttribute('heightOfTheInput')}px`
	this.shadowRoot.getElementById("inputContainer").style.gap = `${this.getAttribute('gap')}px`
	this.shadowRoot.getElementById("emailInput").placeholder = this.getAttribute('emailPlaceHolder')
	this.shadowRoot.getElementById("passwordInput").placeholder = this.getAttribute('passwordPlaceHolder')
	this.shadowRoot.getElementById("signInButtonID").style.width =`${this.getAttribute('buttonWidth')}px`
	this.shadowRoot.getElementById("signInButtonID").innerText =this.getAttribute("buttonText")


	this.shadowRoot.getElementById("emailInput").addEventListener("input",(e)=>{
		this.emailInput = e.target.value
		this.shadowRoot.getElementById("signInButtonID").disabled =!( this.emailInput !== "" && this.password !== "");
	})
	this.shadowRoot.getElementById("passwordInput").addEventListener("input",(e)=>{
		this.password = e.target.value
		this.shadowRoot.getElementById("signInButtonID").disabled =!( this.emailInput !== "" && this.password !== "");
	})




	this.shadowRoot.getElementById("signInButtonID").addEventListener('click', () => window.alert(`your email : ${this.emailInput}`));

  }

  disconnectedCallback(){
	this.shadowRoot.getElementById("emailInput").removeEventListener()
	this.emailInput = ""
  }
}

customElements.define("input-login-component", InputLoginComponent);
