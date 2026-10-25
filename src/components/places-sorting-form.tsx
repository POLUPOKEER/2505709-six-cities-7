import { useState } from 'react';

export type SortType =
  | 'popular'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'top-rated';

type PlacesSortingFormProps = {
  currentSort: SortType;
  onSortChange: (sortType: SortType) => void;
};


function PlacesSortingForm({
  currentSort,
  onSortChange,
}: PlacesSortingFormProps) {

  const [isVisible, setIsvisible] = useState(true);


  return (
    <form className="places__sorting">
      <div onClick={() => setIsvisible(!isVisible)}>
        <span className="places__sorting-caption">
          Sort by
        </span>

        <span className="places__sorting-type" tabIndex={0}>
          {currentSort}
        </span>
      </div>

      {isVisible &&
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortChange('popular');
              setIsvisible(!isVisible);
            }}
          >
            Popular
          </li>

          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortChange('price-low-to-high');
              setIsvisible(!isVisible);
            }}
          >
            Price: low to high
          </li>

          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortChange('price-high-to-low');
              setIsvisible(!isVisible);
            }}
          >
            Price: high to low
          </li>

          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortChange('top-rated');
              setIsvisible(!isVisible);
            }}
          >
            Top rated first
          </li>
        </ul>}

    </form >
  );
}
export default PlacesSortingForm;

