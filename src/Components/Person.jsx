import React from 'react'
import Card from 'react-bootstrap/Card';


function Person(props) {
    let fullName = props.person.fullName
    let company = props.person.company
    let devLevel = props.person.devLevel

      return (
        <Card className='col-2 m-2 text-sm p-3'>
          
            <Card.Subtitle style={{borderBottom: "1px solid black"}}>{props.person.devLevel}</Card.Subtitle>
            <Card.Title
              className="mb-3 mt-3"
              style={{ color: props.person.favoriteColor }}
              >
                {props.person.fullName}
              </Card.Title>
            <Card.Subtitle>{props.person.company}</Card.Subtitle>
            <Card.Text>
                {props.person.devLevel}
            </Card.Text>
        </Card>
      );
    }

    export default function Person(props);