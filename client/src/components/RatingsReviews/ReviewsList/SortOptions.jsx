import React from 'react';
import changeReviewSort from '../../../actions/RatingsReviews/reviewsList/reviewSort.js';

const SortOptions = ({ currentProductId, reviewSort, handleSortSelect }) => {

  const handleChange = (e) => {
    handleSortSelect(currentProductId, e.target.value);
  };

  return (
    <form>
      <select name='sortBy' onChange={e => handleChange(e)} value={reviewSort}>
        {['relevance', 'helpful', 'newest'].map((sortBy, i) => {
          return <option key={i} value={sortBy}>{sortBy}</option>;
        })}
      </select>
    </form>
  );
};

export default SortOptions;