import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [accordion, setAccordion] = useState({
    newsAccordion: false,
    userAccordion: false,
  });

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen h-auto pl-4 pr-4 z-40">
      <div className="flex items-center fixed pt-4 left-5 bg-gray-900 z-20">
        <img src="/images/header/logo.png" className="h-12 w-12" alt="" />
        <h2 className="text-2xl font-bold pl-2">Admin Panel</h2>
      </div>
      <nav className="pt-5">
        <ul>
          <li className="mb-8 mt-16 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
            <Link
              to="/admin/dashboard"
              className="  flex transition text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              <span className="font-bold">Dashboard</span>
            </Link>
          </li>

          <li className="mb-8 ">
            <div
              onClick={() => {
                setAccordion((prev) => ({
                  ...prev,
                  newsAccordion: !prev.newsAccordion,
                }));
              }}
              className="  flex  cursor-pointer items-center hover:bg-gray-500 p-1 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <span className="font-bold pr-2">News Management</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 pr-1 transform ${
                  accordion.newsAccordion ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {accordion.newsAccordion && (
              <ul className="ml-4">
                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/news-management/create"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    Create
                  </Link>
                </li>
                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/news-management/NewsList"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    NewsList
                  </Link>
                </li>

                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/news-management/manage-categories"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    Manage Categories
                  </Link>
                </li>
                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/news-management/manage-tag"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    Manage Tags
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-8">
            <div
              onClick={() => {
                setAccordion((prev) => ({
                  ...prev,
                  userAccordion: !prev.userAccordion,
                }));
                // handleMenuItemClick("User Management");
              }}
              className=" hover:bg-gray-500 p-1 duration-300 ease-in-out flex transition cursor-pointer items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="font-bold pr-2">User Management</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 pr-1 transform ${
                  accordion.userAccordion ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {accordion.userAccordion && (
              <ul className="ml-4">
                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/user-management/manage-role"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    Manage User Roles
                  </Link>
                </li>
                <li className="mt-2 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
                  <Link
                    to="/admin/user-management/manage-user"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    Manage User Accounts
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mb-8 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
            <Link
              to="/admin/analytics"
              className=" hover:text-white flex text-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>

              <span className="font-bold">Analytics</span>
            </Link>
          </li>
          <li className="mb-8 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
            <Link
              to="/admin/settings"
              className=" hover:text-white flex text-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="font-bold">Settings</span>
            </Link>
          </li>
          <li className="mb-8 hover:bg-gray-500 p-1 transition duration-300 ease-in-out">
            <Link
              to="/admin/notifications"
              className=" hover:text-white flex text-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>

              <span className="font-bold">Notifications</span>
            </Link>
          </li>
          <li className="mb-8 hover:bg-gray-500 p-1 transition duration-300 ease-in-out hover:text-white">
            <Link to="/admin/help" className="  flex text-center transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>

              <span className="font-bold"> Help & Support</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
