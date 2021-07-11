import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import SnapshotFirebase from "./SnapShotFirebase";
import { AuthProvider } from "./Auth/Auth";
import Login from "./Auth/Login";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <AuthProvider>
        <Welcome />
        <Login />
        <SnapshotFirebase />
      </AuthProvider>
    </>
  );
}

export default App;
