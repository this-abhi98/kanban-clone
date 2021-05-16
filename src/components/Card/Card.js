import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({

  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    color:'white',
  },
}));

export default function Card({ card, index, listTitle }) {
  const classes = useStyle();
  let cardColor='';
  switch(listTitle) {
    case 'Todo':
      cardColor='grey'
      break;
    case 'Doing':
      cardColor='blue'
      break;
    case 'Done':
        cardColor='green'
        break;
    default:
      cardColor='red'
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card}  style={{backgroundColor:cardColor}}>
          <h4>{card.title} </h4>
           {card.id}</Paper>
        </div>
      )}
    </Draggable>
  );
}
