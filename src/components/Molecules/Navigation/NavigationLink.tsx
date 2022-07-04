import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';
import { NavigationLinkOptionProps } from './NavigationLinkOption';

export interface NavigationLinkProps extends NavigationLinkOptionProps {
  alert?: number;
  selected?: boolean;
  children?: ReactElement<NavigationLinkOptionProps> | ReactElement<NavigationLinkOptionProps>[];
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ label, href, onClick, alert, selected, linkElement, children }, ref) => {
    if (!!children) {
      return (
        <DropDown
          dropDownTitle={label}
          arrowIcon={<ExpandMoreIcon className="navigation__arrow-icon" />}
          className="navigation__dropdown"
          optionClassName="navigation__dropdown-options"
        >
          {children}
        </DropDown>
      );
    }

    const linkClasses = classNames('navigation__link', {
      'navigation__link--clicked': selected
    });

    return (
      <span className={linkClasses}>
        {!!linkElement ? (
          linkElement
        ) : (
          <a ref={ref} href={href} onClick={onClick}>
            {label}
          </a>
        )}
        {!!alert && <span className="navigation__link-alert">{alert}</span>}
      </span>
    );
  }
);

export default NavigationLink;
