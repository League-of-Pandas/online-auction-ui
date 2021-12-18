import Profile from "../component/Profile";
import LoginForm from "../component/LoginForm";

import { useAuth } from "../contexts/auth";

export default function profile() {
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
