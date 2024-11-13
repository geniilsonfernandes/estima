import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconPlus } from '@tabler/icons-react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useBuilderStore } from '../../store';
import { ServiceForm } from '../ServiceForm/ServiceForm';
import classes from './ServiceList.module.css';

export function ServiceList() {
  const { services, reorderServices, addService } = useBuilderStore((state) => state);

  const items = services.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ServiceForm index={index} key={item.id} {...item} />
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        reorderServices(source.index, destination?.index || 0)
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      <Button
        onClick={() => addService({ id: randomId(), name: '', quantity: 0, price: 0 })}
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
