import React from "react";

const SvgIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 190.64 196.67">
      <path fill="#ff3939" d="M20.509 59.623l-4.035 93.918 84.963 43.628 88.752-44.413v-90.78l-87.484-47.078z" transform="translate(-5.82 -7.966)"></path>
      <g fill="#f77" stroke="#ff5959" strokeWidth="2.117">
        <path strokeLinejoin="round" d="M37.053 160.08l56.696-29.791s1.905-1.12 2.578-3.53c.672-2.41.448-90.5.448-90.5s.168-4.427-3.026-6.108-15.914-7.845-15.914-7.845l-57.326 37.32-4.035 93.919z" transform="translate(-5.82 -7.966)"></path>
        <path d="M109.38 81.59s-4.259 2.41-4.09 8.63c.167 6.22.111 85.064.111 85.064s.897 7.509 7.117 8.685 18.716 2.354 18.716 2.354l58.951-33.566v-90.78l-19.389-12.664-8.48 4.338z" transform="translate(-5.82 -7.966)"></path>
      </g>
      <path fill="#fff" stroke="#fff" strokeDashoffset="64.038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.117" d="M98.064 203.24c-1.17-.315-82.638-42.895-85.008-44.43-2.646-1.714-4.725-4.494-5.501-7.356-.625-2.302-.824-22.81-.572-58.933.24-34.615.17-32.947 1.495-35.56 1.045-2.063 2.276-3.03 6.932-5.445 6.85-3.554 27.576-14.474 53.3-28.085 15.688-8.3 24.52-12.85 25.629-13.202 4.152-1.319 9.547-1.57 12.58-.584.77.25 3.753 1.72 6.627 3.266 7.53 4.05 30.547 16.167 55.71 29.329 12.005 6.278 22.172 11.688 22.596 12.02 1.133.89 2.474 3.02 3.046 4.836l.502 1.596v45.054c0 49.481.102 45.884-1.393 48.784-1.273 2.47-2.824 3.822-6.315 5.505-6.23 3.003-49.854 25.974-76.138 40.09-5.466 2.937-7.057 3.47-10.283 3.446-1.117-.008-2.56-.157-3.208-.331zm13.332-16.864a25158.4 25158.4 0 0121.915-11.256c7.027-3.605 12.902-6.713 13.057-6.907.222-.278.28-8.025.28-37.03V94.505l-.578-.544c-.493-.463-.8-.543-2.074-.543-1.71 0 .529-1.114-26.19 13.028-13.676 7.238-13.715 7.257-15.08 7.257-1.351 0-1.557-.094-15.204-6.98C63.326 94.516 40.19 82.77 36.3 80.72c-5.459-2.877-5.646-2.818-5.886 1.827-.222 4.32.017 5.313 1.67 6.934 1.098 1.076 2.623 1.967 11.128 6.502 23.662 12.618 29.839 15.89 33.95 17.977 2.405 1.22 4.607 2.485 4.895 2.81l.524.589-.078 5.737c-.074 5.44-.105 5.786-.583 6.686-.583 1.097-1.247 1.596-2.366 1.778-.683.11-1.258-.114-4.114-1.61-13.4-7.014-34.24-17.86-37.404-19.464-3.157-1.6-4.004-1.939-4.856-1.939-.876 0-1.118.104-1.611.69l-.58.69v22.243c0 17.453.06 22.32.28 22.6.154.198 8.853 4.82 19.333 10.274 20.719 10.78 46.204 24.13 48.528 25.42 1.142.634 1.637.787 2.292.711.507-.059 4.426-1.944 9.975-4.8zm72.124-37.724c.444-.439.449-.78.507-38.235.043-27.918-.008-37.873-.196-38.099-.14-.168-.502-.306-.806-.306-.316 0-4.192 2.135-9.052 4.987-7.072 4.15-8.555 5.106-8.834 5.694-.293.618-.335 5.383-.335 38.166v37.46l9.134-4.612c5.023-2.536 9.335-4.81 9.582-5.054zm-64.322-61.169c25.687-13.15 47.549-24.386 50.924-26.171 3.202-1.695 3.662-2.11 3.228-2.92-.124-.233-15.504-8.294-35.372-18.539-30.672-15.817-35.3-18.14-36.322-18.228-1.313-.113.793-1.195-43.21 22.206-23.696 12.601-26.375 14.05-26.954 14.576-.56.51-.651 1.101-.224 1.453.154.128 4.87 2.597 10.479 5.487 11.12 5.73 47.161 24.263 54.356 27.95l4.483 2.298 1.577-.099c1.564-.098 1.706-.165 17.035-8.012z" opacity="0.997" paintOrder="fill markers stroke" transform="translate(-5.82 -7.966)"></path>
    </svg>
  );
}

function Icon(props) {
  return (
    <div {...props}>
      <SvgIcon />
    </div>
  );
}

export default Icon;