import { extractHeadingsFromMain, pickHeadingIds } from '@utils/client';
import { useEffect, useState } from 'react';
import LinkToHeading from './LinkToHeading';
import styles from './TableOfContents.module.css';
import type { Heading } from '@utils/client';
import type { FC } from 'react';

const TableOfContents: FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const [readingSectionId, setReadingSectionId] = useState<string | null>(null);

  useEffect(() => {
    setHeadings(extractHeadingsFromMain());
  }, []);

  useEffect(() => {
    const headingIds = pickHeadingIds(headings);
    const headingElements = new Map<string, HTMLElement | null>();

    for (const headingId of headingIds) {
      const heading = document.getElementById(headingId);

      headingElements.set(headingId, heading);
    }

    const checkReadingSection = () => {
      let readingSection = null;

      for (const headingId of headingIds) {
        const heading = headingElements.get(headingId);

        if (heading == null) {
          continue;
        }

        if (heading.offsetTop <= window.scrollY) {
          readingSection = headingId;
        }
      }

      if (readingSection === null) {
        readingSection = headingIds[0];
      }

      setReadingSectionId(readingSection);
    };
    checkReadingSection();

    const handleScroll = () => {
      checkReadingSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <LinkToHeading key={heading.id} heading={heading} readingHeadingId={readingSectionId} />
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
