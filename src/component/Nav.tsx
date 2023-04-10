export default function Nav(): JSX.Element {
  return (
    <div className="w-full navbar border border-solid border-base-300 bg-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <a href="/" className="flex-1 px-2 mx-2 text-gray-500 font-bold text-xs md:text-lg">
        Personal Color Test
      </a>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <a>공유하기</a>
          </li>
          <li>
            <a>결과보기</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
