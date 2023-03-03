import Photo8 from '../images/Photo8.jpg';

const NotificationBody = ({notifications, handleRead, message, handleOpenMessage}) => {

     
    return (
        <>
        <div className="">
            {notifications.map((notification)=>(

                <div className={`noti ${notification.read ? '': 'light-gray'}`}
                    key={notification.id} 
                    onClick={()=>{
                        handleRead(notification.id)
                    }}
                >
                    <div className="image-wrapper">
                        <img src={notification.image} alt=""/>
                    </div>
                    <div className="test-wrapper">
                        <div className="inner-test-wrapper">
                            <p className="name">{notification.name}</p>
                            <p className="event">{notification.event}</p>
                            
                            {notification.result === 'message' ? 
                                <p className="result" onClick={(e)=>handleOpenMessage(e)}>
                                {notification.result}</p>:
                                <p className="result">{notification.result}</p>
                            }
                            <div 
                                className={`indicator ${notification.read ? '': 'red' }`}
                            >

                            </div>
                            
                        </div>
                        <p className="time">{notification.time}</p>
                        {notification.result === 'message' && <p className="messages hidden">{message}</p>}
                    </div>
                    
                </div>
                
))}
        </div>
        </>
    );
}
 
export default NotificationBody;