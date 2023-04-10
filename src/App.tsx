import Nav from './component/Nav';
import Sidebar from './component/Sidebar';

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className=" drawer-content">
            <div className=" mockup-window border-2 border-gray-600 bg-gray-400">
              <Nav />
              <div className=" flex justify-center items-center text-3xl bg-white border-l border-r border-b border-solid border-base-300 h-48">컨텐츠</div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
