import React, { ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import classNames from 'classnames';

import { CloseIcon } from '../../../svgIcons/Navigation';

export interface ModalSideBarProps extends React.AllHTMLAttributes<HTMLDivElement> {
  opened: boolean;
  toggleOpened: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  footer?: ReactNode | undefined;
  id?: string;
  closeButtonAriaLabel?: string;
}

const ModalSideBar = ({
  opened,
  toggleOpened,
  heading,
  footer,
  children,
  className,
  id,
  closeButtonAriaLabel,
  ...props
}: ModalSideBarProps) => {
  const shadowClasses = classNames('idsk-modal-sidebar__shadow', {
    'idsk-modal-sidebar__shadow--hidden': !opened
  });
  const sidebarClasses = classNames(
    'idsk-modal-sidebar',
    {
      'idsk-modal-sidebar--hidden': !opened
    },
    className
  );

  return (
    <FocusLock>
      <div
        className={shadowClasses}
        onClick={() => toggleOpened(false)}
        data-testid="sidebar-shadow"
      />
      <div className={sidebarClasses} id={id} {...props}>
        <div className="idsk-modal-sidebar__top-bar" />
        <div className="idsk-modal-sidebar__header">
          <h3>{heading}</h3>
          <button
            className="idsk-modal-sidebar__close-button"
            onClick={() => toggleOpened(false)}
            id={id ? id + '-close-button' : undefined}
            aria-label={closeButtonAriaLabel}
          >
            <CloseIcon className="idsk-modal-sidebar__close-icon" />
          </button>
        </div>
        <div className="idsk-modal-sidebar__body">{children}</div>
        <div className="flex-auto" />
        {!!footer && <div className="idsk-modal-sidebar__footer">{footer}</div>}
      </div>
    </FocusLock>
  );
};

export default ModalSideBar;
