import { Box, Flex, Stack } from '@mantine/core';
import { Logo } from '@/shared/components/Logo/Logo';
import { FormShowcase } from './FormShowcase';
import { FormTitle } from './FormTitle';
import { Preview } from './Preview';
import classes from './Showcase.module.css';

export const Showcase = () => {
  return (
    <Flex justify="center" align="center" pos="relative">
      <Flex className={classes.wrapper}>
        <Stack>
          <Box className={classes.budgetForm}>
            <Box className={classes.budgetFormTitle}>
              <FormTitle />
              <Box bg="white" className={classes.logo}>
                <Logo />
              </Box>
            </Box>
            <FormShowcase />
          </Box>
        </Stack>
        <Flex className={classes.preview}>
          <Preview />
        </Flex>
      </Flex>
    </Flex>
  );
};
