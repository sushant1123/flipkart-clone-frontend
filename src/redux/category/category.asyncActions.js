import { fetchCategoryRequest, fetchCategorySuccess, fetchCategoryFailure } from "./category.actions";

import axios from "../../helpers/axios";

export const getAllCategories = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchCategoryRequest());
			let res = await axios.get("/category/getCategories");
			if (res.status === 200) {
				dispatch(fetchCategorySuccess(res.data.categories));
			} else {
				dispatch(fetchCategoryFailure(res.data.error));
			}
		} catch (error) {
			dispatch(fetchCategoryFailure(error));
			console.log(error);
		}
	};
};
