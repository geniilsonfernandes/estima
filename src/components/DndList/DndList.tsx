import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Button, Flex, Grid, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { Input } from '../Input';
import classes from './DndList.module.css';

const data = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
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
          <Grid w="100%">
            <Grid.Col span={12}>
              <Flex justify="space-between" align="center">
                <Text c="dark.2" fz="xl" fw={700} fs="italic">
                  #{index + 1}
                </Text>
                <ActionIcon
                  variant="outline"
                  bg="red.4"
                  size="xl"
                  color="white"
                  onClick={() => handlers.remove(index)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Input label="Produto / serviço" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Input label="Quantidade" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Input label="Valor unitário (R$)" leftSection="R$" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Input label="Total (R$)" />
            </Grid.Col>
          </Grid>
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
            symbol: '1',
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
