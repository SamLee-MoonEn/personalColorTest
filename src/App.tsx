import Nav from './component/Nav';
import Sidebar from './component/Sidebar';
import MainPage from './Pages/MainPage';

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className=" drawer-content">
            <div className=" mockup-window border-2 border-gray-600 bg-gray-400">
              <Nav />
              <MainPage></MainPage>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
