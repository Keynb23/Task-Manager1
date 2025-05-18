import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(

    <React.StrictMode>
                <Auth0Provider
          domain="http://localhost:5173/"
          clientId="YOUR_AUTH0_CLIENT_ID"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >

        <App />
        </Auth0Provider>
    </React.StrictMode>
);
