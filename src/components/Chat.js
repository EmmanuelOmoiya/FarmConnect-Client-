import SideDrawer from './SideDrawer';
import TopBar from './TopBar';

function Chat() {
  return (
    <>
      <TopBar />
      <SideDrawer />
      <div className="chat">
        <h1>Chat</h1>
      </div>
    </>
  );
}

export default Chat;
