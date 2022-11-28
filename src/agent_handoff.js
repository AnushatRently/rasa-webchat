import globalVar from './globalVar';

export default function(message, user){
    const socket_webchat = globalVar.socket_webchat
    if (socket_webchat) socket_webchat.emit('event-1', {user: user, message: message}, globalVar.customerID)
    return 
}