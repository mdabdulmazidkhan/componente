import { forwardRef } from 'react';
import { type IconComponentProps, SvgIcon } from '@/components/ui/svg-icon';

export const MCPIcon = forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => (
  <SvgIcon ref={ref} {...props}>
    <path
      d="M2.06895 11.2982L11.432 1.9351C12.7248 0.642325 14.8208 0.642325 16.1135 1.9351C17.4063 3.22786 17.4063 5.32386 16.1135 6.61663L9.04249 13.6877"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M9.14003 13.5902L16.1135 6.61663C17.4063 5.32385 19.5023 5.32385 20.7952 6.61663L20.8439 6.66538C22.1367 7.95816 22.1367 10.0542 20.8439 11.3469L12.3758 19.815C11.9449 20.2459 11.9449 20.9445 12.3758 21.3754L14.1146 23.1143"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M13.7728 4.27585L6.84802 11.2006C5.55526 12.4934 5.55526 14.5894 6.84802 15.8822C8.14079 17.1749 10.2368 17.1749 11.5296 15.8822L18.4543 8.95738"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </SvgIcon>
));

MCPIcon.displayName = 'MCPIcon';
