import { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import { Center, Loader } from '@mantine/core';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { useAsync } from 'react-use';
import classes from './PDFViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

type PDFViewerProps = {
  template?: React.ReactElement;
  onUrlChange?: (url: string | null) => void;
  onRenderError?: (error: any) => void;
};

export const PDFViewer = ({ template, onUrlChange, onRenderError }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousRenderValue, setPreviousRenderValue] = useState<string | null>(null);

  const render = useAsync(async () => {
    if (!template) {
      return null;
    }

    const blob = await pdf(template).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [template]);

  const isFirstRendering = !previousRenderValue;
  const isLatestValueRendered = previousRenderValue === render.value;
  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  useEffect(() => onUrlChange?.(render.value || null), [render.value]);

  useEffect(() => onRenderError?.(render.error), [render.error]);

  return (
    <Center className={classes.wrapper}>
      {shouldShowPreviousDocument && previousRenderValue && (
        <Document
          key={previousRenderValue}
          className={classes.previousDocument}
          file={previousRenderValue}
          loading={<Loader />}
        >
          <Page
            loading={<Loader />}
            pageNumber={1}
            scale={1.3}
            width={300}
            key={currentPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      )}

      <Document
        key={render.value}
        // className={shouldShowPreviousDocument ? classes.renderingDocument : null}
        file={render.value}
        // onLoadSuccess={onDocumentLoad}
        loading={null}
      >
        <Page
          loading={null}
          pageNumber={1}
          scale={1.3}
          width={300}
          key={currentPage}
          onRenderSuccess={() => setPreviousRenderValue(render.value || null)}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </Center>
  );
};
