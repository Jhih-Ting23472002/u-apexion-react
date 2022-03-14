import React from 'react';
import './ProductsList.scss';
import { Form, FormControl, Button } from 'react-bootstrap';

function ProductsList() {
  return (
    <article>
      <div className="pr-list">
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </article>
  );
}
export default ProductsList;
