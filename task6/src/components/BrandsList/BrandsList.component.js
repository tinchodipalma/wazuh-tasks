import React from 'react';
import PropTypes from 'prop-types';
import CommonTable from '../common/CommonTable';
import { BRANDS_TABLE_CONFIG } from './BrandsList.constants';

import './BrandsList.css';

const BrandsList = ({
  isLoading,
  brands,
  total,
  page,
  totalPages,
  search,
  onSearch,
  onLoadMore,
}) => (
  <div className="BrandsList BrandsList__Container">
    <CommonTable
      rows={brands}
      tableConfig={BRANDS_TABLE_CONFIG}
      isLoading={isLoading}
      total={total}
      search={search}
      onSearch={onSearch}
      onLoadMore={onLoadMore && page < totalPages ? onLoadMore : null}
    />
  </div>
);

BrandsList.defaultProps = {
  isLoading: false,
  total: 0,
  page: 0,
  totalPages: 0,
  search: '',
  onSearch: null,
  onLoadMore: null,
  brands: [],
};

BrandsList.propTypes = {
  isLoading: PropTypes.bool,
  total: PropTypes.number,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  search: PropTypes.string,
  onSearch: PropTypes.func,
  onLoadMore: PropTypes.func,
  brands: PropTypes.arrayOf(PropTypes.object),
};

export default BrandsList;
