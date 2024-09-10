import { NavLink } from "react-router-dom";

const CategoryListFooter = ({ categoriesRow }) => {
  return (
    <div className="grid grid-cols-7 pb-4">
      {categoriesRow.map((category, index) => (
        <div key={index} className="border-b-3 border-white">
          <span className="font-bold text-lg">{category.title}</span>
          <div className="flex flex-col flex-wrap mt-2 ">
            {category.items.map((item, i) => (
              <NavLink
                key={i}
                to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                className={
                  "py-1 text-sm leading-none hover:underline hover:underline-offset-2"
                }
                exact
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryListFooter;
