// import React, { useState, useContext, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { AuthStack } from './AuthStack';
// import { AppStack } from './AppStack';
// import { AuthenticatedUserContext } from '../providers';
// import { LoadingIndicator } from '../components';

// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';

// export const RootNavigator = () => {
//     const { user, setUser } = useContext(AuthenticatedUserContext);
//     const [ initializing,setintializing] = useState(true);
//     const [isLoading, setIsLoading] = useState(true);


//     function onAuthStateChanged(user){
//         setUser(user);
//         if (  initializing ) setintializing(false);
//     }
//     useEffect(() => {
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//         }
//     // onAuthStateChanged returns an unsubscriber
//         const unsubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged
//         // authenticatedUser => {
//         //     authenticatedUser ? setUser(authenticatedUser) : setUser(null);
//         //     setIsLoading(false);
//         //     }
//         );
//     // unsubscribe auth listener on unmount
//         return unsubscriber;
//     }, [user]);
//     if (isLoading) {
//         return <LoadingIndicator />;
//     }
//     return (
//         <NavigationContainer>
//             {user ? <AppStack /> : <AuthStack />}
//         </NavigationContainer>
//     );
// };

import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Assuming you've imported auth

// Import firebase and initialize it
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AuthenticatedUserContext } from '../providers';
import { LoadingIndicator } from '../components';

export const RootNavigator = () => {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [initializing, setInitializing] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {

        // onAuthStateChanged returns an unsubscriber
        const unsubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

        // unsubscribe auth listener on unmount
        return unsubscriber;
    }, [user]);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
