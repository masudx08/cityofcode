import { AcUnit, Newspaper, Opacity, Refresh, ShoppingCart } from '@mui/icons-material'
import React from 'react'

function News() {
  return (
    <div className="dashboardTop__rightNewsContainer">
    <div className="newsContainer__top">
      <h4>
        <span>News</span>
        <Newspaper />
      </h4>
      <Refresh />
    </div>
    <div className="newsContainer__item">
      <Opacity />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
    <div className="newsContainer__item">
      <AcUnit />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
    <div className="newsContainer__item">
      <ShoppingCart />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
  </div>
  )
}

export default News