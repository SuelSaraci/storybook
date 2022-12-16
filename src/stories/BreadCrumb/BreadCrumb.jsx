import { ChevronRightIcon } from "@heroicons/react/20/solid";
import "./BreadCrumb.css";

const Breadcrumbs = ({ pages, userImg }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li className="flex items-center space-x-4">
          <img src={userImg} alt="User Image" />
          <p className="text-sm font-medium text-gray-500 hover:text-gray-700">
            My perspectives
          </p>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              {pages && (
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  aria-hidden="true"
                />
              )}

              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
