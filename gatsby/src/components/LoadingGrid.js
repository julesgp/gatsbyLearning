import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles>
          <p>
            <span className="mark">Loading...</span>
          </p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89ulbPQAJIwNfoHIlQQAAAABJRU5ErkJggg=="
            className="loading"
            alt="Loading"
            width="500"
            height="400"
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}