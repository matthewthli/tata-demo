/* frameowrks */
import { onMount } from "solid-js";
import { Router, Routes, Route, Navigate} from "@solidjs/router";

/* Layouts */
import MainLayout from "./layout/MainLayout";

/* Pages */
import HomePagePre from './pages/HomePagePre';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';


/* Data Functions */

function App() {
  onMount(()=>{
    console.log('* env variable at mount : '+import.meta.env.VITE_BASE_URL);
  });

  return (
    <Router>
        <Routes>
          <Route path="/" component={MainLayout}>
            <Route path="/" element={<Navigate href='/home'/>}/>
            <Route path="/homePreview" component={HomePagePre} />
            <Route path="/home" component={HomePage} />
            <Route path="/account" component={AccountPage} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
