import React from "react";

function InstagramLogo() {
  return (
    <svg
      className="icon"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="18.8714" cy="18.5831" r="18.5831"/>
      <path
        d="M9.43695 14.7207C9.43695 11.9593 11.6755 9.7207 14.437 9.7207H23.3059C26.0673 9.7207 28.3059 11.9593 28.3059 14.7207V23.5897C28.3059 26.3511 26.0673 28.5896 23.3059 28.5896H14.4369C11.6755 28.5896 9.43695 26.3511 9.43695 23.5896V14.7207Z"
        fill="url(#pattern01)"
      />
      <defs>
        <pattern
          id="pattern01"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image01" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image01"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export { InstagramLogo };
