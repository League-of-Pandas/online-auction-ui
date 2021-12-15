import Profile from "../component/Profile";
import LoginForm from "../component/LoginForm";

import { useAuth } from "../contexts/auth";

export default function itemForm() {
  const {user} = useAuth()
  return (
    <>
   
      {
        (user) ? (
          <Profile />
        ) :
          (
            <LoginForm />
      )
      }

    </>
  );
}
