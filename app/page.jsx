import ProtectedRoute from "./msal/ProtectRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <main>
        <div>hahahahaha</div>
      </main>
    </ProtectedRoute>
  );
};

export default Home;
