
import './App.css';
import InputField from './components/InputField';


 export default function App(params) {
  return (
    <div class="login">
    <div class="form">
      <form class="login-form">
        <span class="material-icons">lock</span>
        <InputField mytype="email" myplaceholder="enter your email here"/> 
        <InputField mytype="password" myplaceholder="enter your pssword here"/> 
        <InputField mytype="number" myplaceholder="enter your phone number here"/> 
 
        <button>login</button>
      </form>  
    </div>
  </div>
  );
}
 

