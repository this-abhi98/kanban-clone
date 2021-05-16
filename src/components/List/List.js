import React, {useState} from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card/Card';
import InputContainer from '../Input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}));
export default function List({ list, index }) {

  const [sortedType, setSortedType] = useState('none')
  const classes = useStyle();
function onClickSort() {
    setSortedType('title');
    if(sortedType!=="title_ascending"){
      setSortedType('title_ascending');
      list.cards.sort(function(a, b) {
        var titleA = a.title.toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }      
        // names must be equal
        return 0;
      });
    }
    else{
      setSortedType('title_descending');
      list.cards.sort(function(a, b) {
        var titleA = a.title.toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }
}

  return (
          <Paper className={classes.root}>
            <CssBaseline />
            <Title title={list.title} onClickSort={onClickSort} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} listTitle={list.title}/>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <InputContainer listId={list.id} type="card" />
          </Paper>)
}
