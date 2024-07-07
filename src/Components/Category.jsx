import { Link } from "react-router-dom"

function Category({handleCategory}) {
  return (
    <ul className="flex flex-col mt-4 gap-2">
    <li className="text-lg">
      <Link
        href="#"
        className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
        data-category="laptop"
        onClick={handleCategory}
      >
        <span className="w-6 h-6 bg-gray-200 rounded-full relative  pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute right-2 top-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </span>
        <span className=" pointer-events-none">لپ تاپ</span>
      </Link>
    </li>

    <li className="text-lg">
      <Link
        href="#"
        className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
        data-category="smartPhone"
        onClick={handleCategory}
      >
        <span className="w-6 h-6 bg-gray-200 rounded-full relative pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute right-2 top-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        </span>
        <span className="pointer-events-none">موبایل هوشمند</span>
      </Link>
    </li>

    <li className="text-lg">
      <Link
        href="#"
        className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
        data-category="smartWatch"
        onClick={handleCategory}
      >
        <span className="w-6 h-6 bg-gray-200 rounded-full relative pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute right-2 top-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        </span>
        <span className="pointer-events-none">ساعت هوشمند</span>
      </Link>
    </li>
  </ul>
  )
}

export default Category