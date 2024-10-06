import { Route, Routes } from "react-router-dom";
import ChannelDetailsPage from "./ChannelDetailsPage";

export default function App() {
  return (
    <div>
      <h3>My App</h3>
      <Routes>
        <Route path="/" element={<div>I'm the home page</div>}/>
        <Route path="/channel-browser" element={<div>I'm the channel browser</div>}/>
        <Route path="/channel/:channelId" element={<ChannelDetailsPage/>}/>
      </Routes>
    </div>
  )
}