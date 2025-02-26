import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <main className="mx-auto max-w-5xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      {userName && <UserProfile userName={userName} />}
    </main>
  )
};
export default App;