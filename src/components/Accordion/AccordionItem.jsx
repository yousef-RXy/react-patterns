import React, { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      'AccordionItem-related components must be wrapped by <Accordion.Item>.'
    );
  }
  return ctx;
}

function AccordionItem({ id, children, className }) {
  return (
    <li className={className}>
      <AccordionItemContext.Provider value={id}>
        {children}
      </AccordionItemContext.Provider>
    </li>
  );
}

export default AccordionItem;
