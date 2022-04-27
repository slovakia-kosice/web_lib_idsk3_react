import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Navigation',
  component: Navigation
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Navigation> = (args) => {
  const [currentHref, setCurrentHref] = useState<string | null>('kalendar');

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCurrentHref(e.currentTarget.getAttribute('href'));
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    return false;
  };
  return (
    <div style={{ height: '100px' }}>
      <Navigation
        links={[
          { label: 'Správy', href: 'spravy', onClick: handleClick, alert: 5 },
          { label: 'Kalendár', href: 'kalendar', onClick: handleClick },
          { label: 'Notifikácie', href: 'notifikacie', onClick: handleClick },
          {
            label: 'Ďalšie nástroje',
            options: [{ label: 'Register rozhodnutí' }, { label: 'eFaktúry' }]
          }
        ]}
        currentHref={currentHref}
        {...args}
      />
    </div>
  );
};
