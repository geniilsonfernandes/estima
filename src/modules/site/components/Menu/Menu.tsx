import { Link } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { Logo } from '@/shared/components/Logo/Logo';
import routes from '@/shared/constant/routes';

export const Menu = () => {
  return (
    <Flex py="lg" align="center" justify="center">
      <Link to={routes.home}>
        <Logo />
      </Link>
    </Flex>
  );
};
