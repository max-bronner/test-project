const reportWebVitals = (onPerfEntry) => {
  let observers = [];

  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const handleMetric = (metric) => {
        metric.navigationType = performance.getEntriesByType('navigation')[0]?.type || 'navigate';
        onPerfEntry(metric);
      };

      observers.push(getCLS(handleMetric));
      observers.push(getFID(handleMetric));
      observers.push(getFCP(handleMetric));
      observers.push(getLCP(handleMetric));
      observers.push(getTTFB(handleMetric));
    });
  }

  return {
    disconnect: () => {
      observers.forEach((observer) => observer.disconnect && observer.disconnect());
      observers = [];
    },
  };
};

export default reportWebVitals;
