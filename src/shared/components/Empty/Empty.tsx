import { IconTimelineEventExclamation } from '@tabler/icons-react';
import { Button, Group, Stack, StackProps, Text, ThemeIcon, Title } from '@mantine/core';

type EmptyProps = {
  title?: string;
  description?: string;

  onleftButtonClick?: () => void;
  textLeftButton?: string;
  onrightButtonClick?: () => void;
  textRightButton?: string;
} & StackProps;

export const Empty = ({
  description = 'Não encontramos nenhum resultado para sua busca.',
  title = 'Não há nada aqui',
  onleftButtonClick,
  onrightButtonClick,
  textLeftButton = 'Limpar Filtros',
  textRightButton = 'Criar',
  ...props
}: EmptyProps) => {
  return (
    <Stack align="center" justify="center" {...props}>
      <ThemeIcon color="estimou.9" size={100} radius="xl">
        <IconTimelineEventExclamation stroke={1.5} size={50} />
      </ThemeIcon>
      <Title order={3}>{title}</Title>
      <Text c="dimmed">{description}</Text>

      <Group gap="xs" mt="md">
        <Button
          variant="outline"
          display={onleftButtonClick ? 'block' : 'none'}
          onClick={onleftButtonClick}
          disabled={!onleftButtonClick}
        >
          {textLeftButton}
        </Button>
        <Button
          variant="filled"
          display={onrightButtonClick ? 'block' : 'none'}
          onClick={onrightButtonClick}
          disabled={!onrightButtonClick}
        >
          {textRightButton}
        </Button>
      </Group>
    </Stack>
  );
};
