import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/allAsyncActions/allAsyncActions";

import "./menuHeader.css";

const MenuHeader = () => {
	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, []);

	//recursive call to get the nested categories
	const renderAllNestedCategories = (categories) => {
		let nestedCategoryList = [];
		for (let category of categories) {
			nestedCategoryList.push(
				<li key={category.name}>
					{
						// if parent exists then create an <a> tab else create span
						category.parentId ? (
							<a href={category.slug}>{category.name}</a>
						) : (
							<span>{category.name}</span>
						)
					}
					{category.subCategories.length ? (
						<ul>
							{renderAllNestedCategories(category.subCategories)}
						</ul>
					) : null}
				</li>
			);
		}

		return nestedCategoryList;
	};

	return (
		<div className="menuHeader">
			<ul>
				{category.categories
					? renderAllNestedCategories(category.categories)
					: null}
			</ul>
		</div>
	);
};

export default MenuHeader;
