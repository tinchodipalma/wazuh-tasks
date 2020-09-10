import React, { useReducer, useEffect, useState } from 'react';
import VehiclesListReducer, {
  INITIAL_STATE,
  updateAllAction,
  startLoadingAction,
  updateSearchAction,
} from './VehiclesList.reducer';
import VehiclesList from './VehiclesList.component';
import API from '../../api';

const VehiclesListContainer = () => {
  const [searchTimeout, setSearchTimeout] = useState(null);

  const [state, dispatch] = useReducer(VehiclesListReducer, INITIAL_STATE);

  const fetchVehicles = async (
    { page = state.page, search = state.search, sort = state.sort } = {},
    add = false
  ) => {
    dispatch(startLoadingAction());

    let vehiclesResponse = await API.listVehicles({
      page,
      search,
      sort,
    });

    const vehicles = add
      ? state.vehicles.concat(vehiclesResponse.data)
      : vehiclesResponse.data;

    const totalPages = Math.ceil(
      vehiclesResponse.total / vehiclesResponse.limit
    );

    dispatch(
      updateAllAction({
        page,
        search,
        sort,
        vehicles,
        totalPages,
        isLoading: false,
        total: vehiclesResponse.total,
        lastResponse: vehiclesResponse,
      })
    );
    return vehiclesResponse;
  };

  useEffect(() => {
    fetchVehicles();

    // eslint-disable-next-line
  }, []);

  const onSearch = ({ target: { value } }) => {
    dispatch(updateSearchAction(value));

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const newSearchTimeout = setTimeout(() => {
      fetchVehicles({
        page: 1,
        search: value,
      });

      setSearchTimeout(null);
    }, 400);

    setSearchTimeout(newSearchTimeout);
  };

  const onLoadMore = () => {
    const nextPage = state.page + 1;
    fetchVehicles({ page: nextPage }, true);
  };

  return (
    <VehiclesList {...state} onSearch={onSearch} onLoadMore={onLoadMore} />
  );
};

export default VehiclesListContainer;
