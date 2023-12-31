import React, {useState} from 'react'
import "./LoginScreen.css"
import SignupScreen from './SignupScreen';

function LoginScreen() {
 const [signIn, setSignIn] = useState(false); 

  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
            <img
            className="loginScreen_logo"
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt=""
            />
            <button onClick={() => setSignIn(true)}
            className="loginscreen_button">
                Sign In 
            </button>

            <div className='loginScreen_gradient' />
        </div>
        <div className='loginscreen_center'>

        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ): (
            <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere.Cancel any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address"/>
              <button 
              onClick={() => setSignIn(true)}
              className="loginScreen__getStarted">
                   GET STARTED
             </button> 
            </form>
          </div>         
          </>
          )}
        </div>
        </div>
    </div>
  )
}

export default LoginScreen