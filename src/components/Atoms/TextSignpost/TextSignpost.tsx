import { cn } from '@/lib';
import React, { ReactNode } from 'react';

export interface TextSignpostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading: ReactNode | string;
  subtitle?: string;
}

const TextSignpost = React.forwardRef<HTMLAnchorElement, TextSignpostProps>(
  ({ heading, subtitle, children, className, ...props }, ref) => {
    return (
      <div className={cn('idsk-text-signpost', className)}>
        {typeof heading === 'string' ? (
          <h3>
            <a className="idsk-anchor-card__heading" {...props} ref={ref}>
              {heading}
            </a>
          </h3>
        ) : (
          heading
        )}
        {!!subtitle && <p className="idsk-text-signpost__subtitle">{subtitle}</p>}
        <div className="idsk-anchor-card__description">{children}</div>
      </div>
    );
  }
);

TextSignpost.displayName = 'TextSignpost';

export default TextSignpost;
