import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import reportWebVitals from '../reportWebVitals';

import { MAP_COMPONENTS, META_TAGS_SELECTORS } from '../constants';

function Page() {
  const [content, setContent] = useState({});
  const { pathname } = useLocation();

  // removes '/' at the end of path
  const endpoint = `${pathname.replace(/\/$/, '')}.json`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, [pathname, endpoint]);

  // update head
  useEffect(() => {
    if (content.head) {
      // change title
      document.title = content.head.title;

      //remove all meta tags
      META_TAGS_SELECTORS.forEach((entry) => {
        document.querySelector(entry)?.remove();
      });

      // place new meta tags
      content.head.meta.forEach((entry) => {
        const meta = document.createElement('meta');
        for (const [key, value] of Object.entries(entry)) {
          // validate attribute
          if (key in meta) {
            meta.setAttribute(key, value);
          }
        }
        document.getElementsByTagName('head')[0].appendChild(meta);
      });
    }
  }, [content]);

  useEffect(() => {
    const handleVitals = (metric) => {
      if (metric.navigationType === 'navigate') {
        console.log('Web Vitals:', metric);
      }
    };

    const vitals = reportWebVitals(handleVitals);

    return () => {
      vitals.disconnect();
    };
  }, [pathname]);

  if (content.components) {
    return (
      <main>
        {content.components &&
          content.components.map((component, index) => {
            const Component = MAP_COMPONENTS[component.name];
            if (Component) {
              return <Component key={index} content={component.content} />;
            } else {
              return null;
            }
          })}
      </main>
    );
  }

  return null;
}

export default Page;
