import React from 'react';

import UpdateForm from './update-item';
import { Card, Button } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>
        {/* changed forEach to map */}
        {
          this.props.itemsList.map( (item, idx) =>
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.notes}</Card.Text>
                <UpdateForm item={item} handleUpdate={this.props.handleUpdate}/>
                <Button
                style={{ margin: '10px 0'}}
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
                >
                Delete Item
                </Button>
              </Card.Body>
            </Card>
          )
        }
      </section>
    );
  }
}

export default Items;
