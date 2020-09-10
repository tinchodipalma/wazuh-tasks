const START_LOADING = 'VehiclesList/START_LOADING';
const FINISH_LOADING = 'VehiclesList/FINISH_LOADING';
const UPDATE_RESPONSE = 'VehiclesList/UPDATE_RESPONSE';
const UPDATE_SEARCH = 'VehiclesList/UPDATE_SEARCH';
const UPDATE_SORT = 'VehiclesList/UPDATE_SORT';
const UPDATE_TOTAL = 'VehiclesList/UPDATE_TOTAL';
const UPDATE_PAGE = 'VehiclesList/UPDATE_PAGE';
const UPDATE_ALL = 'VehiclesList/UPDATE_ALL';

export const startLoadingAction = () => ({ type: START_LOADING });
export const finishLoadingAction = () => ({ type: FINISH_LOADING });
export const updateResponseAction = (payload) => ({
  type: UPDATE_RESPONSE,
  payload,
});
export const updateSearchAction = (payload) => ({
  type: UPDATE_SEARCH,
  payload,
});
export const updateSortAction = (payload) => ({ type: UPDATE_SORT, payload });
export const updatePageAction = (payload) => ({ type: UPDATE_PAGE, payload });
export const updateTotalAction = (payload) => ({ type: UPDATE_TOTAL, payload });
export const updateAllAction = (payload) => ({ type: UPDATE_ALL, payload });

export const INITIAL_STATE = {
  isLoading: false,
  vehicles: [],
  page: 1,
  total: 0,
  totalPages: 0,
  search: '',
  sort: '-_id',
  lastResponse: {},
};

const VehiclesListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_RESPONSE:
      return {
        ...state,
        lastResponse: action.payload,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case UPDATE_ALL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default VehiclesListReducer;
