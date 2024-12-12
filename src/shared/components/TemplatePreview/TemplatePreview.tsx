import { Center } from '@mantine/core';
import classes from './TemplatePreview.module.css';

type TemplatePreviewProps = {
  label: string;
};
export const TemplatePreview = ({ label }: TemplatePreviewProps) => {
  return (
    <Center bg="white" className={classes.wrapper}>
      <span>{label}</span>
    </Center>
  );
};
