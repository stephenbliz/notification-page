import { useState } from 'react';
import NotificationHead from './component/NotificationHead';
import NotificationBody from './component/NotificationBody';
import Photo1 from './images/photo1.jpeg';
import Photo2 from './images/photo2.jpg';
import Photo3 from './images/photo3.jpg';
import Photo4 from './images/photo4.jpg';
import Photo5 from './images/photo5.jpg';
import Photo6 from './images/photo6.jpg';
import Photo7 from './images/photo7.jpg';
import Photo8 from './images/photo8.jpg';


function App() {
  const message = "Hello, thanks for setting up the chess club. I have been a member for a few weeks now and i'm already having lots of fun and improving my game";

  const [notifications, setNotifications] = useState([
    {image: Photo1, name: 'mark webber', read: false, event: 'reacted to your current post', time: '1m ago', result: 'My first tournament today', id: 1},
    {image: Photo2, name: 'angela gray', read: false, event: 'followed you', time: '5m ago', result: '', id: 2},
    {image: Photo3, name: 'jacob thompson', read: false, event: 'has joined your group', time: '1 day ago', result: 'Chess Club', id: 3},
    {image: Photo4, name: 'rizky hasanuddin', read: false, event: 'sent you a private message', time: '5 days ago', result: 'message', id: 4},
    {image: Photo5, name: 'kimberly smith', read: false, event: 'commented on your picture', time: '1 week ago', result: 'image', id: 5},
    {image: Photo6, name: 'nathan peterson', read: false, event: 'reacted to your recent post', time: '2 weeks ago', result: '5 end-strategy to increase your win rate', id: 6},
    {image: Photo7, name: 'anna kim', read: false, event: 'left the group', time: '2 weeks ago', result: 'Chess Club', id: 7}
    
  ]);
  let read = [];

  const handleRead = (id)=>{
    read = notifications.map((notification)=>
        id===notification.id 
        && notification.read === false?
        {...notification, read: true} 
        : notification);
    setNotifications(read);
  }

  const markAllRead = ()=>{
      read = notifications.map((notification)=>
      notification.read === false 
      ? {...notification, read:true} 
      : notification);
      setNotifications(read)
    
  } 

  
  let count = null;
const notificationCount = () => {
  count = notifications.reduce((accumulator, notification) => {
    if (notification.read === false) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return count;
}

const handleOpenMessage = (e)=>{
  // e.target.classList.toggle('hidden');
  e.target.parentElement.parentElement.lastChild.classList.toggle('hidden')
}

  
 

  return (
    <main className="main">
      <section className="notification-head">
        <NotificationHead 
          notifications={notifications}
          markAllRead={markAllRead}
          notificationCount={notificationCount}
        />
      </section>
      <section className="notifications">
        <NotificationBody 
          notifications={notifications}
          handleRead={handleRead}
          message={message}
          handleOpenMessage={handleOpenMessage}
        />
      </section>
    </main>
  )
}

export default App
