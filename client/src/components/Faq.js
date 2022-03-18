import React, { Fragment, useState } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Footer from "./Footer";
import Contact from './Contact'
const FAQ = () => {
    const [isOpen, setIsOpen] = useState('');
    const [lists, setLists] = useState([
        {
            _id: '1',
            item_names: ["We'll provide a breakfast bar with some juices, sandwitches in the morning but we highly encourage you to bring your own supplies or enjoy the food trucks that'll be available for you in the festival."],
            list_name: 'Food options at the camping',
        },
        {
            _id: '2',
            item_names: ["We are making sure to acomodate everyones dietary choices, therefore we'll be providing food options for many different dietary requirements."],
            list_name: 'Will vegetarian/vegan food options be provided during the festival?', 
        },
        {
            _id: '3',
            item_names : ["You can bring your own alcohol to the camping, but not to the festival. However, we make it our mission to ensure the supply during the festival in our bar stands."],
            list_name : "Can I bring my own alcohol to the festival?"
        },
        {
            _id: '4',
            item_names: ["Please bring your own sleeping bag, we'll provide the tent, additional rain cover (just in case) and foldable chairs (amount corresponds to the number of people the tent can accomodate)."],
            list_name: "I rented a tent, what will be provided along with the tent?"
        }
    ]);
    const handleToggle = (id) => {
      if (isOpen === id) {
        setIsOpen("");
      } else {
        setIsOpen(id);
      }
    };
return (
 <div className='question bg-light'> 
<AppNavbar />
<div className='content'>
    <Fragment>
        {lists.map((list, key) => (
            <Card className="col-md-8 m-1 ml-md-4 mt-2 justify-content-center " key={list._id}>
                <CardHeader onClick={() => handleToggle(list._id)}>
                    <h4>{list.list_name}</h4>
                </CardHeader>
                <Collapse  isOpen={isOpen === list._id }>
                    <CardBody>
                        <ul>
                            {list.item_names.map((item, key) => (
                                <li key={key}>{item}</li>
                            ))}
                        </ul>
                    </CardBody>
                </Collapse>
            </Card>
        ))}
      
    </Fragment>
    <h3 className='contact pb-5'>Contact Us</h3>
    <Contact />
   </div>
   <Footer />
  </div>
);
                            }
export default FAQ

