import "./category-menu.styles.scss";
import { CategoryItem } from "../category-item/category-item.component";

export const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
