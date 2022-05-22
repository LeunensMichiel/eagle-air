import React from 'react';

export const Heart = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.16 4.99992C19.1 3.93713 17.6948 3.28846 16.1984 3.17109C14.7019 3.05372 13.2128 3.47539 12 4.35992C10.7277 3.41356 9.14402 2.98443 7.56795 3.15896C5.99188 3.33348 4.54047 4.0987 3.506 5.30051C2.47154 6.50231 1.93085 8.05144 1.99283 9.63594C2.05481 11.2204 2.71485 12.7226 3.84003 13.8399L10.05 20.0599C10.57 20.5717 11.2704 20.8585 12 20.8585C12.7296 20.8585 13.43 20.5717 13.95 20.0599L20.16 13.8399C21.3276 12.6652 21.983 11.0762 21.983 9.41992C21.983 7.76365 21.3276 6.17465 20.16 4.99992ZM18.75 12.4599L12.54 18.6699C12.4694 18.7413 12.3853 18.7979 12.2926 18.8366C12.1999 18.8752 12.1005 18.8951 12 18.8951C11.8996 18.8951 11.8002 18.8752 11.7075 18.8366C11.6148 18.7979 11.5307 18.7413 11.46 18.6699L5.25003 12.4299C4.46579 11.6283 4.02664 10.5514 4.02664 9.42992C4.02664 8.30846 4.46579 7.23158 5.25003 6.42992C6.04919 5.64091 7.127 5.19849 8.25003 5.19849C9.37306 5.19849 10.4509 5.64091 11.25 6.42992C11.343 6.52365 11.4536 6.59804 11.5755 6.64881C11.6973 6.69958 11.828 6.72572 11.96 6.72572C12.092 6.72572 12.2227 6.69958 12.3446 6.64881C12.4665 6.59804 12.5771 6.52365 12.67 6.42992C13.4692 5.64091 14.547 5.19849 15.67 5.19849C16.7931 5.19849 17.8709 5.64091 18.67 6.42992C19.4651 7.22107 19.9186 8.29211 19.9336 9.41361C19.9485 10.5351 19.5237 11.6179 18.75 12.4299V12.4599Z"
        fill="currentColor"
      />
    </svg>
  );
};
