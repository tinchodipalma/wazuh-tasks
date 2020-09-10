import React, { useReducer, useEffect, useState } from 'react';
import BrandsListReducer, {
  INITIAL_STATE,
  updateAllAction,
  startLoadingAction,
  updateSearchAction,
} from './BrandsList.reducer';
import BrandsList from './BrandsList.component';
import API from '../../api';

const BrandsListContainer = () => {
  const [searchTimeout, setSearchTimeout] = useState(null);

  const [state, dispatch] = useReducer(BrandsListReducer, INITIAL_STATE);

  const fetchBrands = async (
    { page = state.page, search = state.search, sort = state.sort } = {},
    add = false
  ) => {
    dispatch(startLoadingAction());

    let brandsResponse = await API.listBrands({
      page,
      search,
      sort,
    });

    const brands = add
      ? state.brands.concat(brandsResponse.data)
      : brandsResponse.data;

    const totalPages = Math.ceil(brandsResponse.total / brandsResponse.limit);

    dispatch(
      updateAllAction({
        page,
        search,
        sort,
        brands,
        totalPages,
        isLoading: false,
        total: brandsResponse.total,
        lastResponse: brandsResponse,
      })
    );
    return brandsResponse;
  };

  useEffect(() => {
    fetchBrands();

    // eslint-disable-next-line
  }, []);

  const onSearch = ({ target: { value } }) => {
    dispatch(updateSearchAction(value));

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const newSearchTimeout = setTimeout(() => {
      fetchBrands({
        page: 1,
        search: value,
      });

      setSearchTimeout(null);
    }, 400);

    setSearchTimeout(newSearchTimeout);
  };

  const onLoadMore = () => {
    const nextPage = state.page + 1;
    fetchBrands({ page: nextPage }, true);
  };

  return <BrandsList {...state} onSearch={onSearch} onLoadMore={onLoadMore} />;
};

export default BrandsListContainer;
