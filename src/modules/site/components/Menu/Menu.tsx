import { Link } from 'react-router-dom';
import { Button, Flex } from '@mantine/core';
import { Logo } from '@/shared/components/Logo/Logo';
import routes from '@/shared/constant/routes';

export const Menu = () => {
  return (
    <Flex py="lg" align="center" justify="space-between">
      <Link to={routes.home}>
        <Logo />
      </Link>
      <Flex align="center" gap="sm">
        <Button variant="transparent" size="sm">
          Contato
        </Button>
        <Button variant="light" size="sm">
          Como funciona
        </Button>
      </Flex>
    </Flex>
  );
};
