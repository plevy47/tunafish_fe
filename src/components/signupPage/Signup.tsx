import React from 'react';
import { Link, PrimaryButton } from '@fluentui/react';
import './Signup.css';
import NavigationBar from '../header/NavigationBar';
import { SendRequest } from '../../database/SendRequest';
import { addUser } from '../../database/endpoint';
import SignupField from './SignupField';
// import { ErrorCheck } from './ErrorCheck';

const Signup = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <div>
      <NavigationBar />
      <div
        className="signup"
      >
        <div
          className="signup-container"
        >
          <h1>Tunafish</h1>
          <div
            className="signup-container-fields"
          >
            <SignupField label="Username" method={setUsername} />
            <SignupField label="Password" method={setPassword} />
            <SignupField label="Email" method={setEmail} />
          </div>
          <div
            className="signup-container-footer"
          >
            <PrimaryButton
              style={{ width: '100%' }}
              onClick={() => {
                SendRequest(addUser(username, password, email), 'POST')
                  .then((response) => {
                    console.log(response);
                  });
              }}
            >
              Create Account
            </PrimaryButton>
            <Link
              href="http://m.quickmeme.com/img/eb/eb3b2df0a9f5aaa46b78002295c71f8723c3382f12547d180ccfe28803f97e14.jpg"
              underline
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
