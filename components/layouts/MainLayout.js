import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col h-screen">
      <Toaster position="bottom-center" reverseOrder={false} />
      <header className="bg-black text-white ">
        <h1>Header</h1>
      </header>
      <div className="content py-12">{children}</div>
      <footer className="bg-black text-white">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default MainLayout;
