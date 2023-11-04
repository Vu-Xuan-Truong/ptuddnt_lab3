import { RootNavigator } from './RootNavigator';
import React from 'react';
import { AuthenticatedUserProvider } from '../providers';
// export { RootNavigator };
const Provider = () => {
    return (
        <AuthenticatedUserProvider>
            <RootNavigator/>
        </AuthenticatedUserProvider>
    )
}