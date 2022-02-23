import React, { Fragment, useState } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
//import AppNavbar from './AppNavbar';
//import Footer from "./footer";

const FAQ = () => {
    const [isOpen, setIsOpen] = useState('');
    const [lists, setLists] = useState([
        {
            _id: 'id_abc',
            item_names: ['item 1', 'item 2', 'item 3'],
            list_name: 'List 2',
            author_name: 'Samantha Samson',
        },
        {
            _id: 'id_xyz',
            item_names: ['item 1', 'item 1', 'item 2', 'item 16'],
            list_name: 'List 1',
            author_name: 'John Johnson',
        },
    ]);
    const handleToggle = (id) => {
      if (isOpen === id) {
        setIsOpen("");
      } else {
        setIsOpen(id);
      }
    };
return (
 

    <Fragment>
        {lists.map((list) => (
            <Card key={list._id}>
                <CardHeader onClick={() => handleToggle(list._id)}>
                    <h4>{list.list_name}</h4>
                </CardHeader>
                <Collapse isOpen={isOpen === list._id }>
                    <CardBody>
                        <ul>
                            {list.item_names.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </CardBody>
                </Collapse>
            </Card>
        ))}
    </Fragment>
   
  
);
                            }
export default FAQ

