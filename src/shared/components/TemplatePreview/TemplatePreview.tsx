import { Center } from '@mantine/core';
import VladTamplate from '@/shared/templates/Vlad.tamplate';
import classes from './TemplatePreview.module.css';

type TemplatePreviewProps = {
  label: string;
};
export const TemplatePreview = ({ label }: TemplatePreviewProps) => {
  return (
    <Center bg="white" className={classes.wrapper}>
      <VladTamplate title={label} products={[]} />
    </Center>
  );
};
