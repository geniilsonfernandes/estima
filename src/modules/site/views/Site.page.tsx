import { Container } from '@mantine/core';
import { FaqSimple } from '@/modules/site/components/FaqSimple/FaqSimple';
import { FeatureApi } from '@/modules/site/components/Features/FeatureApi';
import { Highlights } from '@/modules/site/components/Features/Highlights';
import { Showcase } from '@/modules/site/components/Features/Showcase/Showcase';
import Footer from '@/modules/site/components/Footer/Footer';
import { Header } from '@/modules/site/components/Header/Header';

export const SitePage = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Container pos="relative">
        <Highlights />
        <FeatureApi />
        <FaqSimple />
      </Container>
      <Footer />
    </>
  );
};
