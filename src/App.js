import { AuthContextProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider as TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ThankYou from './components/ThankYou';
import VerifyEmail from './components/VerifyEmail';
import ResetPassword from './components/ResetPassword';
import ResetPasswordMessage from './components/ResetPasswordMessage';
import Products from './components/Products';
import MainScreen from './components/MainScreen';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      <AuthContextProvider>
        <TaskProvider>
            <div className="App">
              <Header/>
              <Routes>
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/reset" element={<ResetPassword/>} />
                <Route path="/resetsent" element={<ResetPasswordMessage/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/thankyou" element={<ThankYou/>}/>
                <Route path="/verifyemail" element={<VerifyEmail/>}/>
                <Route path="/" element={<ProtectedRoute><MainScreen/></ProtectedRoute>} />
              </Routes>
              <Footer/>
            </div>
        </TaskProvider>
      </AuthContextProvider>
    
  );
}

export default App;
