import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './components/context/OrdersContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'material-ui-snackbar-provider';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const queryClient = new QueryClient()

root.render(
<QueryClientProvider client={queryClient} >
       <BrowserRouter>
            <FavoritesProvider>
              <SnackbarProvider>
                <App/>
                 </SnackbarProvider>
                
             </FavoritesProvider>
           </BrowserRouter>

           </QueryClientProvider>

);

