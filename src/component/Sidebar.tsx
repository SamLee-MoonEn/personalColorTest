export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-48 md:w-80 bg-base-100">
        <li>
          <a>공유하기</a>
        </li>
        <li>
          <a>결과보기</a>
        </li>
      </ul>
    </div>
  );
}
