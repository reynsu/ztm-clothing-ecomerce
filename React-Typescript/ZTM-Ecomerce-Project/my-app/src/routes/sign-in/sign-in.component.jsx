import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { Action } from "history";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sing In Page </h1>
      <button onClick={logGoogleUser}>Sing In with Google Popup</button>
      <SignUpForm />
    </div>
  );
};
