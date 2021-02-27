export interface Message {
  id: string;
  email: string;
  message: string;
}

export interface User {
  email?: string;
  loggedIn: boolean;
  name?: string;
}

export enum SocketEvents {
  // Messaging
  messagesInit = 'messages.init',
  messagesNew = 'messages.new',
  messagesSend = 'messages.send',

  // User
  userJoin = 'user.join',
  userLeave = 'user.leave',

  // Users
  usersInit = 'users.init',
  usersUpdate = 'users.update'
}
