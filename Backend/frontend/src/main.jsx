import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AuthProvider from './Context/AuthProvider';
import PaymentProvider from './Context/PaymentContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PaymentProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </PaymentProvider>
   
  </BrowserRouter>
);
