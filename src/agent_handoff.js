import io from 'socket.io-client';

export default function(message, user){
    const socket2 = io('http://localhost:5000');

    socket2.emit('event-1', {user: user, message: message})
    console.log('emitted')
    return 
}