import React from 'react';

import { CardWrapper, CardWrapperProps } from '../../Atoms';

export interface EventCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  months?: [string, ...string[]] & { length: 12 };
}

const defaultMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Máj',
  'Jún',
  'Júl',
  'Aug',
  'Sep',
  'Okt',
  'Nov',
  'Dec'
];

const EventCard = ({
  title,
  date,
  color,
  highlighted,
  children,
  months,
  ...props
}: EventCardProps) => {
  const monthsShortcuts = !!months ? months : defaultMonths;

  const dateObject = new Date(date);

  return (
    <CardWrapper
      color={color}
      highlighted={highlighted}
      innerClassNames="px-4 py-5 grid grid-cols-[auto_1fr] gap-x-4"
      {...props}
    >
      <div className="text-center relative -top-1.5">
        <p className="subtitle font-bold">{dateObject.getDate()}</p>
        <p className="caption text-neutral-800">{monthsShortcuts[dateObject.getMonth()]}</p>
      </div>
      <div>
        <div className="text-body-1 font-bold">{title}</div>
        {children}
      </div>
    </CardWrapper>
  );
};

export default EventCard;
