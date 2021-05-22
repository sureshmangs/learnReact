import React from 'react';

const UserContext = React.createContext("CodeEvolution"); // sending default value -> it will working only if nothing is passed explicitly

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;