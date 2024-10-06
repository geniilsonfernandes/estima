import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconPlus } from '@tabler/icons-react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { randomId, useListState } from '@mantine/hooks';
import classes from './DndList.module.css';

const data = [
  { position: 1, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 2, symbol: 'H', name: 'Hydrogen' },
  {
    position: 3,
    symbol: 'O',
    name: 'Oxygen',
    mass: 15.999,
  },
];

export function DndList() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          ...
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button
        onClick={() =>
          handlers.append({
            name: '1',
            symbol: randomId(),
            mass: 1,
            position: state.length + 1,
          })
        }
        variant="transparent"
        my="lg"
        bg="gray.2"
        w="100%"
        leftSection={<IconPlus size={14} />}
      >
        Adicionar item
      </Button>
    </DragDropContext>
  );
}
