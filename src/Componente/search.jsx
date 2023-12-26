import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = ({ searchResults, setSearchResults, produse }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    const filteredResults = produse.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <Form className="d-flex" style={{ marginLeft: "10px" }}>
        <Form.Control
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cauta produs"
          className="me-2"
          aria-label="Search"
        />
        <Button
          style={{ marginRight: "10px" }}
          variant="outline-success"
          onClick={handleSearch}
        >
          Cauta
        </Button>
      </Form>
    </>
  );
};

export default Search;
