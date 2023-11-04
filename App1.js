import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {HomeScreen ,ForgotPasswordScreen, LoginScreen, SignupScreen} from'./screens';
import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBOTahhoqUFwmE_iHw1PjFs9ECZ6zJOVuQ",
    appId: "1:975417512850:android:e51aa9e2537a18020fa74b",
    messagingSenderId: "975417512850",
    projectId: "xuantruong-c03bf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const App = () => {
    // WidgetsFlutterBinding.ensureInitialized();
    // await Firebase.initializeApp({
        // apiKey: "AIzaSyBOTahhoqUFwmE_iHw1PjFs9ECZ6zJOVuQ",
        // appId: "1:975417512850:android:e51aa9e2537a18020fa74b",
        // messagingSenderId: "975417512850",
        // projectId: "xuantruong-c03bf",
    // });
    return (
        <AuthenticatedUserProvider>
            <SafeAreaProvider>
                <RootNavigator />
            </SafeAreaProvider>
        </AuthenticatedUserProvider>
    );
};


export default App;
