import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import PropTypes from "prop-types";

export const Hypoallergenic = (props) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="75"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
      style={{ fontSize: props.size }}
    >
      <circle cx="251.487" cy="258.705" r="164.253" fill={props.color}></circle>
      <g fill="#606262">
        <path d="M79.043 170.995l-2.102 4.644-11.915-5.392-5.661 12.509 11.915 5.393-2.11 4.663-27.937-12.644 2.111-4.663 12.278 5.559 5.662-12.509-12.279-5.559 2.102-4.643 27.936 12.642zM79.466 140.966l-7.905-14.655 3.291-4.664 10.126 20.167 8.791 6.206-2.939 4.163-9.015-6.364-22.071-2.769 3.291-4.662 16.431 2.578zM103.288 118.589l8.121 8.32-3.662 3.575-21.419-21.944 8.575-8.37c2.421-2.364 4.928-3.589 7.521-3.677s4.884.888 6.875 2.928c2.01 2.059 2.936 4.378 2.774 6.958-.159 2.58-1.45 5.051-3.872 7.415l-4.913 4.795zm-2.868-2.939l4.913-4.795c1.356-1.324 2.022-2.681 2-4.071-.023-1.391-.578-2.644-1.667-3.759-1.089-1.114-2.338-1.711-3.747-1.787-1.408-.076-2.791.547-4.147 1.871l-4.912 4.796 7.56 7.745zM147.425 82.689c2.063 3.13 2.791 6.371 2.184 9.722s-2.477 6.059-5.606 8.122c-3.071 2.024-6.243 2.64-9.517 1.846-3.272-.795-5.94-2.757-8.003-5.887l-3.037-4.606c-2.055-3.119-2.804-6.34-2.247-9.667s2.365-5.998 5.424-8.015c3.131-2.063 6.36-2.712 9.689-1.947 3.33.765 6.021 2.707 8.077 5.825l3.036 4.607zm-7.315-1.838c-1.406-2.133-3.134-3.509-5.18-4.128-2.048-.618-4.044-.285-5.99.997-1.875 1.236-2.906 2.899-3.093 4.989-.187 2.09.424 4.202 1.83 6.336l3.06 4.642c1.422 2.157 3.132 3.565 5.13 4.224 1.998.658 3.94.366 5.829-.878 1.956-1.29 3.049-2.994 3.276-5.111.228-2.116-.373-4.259-1.804-6.429l-3.058-4.642zM178.7 74.169l-11.087 4.603.49 7.549-4.785 1.986-1.353-32.64 4.474-1.857 22.048 24.047-4.805 1.995-4.982-5.683zm-11.365.09l8.384-3.482-9.127-10.393-.117.048.86 13.827zM203.996 69.64l13.755-3.052.889 4.008-18.75 4.161-6.643-29.936 4.995-1.108 5.754 25.927zM235.858 64.704l14.066-.799.232 4.101-19.176 1.089-1.738-30.614 5.109-.291 1.507 26.514zM282.493 56.844l-13.331-1.496-1.08 9.627 15.467 1.736-.458 4.081-20.552-2.307 3.419-30.473 20.405 2.29-.458 4.082-15.32-1.72-.965 8.602 13.332 1.496-.459 4.082zM303.908 62.673l-3.686 12.176-4.897-1.483 8.884-29.349 10.845 3.284c3.278.993 5.588 2.498 6.928 4.518 1.339 2.019 1.595 4.399.765 7.14-.46 1.519-1.248 2.707-2.366 3.564-1.118.857-2.528 1.387-4.232 1.589 1.494 1.024 2.424 2.241 2.789 3.65.365 1.41.286 2.98-.238 4.714l-.738 2.439c-.261.86-.407 1.732-.44 2.617-.034.886.141 1.621.521 2.205l-.14.463-5.04-1.525c-.402-.606-.537-1.41-.403-2.411.135-1 .34-1.958.617-2.872l.714-2.358c.455-1.505.387-2.832-.204-3.979-.592-1.147-1.64-1.949-3.145-2.404l-6.534-1.978zm1.191-3.931l5.684 1.721c1.962.594 3.507.651 4.635.171 1.128-.479 1.927-1.493 2.395-3.038.447-1.479.354-2.771-.278-3.879-.633-1.109-1.855-1.937-3.67-2.487l-5.946-1.8-2.82 9.312zM352.121 92.306c-1.265.651-2.94.961-5.028.931-2.087-.029-4.422-.727-7.005-2.088-3.267-1.723-5.409-4.174-6.43-7.356-1.021-3.181-.667-6.412 1.063-9.689l2.987-5.663c1.729-3.278 4.136-5.426 7.22-6.441 3.083-1.018 6.202-.693 9.356.97 3.191 1.684 5.258 3.777 6.199 6.282.941 2.504.766 5.027-.527 7.568l-.096.092-4.285-2.26c.687-1.543.79-3.024.309-4.444-.48-1.42-1.634-2.613-3.459-3.576-1.876-.989-3.758-1.085-5.646-.288-1.888.796-3.401 2.272-4.541 4.431l-3.003 5.695c-1.152 2.185-1.476 4.31-.971 6.376.506 2.067 1.752 3.624 3.739 4.672 1.415.746 2.65 1.188 3.705 1.325 1.055.137 1.899.087 2.531-.149l2.901-5.5-5.384-2.839 1.788-3.391 9.91 5.227-5.333 10.115zM385.284 104.666l-10.541-8.298-5.992 7.612 12.229 9.626-2.54 3.227-16.25-12.791 18.965-24.095 16.135 12.7-2.54 3.227-12.113-9.534-5.354 6.8 10.542 8.298-2.541 3.228zM403.281 143.423l-3.354-3.836 7.9-24.977-.115-.067-16.822 14.706-3.368-3.853 23.085-20.183 3.368 3.854-7.884 24.964.115.067 16.806-14.693 3.355 3.837-23.086 20.181zM414.617 160.501l-2.732-4.327 25.929-16.37 2.731 4.326-25.928 16.371zM440.694 190.179l-.099.089c-2.816 1.304-5.532 1.401-8.146.291-2.615-1.109-4.636-3.284-6.064-6.521-1.444-3.275-1.518-6.424-.217-9.444 1.299-3.02 3.663-5.287 7.094-6.801l5.337-2.353c3.418-1.507 6.68-1.738 9.788-.692 3.108 1.045 5.376 3.188 6.805 6.425 1.461 3.314 1.742 6.309.843 8.984s-2.831 4.636-5.795 5.882l-.133.013-1.997-4.528c1.889-.833 3.134-1.993 3.737-3.478.603-1.486.465-3.225-.413-5.216-.845-1.914-2.271-3.099-4.282-3.555-2.01-.455-4.156-.18-6.441.827l-5.371 2.369c-2.311 1.019-3.97 2.437-4.977 4.255-1.008 1.818-1.081 3.703-.22 5.655.855 1.94 2.022 3.182 3.502 3.727 1.479.544 3.166.399 5.062-.437l1.987 4.508z"></path>
      </g>
      <path
        fill="#FFF"
        d="M195.287 248.88c-8.153-1.095-14.61-6.402-23.102-2.766-4.733 2.027-8.977-1.371-11.006-6.181-2.058-4.875-.856-9.184 3.43-12.311 4.288-3.129 9.757-3.537 12.627.551 5.414 7.712 13.802 6.919 20.754 9.896l8.645-14.731c-2.823-1.437-5.438-3.232-8.332-4.135-4.909-1.531-8.691-5.896-8.084-10.608.636-4.929 3.429-8.185 8.526-8.755 5.774-.646 8.973 2.604 10.851 7.699 1.021 2.768 2.302 5.439 3.47 8.166l24.845-12.045c-4.179-5.256-8.727-11.061-2.066-17.418 3.389-3.233 7.765-3.636 11.676-.893 7.086 4.969 4.509 11.233 1.166 17.51 3.969 1.26 5.822.807 6.433-3.39 1.213-8.348 3.146-16.59 4.372-24.936.276-1.877-.667-4.338-1.842-5.955-5.075-6.988-4.352-15.43 2.051-20.265 6.611-4.993 15.475-3.598 19.98 3.146 4.571 6.842 2.604 14.83-4.355 19.884-2.088 1.517-4.043 4.185-4.606 6.657-2.056 9.014-3.497 18.167-5.312 28.041 1.962.101 4.579.695 4.822.177 2.51-5.353 6.068-10.776 6.499-16.396.518-6.761 2.131-11.865 7.854-13.35 5-1.298 10.238 1.526 12.225 6.589 2.128 5.422-.672 9.182-5.973 13.575-4.575 3.791-7.375 9.725-10.887 14.61l16.541 15.968c1.639-1.866 3.629-3.544 4.87-5.661 3.034-5.175 7.762-7.491 12.604-5.453 4.633 1.95 6.754 5.666 6.165 10.626-.603 5.074-5.231 8.279-11.07 8.197-1.803-.025-3.857-.02-5.333.803-1.001.559-1.907 2.809-1.552 3.863.384 1.141 2.566 2.736 3.478 2.469 6.804-1.991 14.62-.519 20.08-7.367 3.148-3.949 8.596-3.466 12.707-.278 4.058 3.148 5.419 7.617 3.267 12.457-2.12 4.77-6.781 8.125-11.186 5.907-8.766-4.415-16.34.346-24.479.736l-2.049 21.776c6.237 2.55 12.755 5.41 19.443 7.787 1.384.492 3.506-.592 5.117-1.325 7.894-3.588 16.135-.488 19.402 7.417 2.904 7.025-.845 15.262-8.235 18.097-7.104 2.725-14.865-1.223-18.116-8.533-1.118-2.512-3.5-5.012-5.945-6.27-5.203-2.676-10.827-4.534-15.175-6.284l-23.713 23.695c1.342 1.488 3.208 4.036 5.54 6.042 4.084 3.513 5.663 8.875 3.028 12.993-2.642 4.128-6.604 6.159-11.412 4.485-5.24-1.825-7.498-5.842-6.593-11.454.231-1.432.985-3.145.47-4.247-.828-1.772-2.512-3.144-3.835-4.686-.881 1.731-2.574 3.5-2.496 5.187.267 5.796.269 11.606 4.483 16.641 3.377 4.034 2.106 9.153-1.923 11.664-2.854 1.778-7.729 2.234-10.921 1.094-4.53-1.619-6.967-6.832-4.476-11.002 4.248-7.109 1.156-13.885 1.247-21.218l-18.489-3.1c-.554 4.319-1.483 8.617-1.563 12.931-.1 5.389-2.338 9.087-7.404 10.44-4.799 1.282-8.931-.533-11.122-5.076-2.163-4.481-.984-8.458 2.686-11.984 3.149-3.026 5.849-6.52 9.344-10.484-5.226-2.433-8.054-9.005-13.077-2.441-1.091 1.425-1.271 3.819-1.265 5.766.022 8.769-6.048 15.193-14.445 15.028-7.284-.143-13.545-6.671-13.487-14.063.063-8.015 6.585-13.756 14.951-13.96 3.297-.081 6.557-1.721 11.068-3.001-10.129-14.816-14.758-29.366-11.791-46.548zm25.198-2.994c-7.29 4.486-9.743 14.31-5.416 21.684 4.262 7.261 15.289 9.843 22.334 5.229 7.136-4.673 9.283-14.601 4.725-21.844-4.614-7.332-14.283-9.597-21.643-5.069zm34.267-12.51c-5.649 3.691-7.244 11.641-3.45 17.206 3.691 5.415 11.158 6.978 16.733 3.503 5.753-3.585 7.6-11.561 3.973-17.151-3.663-5.643-11.568-7.273-17.256-3.558zm13.678 35.949c-2.716-4.024-8.247-5.107-12.292-2.408-3.889 2.595-5.106 8.584-2.51 12.342 2.638 3.816 8.721 5.023 12.442 2.468 3.878-2.663 4.99-8.505 2.36-12.402z"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="4.313"
        d="M380.266 156.812L130.958 370.251"
      ></path>
    </SvgIcon>
  );
};

Hypoallergenic.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hypoallergenic.defaultProps = {
  size: 78
}
