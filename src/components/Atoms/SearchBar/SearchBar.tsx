import React, { useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../svgIcons/Actions';
import IconLink from '../IconLink';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel?: string | ReactNode;
  buttonAriaLabel?: string;
  buttonDisabled?: boolean;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  searchbarSize?: 'large' | 'medium' | 'small';
  openable?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  error?: boolean;
  errorMsg?: string;
  label?: string;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      buttonLabel,
      buttonAriaLabel,
      buttonDisabled,
      placeholder,
      searchbarSize = 'large',
      openable = false,
      fullWidth = false,
      containerClassName,
      wrapperClassName,
      className,
      buttonOnClick,
      id,
      style,
      error,
      errorMsg,
      label,
      ...props
    }: SearchBarProps,
    ref
  ) => {
    const [searchbarOpened, setSearchbarOpened] = useState<boolean>(false);

    const inputClasses: string = classNames(
      'searchbar',
      {
        'searchbar--large': searchbarSize === 'large',
        'searchbar--medium': searchbarSize === 'medium',
        'searchbar--small': searchbarSize === 'small',
        'searchbar--w-full': fullWidth,
        'searchbar--error': error
      },
      className
    );
    const buttonClasses: string = classNames('searchbar__button', {
      'searchbar__button--large': searchbarSize === 'large',
      'searchbar__button--medium': searchbarSize === 'medium',
      'searchbar__button--small': searchbarSize === 'small'
    });
    const iconClasses: string = classNames({
      'searchbar__icon--large': searchbarSize === 'large',
      'searchbar__icon--medium': searchbarSize === 'medium',
      'searchbar__icon--small': searchbarSize === 'small'
    });
    const contentClasses = classNames(
      {
        relative: fullWidth,
        searchbar__wrapper: !fullWidth,
        hidden: openable && !searchbarOpened
      },
      wrapperClassName
    );
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div className={containerClassName}>
        {openable && (
          <IconLink
            children={<SearchIcon />}
            onClick={() => setSearchbarOpened((p) => !p)}
            className={searchbarOpened ? 'hidden' : ''}
          />
        )}
        <div className={contentClasses}>
          <label className="sr-only" htmlFor={id ? id + '-input' : undefined}>
            {label}
          </label>
          <input
            className={inputClasses}
            placeholder={placeholder}
            id={id ? id + '-input' : undefined}
            ref={ref}
            {...props}
          />
          <button
            onClick={buttonOnClick}
            className={buttonClasses}
            disabled={buttonDisabled || error}
            ref={buttonRef}
            id={id ? id + '-button' : undefined}
            aria-label={buttonAriaLabel}
          >
            <SearchIcon className={iconClasses} />
            {buttonLabel}
          </button>
        </div>
        {error && !!errorMsg && <p className="input__caption--error">{errorMsg}</p>}
      </div>
    );
  }
);

export default SearchBar;
