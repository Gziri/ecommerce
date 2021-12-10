import React from "react";
import { Routes, Route, useParams } from "react-router";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  const props = useParams();
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path={`/`} element={<CollectionsOverview />} />
        <Route path={`:categoryId`} element={<CollectionPage ownProps={props}/> }  />
      </Routes>
    </div>
  );
};

export default ShopPage;
