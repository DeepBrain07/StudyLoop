import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';

// Pages
import Landing from '../pages/Landing.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App />}>
            <Route path="/" element={<Landing/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  );