import ItemForm from "../component/ItemForm";
import LoginForm from "../component/LoginForm";

import { useAuth } from "../contexts/auth";
export default function itemForm() {
  const { user } = useAuth()
  return (
    <>
      {
        (user) ? (
          <ItemForm />
        ) :
          (
            <LoginForm />
      )
      }

    </>
  );
}
