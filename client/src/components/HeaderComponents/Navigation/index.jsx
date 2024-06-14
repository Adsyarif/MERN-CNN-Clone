import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex bg-black">
        <div className="flex basis-3/4 justify-evenly items-center mr-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white text-[0.937rem] font-bold cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <Link to={"/"}>
              <img
                className="h-10"
                src="images/Header/logo.png"
                alt="CNN logo"
              />
            </Link>
          </div>

          <NavLink to={"/ID"} className="text-white text-[0.937rem] font-bold">
            ID
          </NavLink>
          <NavLink
            to={"/world"}
            className="text-white text-[0.937rem] font-bold"
          >
            World
          </NavLink>
          <NavLink
            to={"/politics"}
            className="text-white text-[0.937rem] font-bold"
          >
            Politics
          </NavLink>
          <NavLink
            to={"/bussiness"}
            className="text-white text-[0.937rem] font-bold"
          >
            Bussiness
          </NavLink>
          <NavLink
            to={"/opinion"}
            className="text-white text-[0.937rem] font-bold"
          >
            Opinion
          </NavLink>
          <NavLink
            to={"/health"}
            className="text-white text-[0.937rem] font-bold"
          >
            Health
          </NavLink>
          <NavLink
            to={"/entertaiment"}
            className="text-white text-[0.937rem] font-bold"
          >
            Entertaiment
          </NavLink>
          <NavLink
            to={"/styles"}
            className="text-white text-[0.937rem] font-bold"
          >
            Styles
          </NavLink>
          <NavLink
            to={"/travel"}
            className="text-white text-[0.937rem] font-bold"
          >
            Travel
          </NavLink>
          <NavLink
            to={"/sports"}
            className="text-white text-[0.937rem] font-bold"
          >
            Sports
          </NavLink>
        </div>

        <div className="flex basis-1/4 justify-evenly items-center mr-4">
          <NavLink
            to={"/watch"}
            className="text-white text-[0.937rem] font-bold"
          >
            Watch
          </NavLink>
          <NavLink
            to={"/listen"}
            className="text-white text-[0.937rem] font-bold"
          >
            Listen
          </NavLink>
          <NavLink
            to={"/live-tv"}
            className="text-white text-[0.937rem] font-bold"
          >
            Live TV
          </NavLink>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <NavLink
            to={"/login"}
            className="text-white p-1 text-[0.937rem] border rounded border-white font-bold"
          >
            Log In
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
