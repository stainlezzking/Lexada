"use client";

import AdminListing from "@/components/admin-listing";
import Spinner from "@/components/spinner";
import { useState } from "react";

const Client = ({ data }) => {
  const [deleting, setDeleting] = useState(false);
  const handleSetDelete = (value) => {
    setDeleting(value);
  };
  return (
    <>
      {deleting && <Spinner />}
      {data.map((property, i) => (
        <div className="col-span-1" key={i}>
          <AdminListing
            createdAt={property.createdAt}
            src={property.images[0].url}
            id={property.id}
            amount={Number(property.price)}
            title={property.title}
            handleSetDelete={handleSetDelete}
          />
        </div>
      ))}
    </>
  );
};

export default Client;
