import React from 'react';
import PropTypes from 'prop-types';
import CommonTable from '../common/CommonTable';
import { VEHICLES_TABLE_CONFIG } from './VehiclesList.constants';

import './VehiclesList.css';

const VehiclesList = ({
  isLoading,
  vehicles,
  total,
  page,
  totalPages,
  search,
  onSearch,
  onLoadMore,
}) => (
  <div className="VehiclesList VehiclesList__Container">
    <CommonTable
      rows={vehicles}
      tableConfig={VEHICLES_TABLE_CONFIG}
      isLoading={isLoading}
      total={total}
      search={search}
      onSearch={onSearch}
      onLoadMore={onLoadMore && page < totalPages ? onLoadMore : null}
    />
  </div>
);

VehiclesList.defaultProps = {
  isLoading: false,
  total: 0,
  page: 0,
  totalPages: 0,
  search: '',
  onSearch: null,
  onLoadMore: null,
  vehicles: [],
};

VehiclesList.propTypes = {
  isLoading: PropTypes.bool,
  total: PropTypes.number,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  search: PropTypes.string,
  onSearch: PropTypes.func,
  onLoadMore: PropTypes.func,
  vehicles: PropTypes.arrayOf(PropTypes.object),
};

export default VehiclesList;
