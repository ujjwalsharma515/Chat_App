import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';
import { Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children,auth=false} ) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;
  




  if (!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />;
  } else if (isLoggedIn && ['/users/sign_in', '/user/sign_up'].includes(window.location.pathname)) {
    return <Navigate to={'/'} />;
  }

  return children;
};

function App() {
   
  return (
   <div>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
       <Route
        path="/users/sign_up"
        element={
         <ProtectedRoute>
            <Form isSignInPage={false} /> </ProtectedRoute>
        } 
      />
    </Routes>
    </div>
  );
}

export default App;
