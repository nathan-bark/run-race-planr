import { Route, Routes  } from "react-router";

import Header from "./components/common/Header/Header.component";
import SignInForm from "./components/auth/sign-in/sign-in-form.component";


function App() {
  return(
   <Routes>
    <Route path="/" element={<Header />}>
      <Route path="create-plan" element={''} />
      <Route path="learn-more" element={''} />
      <Route path="sign-in" element={<SignInForm/>} />
    </Route>
   </Routes>
  )
  
  
}

export default App;
