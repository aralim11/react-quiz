import './../styles/App.css';
import routes from './routes';
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from './../contexts/AuthContext';

function App() {
  return (
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
  );
}

export default App;
