import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './components/context/OrdersContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'material-ui-snackbar-provider';
import App from './App';


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

