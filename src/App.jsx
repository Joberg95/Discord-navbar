import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import ChannelBar from "./components/ChannelBar";

function App() {
  return <div className="flex">
    <SideBar />
    <ChannelBar />
    <MainContent />
  </div>;
}

export default App;
