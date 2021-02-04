import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./preview.scss";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default PreviewCollection;
