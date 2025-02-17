import React, { HTMLProps, forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input';
import { DateRangeIcon } from '@/svgIcons';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import { format, setDate, setMonth, setYear } from 'date-fns';
import { useRifm } from 'rifm';
import { Tooltip } from '@/components';

export interface DatePickerCustomInputProps extends HTMLProps<HTMLButtonElement> {
  opened: boolean;
  tooltip?: string;
}

export interface DateInputProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  id?: string;
  error?: boolean;
  errorMsg?: string;
  errorMessageId?: string;
  label?: string;
  optionalText?: string;
  caption?: string;
  subtitle?: string;
  disabled?: boolean;
  hideDay?: boolean;
  hideMonth?: boolean;
  hideYear?: boolean;
  dayLabel?: string;
  monthLabel?: string;
  yearLabel?: string;
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  datePickerLabel?: string;
  datePickerProps?: DatePickerProps;
  datePickerTooltip?: string;
  inputLabelsSrOnly?: boolean;
  inputClasses?: string;
  initialDate?: Date | null | undefined;
  refreshDate?: boolean;
  minDateToday?: boolean;
  maxDateToday?: boolean;
  inclusive?: boolean;
  mandatory?: boolean;
  onValueUpdate?: (value: string) => void;
  onRevalidation?: (hasError: boolean) => void;
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      id,
      error,
      errorMsg,
      errorMessageId,
      label,
      optionalText,
      subtitle,
      caption,
      disabled,
      inputLabelsSrOnly = false,
      inputClasses,
      hideDay = false,
      hideMonth = false,
      hideYear = false,
      dayLabel,
      monthLabel,
      yearLabel,
      dayPlaceholder,
      monthPlaceholder,
      yearPlaceholder,
      datePickerLabel,
      datePickerProps,
      datePickerTooltip,
      initialDate,
      refreshDate = true,
      minDateToday = false,
      maxDateToday = false,
      inclusive = false,
      mandatory = false,
      onValueUpdate,
      onRevalidation,
      ...props
    },
    ref
  ) => {
    const dateStringFormat = 'yyyy-MM-dd';
    const dayRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    const [startDate, setStartDate] = useState(initialDate ?? new Date());
    const [day, setInputDay] = useState(initialDate ? format(initialDate, 'dd') : '');
    const [month, setInputMonth] = useState(initialDate ? format(initialDate, 'MM') : '');
    const [year, setInputYear] = useState(initialDate ? format(initialDate, 'yyyy') : '');
    const [open, setOpen] = useState(false);
    const dateString = `${year}-${month}-${day}`;
    const idForAria: string = errorMessageId || uuidv4();

    const numberFormat = (str: string) => {
      return str.replace(/[^\d]+/gi, '');
    };

    useEffect(() => {
      setStartDate(initialDate ?? new Date());
      setInputDay(initialDate ? format(initialDate, 'dd') : '');
      setInputMonth(initialDate ? format(initialDate, 'MM') : '');
      setInputYear(initialDate ? format(initialDate, 'yyyy') : '');
    }, [initialDate]);

    const setRef = (newRef: React.RefObject<HTMLInputElement | null>) => {
      if (ref) {
        return ref;
      }
      return newRef;
    };

    const handleNewDate = (newDate: Date, formattedDateString: string) => {
      setStartDate(newDate);
      if (!!onValueUpdate && !disabled) {
        if (formattedDateString.length == 10) {
          onValueUpdate(format(newDate, dateStringFormat));
        } else if (formattedDateString == '--') {
          onValueUpdate('');
        }
      }
    };

    const addDay = () => {
      if (isNaN(Number(day))) return;
      const newDate = setDate(startDate, Number(day));
      if (day == '') {
        handleNewDate(setDate(startDate, Number(new Date().getDate())), dateString);
      } else {
        handleNewDate(newDate, dateString);
      }
    };

    const dayInputMask = useRifm({
      value: day,
      onChange: setInputDay,
      format: numberFormat
    });

    const addMonth = () => {
      if (isNaN(Number(month))) return;
      const newDate = setMonth(startDate, Number(month) - 1);
      if (month == '') {
        handleNewDate(setMonth(startDate, Number(new Date().getMonth())), dateString);
      } else {
        handleNewDate(newDate, dateString);
      }
    };

    const monthInputMask = useRifm({
      value: month,
      onChange: setInputMonth,
      format: numberFormat
    });
    const addYear = () => {
      if (isNaN(Number(year))) return;
      const newDate = setYear(startDate, Number(year));
      if (dateString == '--' || year == '') {
        handleNewDate(setYear(new Date(), Number(new Date().getFullYear())), dateString);
      }
      if (year == '') {
        handleNewDate(setYear(startDate, Number(new Date().getFullYear())), dateString);
      } else {
        handleNewDate(newDate, dateString);
      }
    };

    const yearInputMask = useRifm({
      value: year,
      onChange: setInputYear,
      format: numberFormat
    });

    const formatInputLength = () => {
      if (day.length == 1) {
        setInputDay('0' + day);
      }
      if (month.length == 1) {
        setInputMonth('0' + month);
      }
    };

    const handleDatepickerChange = (date: Date | null) => {
      if (!date) return;

      setInputDay(format(date, 'dd'));
      setInputMonth(format(date, 'MM'));
      setInputYear(format(date, 'yyyy'));
      handleNewDate(date, format(date, dateStringFormat));
    };

    const validation: boolean =
      (isNaN(Date.parse(dateString)) && dateString !== '--') ||
      new Date(dateString).toDateString().includes(day) === false ||
      ((inclusive
        ? new Date().toISOString().slice(0, 10) >= dateString
        : new Date().toISOString().slice(0, 10) > dateString) &&
        dateString !== '--' &&
        minDateToday) ||
      ((inclusive
        ? new Date().toISOString().slice(0, 10) <= dateString
        : new Date().toISOString().slice(0, 10) < dateString) &&
        dateString !== '--' &&
        maxDateToday) ||
      !!error;

    useEffect(() => {
      if (onRevalidation) {
        onRevalidation(validation);
      }
    }, [onRevalidation, validation]);

    const datePickerClasses: string = cn('idsk-date-input__date-picker', {
      'idsk-date-input__date-picker': day == '' || month == '' || year == '',
      'idsk-date-input__date-picker--open':
        ((day != '' && month != '' && year != '') || open) && !disabled
    });

    const dateInputWrapperClasses: string = cn('idsk-date-input__wrapper', {
      'idsk-input__wrapper--error': validation,
      'idsk-input__wrapper--disabled': disabled
    });

    const allInputClasses: string = cn(
      { input: !isNaN(Date.parse(dateString)) && dateString == '--' },
      {
        'idsk-input--error': validation
      },
      inputClasses
    );
    useEffect(() => {
      const handleRefresh = (refreshing: boolean) => {
        if (!refreshing) {
          setInputDay('');
          setInputMonth('');
          setInputYear('');
        }
      };
      handleRefresh(refreshDate);
    }, [refreshDate]);

    const DatePickerCustomInput = forwardRef<HTMLButtonElement, DatePickerCustomInputProps>(
      ({ onClick, tooltip, opened }, pickerRef) => {
        const btn = (
          <button
            className={datePickerClasses}
            aria-label={datePickerLabel}
            onClick={onClick}
            ref={pickerRef}
          >
            <DateRangeIcon className="idsk-date-input__date-range" />
          </button>
        );
        return (
          <>
            {!!tooltip && !opened ? (
              <Tooltip tooltip={tooltip} isInstructive>
                {btn}
              </Tooltip>
            ) : (
              btn
            )}
          </>
        );
      }
    );

    DatePickerCustomInput.displayName = 'DatePickerCustomInput';

    return (
      <fieldset className="idsk-date-input" id={id} {...props}>
        <legend className="idsk-input__label">
          {label}
          {optionalText && <span className="idsk-input__label--optional"> {optionalText}</span>}
          {mandatory && <span className="idsk-input__label--mandatory"> *</span>}
        </legend>
        {!!subtitle && <p className="idsk-input__subtitle">{subtitle}</p>}
        <div className={dateInputWrapperClasses}>
          {!hideDay && (
            <Input
              ref={setRef(dayRef)}
              id={id ? id + '-day' : undefined}
              label={dayLabel}
              labelSrOnly={inputLabelsSrOnly}
              className={cn(allInputClasses, 'idsk-date-input__day-n-month')}
              disabled={disabled}
              onChange={dayInputMask.onChange}
              value={dayInputMask.value}
              placeholder={dayPlaceholder}
              maxLength={2}
              onBlur={() => {
                addDay();
                formatInputLength();
              }}
            />
          )}
          {!hideMonth && (
            <Input
              ref={hideDay ? setRef(monthRef) : monthRef}
              id={id ? id + '-month' : undefined}
              label={monthLabel}
              labelSrOnly={inputLabelsSrOnly}
              className={cn(allInputClasses, 'idsk-date-input__day-n-month')}
              disabled={disabled}
              onChange={monthInputMask.onChange}
              value={monthInputMask.value}
              placeholder={monthPlaceholder}
              maxLength={2}
              onBlur={() => {
                addMonth();
                formatInputLength();
              }}
            />
          )}
          {!hideYear && (
            <Input
              ref={!!hideDay && !!hideMonth ? setRef(yearRef) : yearRef}
              id={id ? id + '-year' : undefined}
              label={yearLabel}
              labelSrOnly={inputLabelsSrOnly}
              className={cn(allInputClasses, 'idsk-date-input__year')}
              disabled={disabled}
              onChange={yearInputMask.onChange}
              value={yearInputMask.value}
              placeholder={yearPlaceholder}
              maxLength={4}
              onBlur={() => {
                addYear();
                formatInputLength();
              }}
            />
          )}
          {/* @ts-ignore */}
          <DatePicker
            {...datePickerProps}
            locale={datePickerProps?.locale}
            selected={startDate}
            className="idsk-date-input__date-picker-input"
            onCalendarOpen={() => setOpen(true)}
            onCalendarClose={() => setOpen(false)}
            onChange={handleDatepickerChange}
            disabled={disabled}
            customInput={<DatePickerCustomInput tooltip={datePickerTooltip} opened={open} />}
            previousMonthAriaLabel={datePickerProps?.previousMonthAriaLabel}
            nextMonthAriaLabel={datePickerProps?.nextMonthAriaLabel}
          />
        </div>
        {(!!errorMsg || !!caption) && (
          <p
            className={cn('idsk-input__caption', {
              'idsk-input__caption--error': (validation && !disabled) || error
            })}
          >
            {(validation && !!errorMsg && !disabled) || error ? (
              <span id={idForAria} role="alert">
                {errorMsg}
              </span>
            ) : (
              <span>{caption}</span>
            )}
          </p>
        )}
      </fieldset>
    );
  }
);

DateInput.displayName = 'DateInput';

export default DateInput;
