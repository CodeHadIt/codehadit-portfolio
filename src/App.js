import DesktopHeader from "./Components/Header/Desktop-Header/DesktopHeader";
import MobileHeader from "./Components/Header/Mobile-Header/MobileHeader";
import Me from "./Components/Me/Me";
import Body from "./Components/Body/Body";


function App() {

  return (
    <div className="App">
      <DesktopHeader />
      <MobileHeader />
      <main id="home">
        <Me />
        <Body />
      </main>
    </div>    

  );
}

export default App;
