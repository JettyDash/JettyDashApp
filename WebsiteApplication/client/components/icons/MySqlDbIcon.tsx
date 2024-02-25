import React from "react";

interface MySqlDbIconProps extends React.SVGProps<SVGSVGElement> {
}

const MySqlDbIcon: React.FC<MySqlDbIconProps> = (props)  => {
    return (
        <div className="h-10 w-10 scale-[0.90]">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 500 500"
                {...props}
            >
                <defs>
                    <linearGradient id="a" {...{["bx:pinned"]: "true"}}>
                        <stop
                            offset={0}
                            style={{
                                stopColor: "#bdc3c7",
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: "#2c3e50",
                            }}
                        />
                    </linearGradient>
                    <linearGradient
                        xlinkHref="#a"
                        id="b"
                        x1={24.881}
                        x2={24.881}
                        y1={-992.059}
                        y2={1700.772}
                        gradientUnits="userSpaceOnUse"
                    />
                </defs>
                <g transform="matrix(.13938 0 0 .13938 193.13 195.725)">
                    <rect className="stroke-[#000] fill-black dark:fill-white"
                        width={3269.291}
                        height={3269.291}
                        x={-1385.646}
                        y={-1384.646}
                        rx={552.305}
                        ry={552.305}
                    />
                    <path className={"fill-[#F8F6F2] dark:fill-dark-100"}
                        // d="M-781.796-1244.772h2049.242c262.545 0 475.379 212.834 475.379 475.379v2049.242c0 262.545-212.834 475.379-475.379 475.379H-781.796c-262.545 0-475.379-212.834-475.379-475.379V-769.393c0-262.545 212.834-475.379 475.379-475.379ZM1074.527 300.092c-18.245-43.45-47.353-91.312-72.507-131.003C945.971 80.654 886.013-4.976 819.848-86.193c-77.874-95.581-163.217-183.88-256.381-264.653-106.737-92.539-221.338-174.28-341.306-248.631-32.817-20.34-65.799-40.479-99.327-59.614-49.182-28.068-102.425-46.155-156.989-60.304-43.464-11.271-87.072-22.141-130.966-31.525-17.743-3.788-36.412-3.422-54.686-4.463-40.257-2.303-80.543-4.175-120.786-6.6-4.749-.287-10.03-1.966-13.904-4.671-15.806-11.035-31.196-22.679-46.643-34.216-3.465-2.583-6.687-5.532-9.808-8.531-26.912-25.908-58.846-44.54-91.018-62.814-58.258-33.09-118.274-62.37-181.749-84.21-39.453-13.574-79.603-24.293-121.202-28.454-33.304-3.329-66.595-3.028-99.218 5.897-55.073 15.067-92.92 50.08-116.345 101.465-13.775 30.212-20.606 61.838-18.138 95.143 2.461 33.298 12.334 64.615 26.26 94.742 13.89 30.047 31.253 58.107 50.94 84.596 22.055 29.668 45.674 58.187 67.636 87.926 35.414 47.956 73.684 93.809 106.049 144.018 19.45 30.169 34.768 61.967 42.732 97.26 9.026 39.998 23.311 78.397 37.316 116.868 17.075 46.894 33.534 94.017 50.739 140.868 23.461 63.876 51.873 125.492 86.756 183.98 15.505 26.015 31.985 51.45 48.056 77.121 7.139 11.415 16.567 20.785 26.418 29.839 6.859 6.307 13.789 12.656 19.787 19.745 4.879 5.776 8.969 12.405 12.405 19.163 4.987 9.823 5.998 18.769-1.097 29.61-14.579 22.263-20.829 48.264-25.937 74.036-8.81 44.469-20.979 87.99-33.348 131.526-10.647 37.495-17.671 75.815-23.318 114.393-9.779 66.833-12.297 134.023-9.836 201.408 1.672 45.645 6.328 91.032 14.084 136.082 10.425 60.504 25.599 119.724 47.898 177 25.09 64.457 58.732 123.885 104.815 175.815 21.61 24.351 193.164 72.816 229.116 39.554 17.578-16.258 28.319-36.82 35.852-59.184 8.33-24.724 12.29-50.395 16.043-76.102 5.244-35.909 10.267-71.847 15.834-107.699 3.064-19.709 6.788-39.331 10.726-58.89 1.615-8.028 4.571-15.784 6.917-23.669l2.088.022c1.212 2.102 2.547 4.147 3.63 6.313 30.249 60.784 59.93 121.862 91.032 182.209 9.385 18.216 22.091 34.861 34.346 51.435 38.348 51.88 82.638 98.487 129 143.199 41.305 39.834 84.898 77.006 130.486 111.832 20.699 15.82 40.186 32.939 58.352 51.608 12.785 13.137 25.657 26.202 38.887 38.886 27.357 26.224 39.855 35.078 73.074 52.864l589.407-1405.908Z"
                        d = "M -781.796 -1244.772 h 2049.242 c 262.545 0 475.379 212.834 475.379 475.379 v 2049.242 c 0 262.545 -212.834 475.379 -475.379 475.379 H -781.796 c -262.545 0 -475.379 -212.834 -475.379 -475.379 V -769.393 c 0 -262.545 212.834 -475.379 475.379 -475.379 Z Z"
                    />
                    {/*<g>*/}
                    {/*    <path*/}
                    {/*        d="M5091.95 139.948h-318.268c-11.089-538.627-42.121-1045.028-93.093-1519.203h-2.753L4193.34 139.948h-242.078L3469.85-1379.255h-2.835c-35.824 455.65-58.393 962.05-67.709 1519.203H3109.14c18.821-677.794 65.721-1313.221 140.701-1906.281h394.318l458.969 1400.712h2.848l461.803-1400.712h377.308c82.712 694.546 131.503 1329.972 146.372 1906.281h.503-.012Zm1380.317-1406.299c-129.639 704.839-300.5 1217.076-512.586 1536.715-165.18 246.119-346.358 369.221-543.536 369.308-52.549 0-117.26-16.003-194.317-47.444V422.416a936.972 936.972 0 0 0 132.455 8.458c91.996 0 166.137-25.389 222.421-76.167 67.514-62.07 101.27-131.739 101.27-209.007 0-52.84-26.295-161.073-78.885-324.699l-349.158-1087.352h312.597l250.688 813.047c56.168 184.533 79.624 313.559 70.369 387.078 137.113-367.229 232.894-767.288 287.341-1200.172h301.26l.081.047Z"*/}
                    {/*        style={{*/}
                    {/*            fill: "#d8d8d8",*/}
                    {/*        }}*/}
                    {/*        transform="matrix(.80324 0 0 .80324 -3521.536 308.091)"*/}
                    {/*    />*/}
                    {/*</g>*/}
                    <path
                        d="M357.772 1748.021c1.188-16.395 1.188-32.008 1.188-47.245-33.228-17.788-45.73-26.644-73.098-52.868-13.234-12.681-26.105-25.751-38.894-38.885-18.176-18.667-37.667-35.79-58.373-51.604-45.6-34.828-89.207-71.998-130.524-111.835-46.371-44.711-90.671-91.318-129.037-143.198-12.256-16.575-30.395-26.19-30.875-25.336-1.131 2.011.46-13.728 2.017-24.386 5.243-35.906 10.267-71.845 15.832-107.7 3.06-19.71 6.788-39.329 10.724-58.886 1.615-8.03 4.572-15.788 6.918-23.67l2.087.019c1.216 2.102 2.55 4.144 3.63 6.314 30.25 60.786 59.93 121.864 91.03 182.21 9.388 18.215 22.092 34.86 34.345 51.435 38.355 51.88 82.643 98.487 129.001 143.198 41.305 39.837 84.9 77.007 130.487 111.835 20.7 15.814 40.186 32.937 58.357 51.604 12.785 13.134 25.652 26.204 38.883 38.885 27.36 26.224 39.859 35.08 73.077 52.868 0 14.305 0 28.941-.982 44.244-71.413 1.901-137.685 3.262-135.793 3.001Zm-799.005-339.648c-29.331-14.738-53.824-35.629-75.436-59.975-46.095-51.929-79.749-111.36-104.851-175.817-22.303-57.275-37.48-116.496-47.904-177-7.762-45.047-12.421-90.441-14.088-136.081-2.462-67.388.054-134.58 9.837-201.41 5.646-38.576 12.673-76.898 23.324-114.39 12.37-43.541 24.543-87.062 33.36-131.526 5.109-25.772 11.361-51.778 25.942-74.04 7.098-10.838 6.087-19.788 1.096-29.606-3.436-6.76-7.528-13.388-12.409-19.162-5.996-7.095-12.934-13.439-19.796-19.747-9.848-9.054-19.28-18.428-26.424-29.838-16.076-25.674-32.555-51.11-48.07-77.12-34.887-58.49-63.308-120.108-86.778-183.987-17.212-46.847-33.671-93.97-50.75-140.866-14.009-38.468-28.297-76.868-37.33-116.868-7.968-35.292-23.285-67.089-42.743-97.262-32.377-50.207-70.652-96.06-106.077-144.013-21.971-29.739-45.592-58.256-67.655-87.93-19.693-26.488-37.061-54.549-50.955-84.59-13.933-30.127-23.803-61.445-26.269-94.747-2.467-33.305 4.366-64.932 18.142-95.142 23.431-51.382 61.289-86.4 116.379-101.464 32.63-8.922 65.929-9.231 99.247-5.898 12.768 1.277 25.4 3.172 37.918 5.577l-1.188.321c-55.074 15.064-92.922 50.082-116.346 101.464-13.772 30.21-20.603 61.837-18.137 95.142 2.465 33.302 12.333 64.62 26.262 94.747 13.89 30.041 31.253 58.102 50.94 84.59 22.057 29.674 45.672 58.191 67.636 87.93 35.416 47.953 73.68 93.806 106.048 144.013 19.452 30.173 34.765 61.97 42.731 97.262 9.03 40 23.314 78.4 37.319 116.868 17.074 46.896 33.529 94.019 50.736 140.866 23.463 63.879 51.876 125.497 86.754 183.987 15.51 26.01 31.985 51.446 48.056 77.12 7.142 11.41 16.571 20.784 26.417 29.838 6.86 6.308 13.796 12.652 19.79 19.747 4.88 5.774 8.971 12.402 12.406 19.162 4.989 9.818 6 18.768-1.096 29.606-14.577 22.262-20.827 48.268-25.935 74.04-8.814 44.464-20.984 87.985-33.35 131.526-10.648 37.492-17.673 75.814-23.318 114.39-9.78 66.83-12.295 134.022-9.834 201.41 1.666 45.64 6.324 91.034 14.084 136.081 10.421 60.504 25.594 119.725 47.891 177 25.094 64.457 58.739 123.888 104.821 175.817 14.158 15.954 29.554 30.424 46.737 42.651-5.774 21.023-70.135 35.915-107.134 17.324Z"
                        style={{
                            stroke: "#bada55",
                            paintOrder: "fill",
                            fillRule: "nonzero",
                            fill: "#e48e00",
                        }}
                    />
                    <path className="opacity-30 fill-[url(#b)] dark:fill-dark-100"
                        d="M492.295 1700.772c-33.219-17.786-45.717-26.64-73.074-52.864-13.23-12.684-26.102-25.749-38.887-38.886-18.166-18.669-37.653-35.788-58.352-51.608-45.588-34.826-89.181-71.998-130.486-111.832-46.362-44.712-90.652-91.319-129-143.199-12.255-16.574-24.961-33.219-34.346-51.435-31.102-60.347-60.783-121.425-91.032-182.209-1.083-2.166-2.418-4.211-3.63-6.313l-2.088-.022c-2.346 7.885-5.302 15.641-6.917 23.669-3.938 19.559-7.662 39.181-10.726 58.89-5.567 35.852-10.59 71.79-15.834 107.699-3.753 25.707-7.713 51.378-16.043 76.102-7.533 22.364-18.274 42.926-35.852 59.184-35.952 33.262-97.382 48.731-153.696 20.419-29.323-14.736-53.81-35.622-75.42-59.973-46.083-51.93-79.725-111.358-104.815-175.815-22.299-57.276-37.473-116.496-47.898-177-7.756-45.05-12.412-90.437-14.084-136.082-2.461-67.385.057-134.575 9.836-201.408 5.647-38.578 12.671-76.898 23.318-114.393 12.369-43.536 24.538-87.057 33.348-131.526 5.108-25.772 11.358-51.773 25.937-74.036 7.095-10.841 6.084-19.787 1.097-29.61-3.436-6.758-7.526-13.387-12.405-19.163-5.998-7.089-12.928-13.438-19.787-19.745-9.851-9.054-19.279-18.424-26.418-29.839-16.071-25.671-32.551-51.106-48.056-77.121-34.883-58.488-63.295-120.104-86.756-183.98-17.205-46.851-33.664-93.974-50.739-140.868-14.005-38.471-28.29-76.87-37.316-116.868-7.964-35.293-23.282-67.091-42.732-97.26-32.365-50.209-70.635-96.062-106.049-144.018-21.962-29.739-45.581-58.258-67.636-87.926-19.687-26.489-37.05-54.549-50.94-84.596-13.926-30.127-23.799-61.444-26.26-94.742-2.468-33.305 4.363-64.931 18.138-95.143 23.425-51.385 61.272-86.398 116.345-101.465 32.623-8.925 65.914-9.226 99.218-5.897 41.599 4.161 81.749 14.88 121.202 28.454 63.475 21.84 123.491 51.12 181.749 84.21 32.172 18.274 64.106 36.906 91.018 62.814 3.121 2.999 6.343 5.948 9.808 8.531 15.447 11.537 30.837 23.181 46.643 34.216 3.874 2.705 9.155 4.384 13.904 4.671 40.243 2.425 80.529 4.297 120.786 6.6 18.274 1.041 36.943.675 54.686 4.463 43.894 9.384 87.502 20.254 130.966 31.525 54.564 14.149 107.807 32.236 156.989 60.304 33.528 19.135 66.51 39.274 99.327 59.614 119.968 74.351 234.569 156.092 341.306 248.631 93.164 80.773 178.507 169.072 256.381 264.653 66.165 81.217 126.123 166.847 182.172 255.282 25.154 39.691 54.262 87.553 72.507 131.003L492.295 1700.772Z"
                    />
                    <path className="fill-black dark:fill-white"
                        d="M -175.921 -249.651 c -8.816 21.726 -23.38 37.851 -42.155 51.235 c -1.217 -2.243 -2.709 -4.749 -3.976 -7.363 c -14.656 -30.243 -29.471 -60.411 -43.804 -90.807 c -4.897 -10.385 -11.264 -19.575 -18.712 -28.144 c -13.548 -15.59 -27.274 -31.027 -40.635 -46.774 c -4.72 -5.564 -8.644 -11.813 -12.834 -17.816 c -3.83 -5.486 -7.528 -11.063 -11.816 -17.384 c 1.644 -0.726 3.77 -2.082 6.088 -2.624 a 376.846 376.846 0 0 1 82.13 -9.916 c 3.07 -0.032 6.678 0.729 9.147 2.42 c 9.871 6.764 19.137 14.422 29.094 21.047 c 19.716 13.117 34.176 30.307 43.563 52.093 c 3.394 7.875 8.645 14.931 12.598 22.594 c 1.58 3.062 2.8 6.773 2.716 10.152 c -0.517 20.746 -3.34 41.13 -11.404 61.287 Z"
                    />
                    <path className={"fill-black dark:fill-white"}
                        d="M 492.533 1690.641 v -351.33 c 0.001 -240.664 0.01 -481.328 -0.016 -721.992 c -0.002 -19.768 1.993 -39.198 8.33 -58.06 c 12.116 -36.069 34.418 -65.133 62.252 -90.292 c 37.48 -33.878 80.97 -58.208 126.848 -78.51 c 61.97 -27.424 126.604 -46.73 192.471 -62.134 c 15.491 -3.623 31.056 -6.93 126.612 -22.439 c 139.575 -19.449 199.446 -23.339 259.397 -25.027 c 106.695 -3.005 213.25 -0.388 319.492 11.061 c 56.311 6.07 112.351 13.788 168.513 25.315 c 4.506 0.91 8.54 0.801 12.321 1.725 c 37.28 9.11 74.512 18.42 111.776 27.598 c 5.748 1.415 11.588 2.454 17.385 3.666 c 0 0 0 0.03 0.143 0.666 c 1.322 0.89 2.501 1.145 3.68 1.4 c 48.734 14.805 96.217 32.855 141.364 56.508 c 38.151 19.988 73.694 43.758 103.568 75.31 c 26.871 28.38 45.912 60.82 52.608 99.716 a 152.6 152.6 0 0 1 2.205 25.73 c 0.104 405.561 0.006 811.123 0.204 1216.684 c 0.023 47.03 -16.053 87.42 -46.304 122.727 c -29.66 34.615 -66.43 60.028 -106.181 81.453 c -60.263 32.48 -124.514 54.458 -190.367 72.378 c -67.736 18.432 -136.59 31.08 -206.033 40.579 c -33.818 4.625 -67.846 7.925 -101.863 10.845 c -31.724 2.723 -63.545 4.417 -95.35 6.053 c -22.237 1.143 -44.514 1.529 -66.778 2.061 c -22.281 0.533 -44.571 1.26 -66.852 1.111 c -24.93 -0.167 -49.877 -0.792 -74.778 -2.001 c -32.14 -1.56 -64.3 -3.236 -96.347 -6.05 c -51.52 -4.523 -102.899 -10.32 -154.01 -18.564 c -45.91 -7.405 -91.571 -15.99 -136.664 -27.225 c -58.721 -14.63 -116.403 -32.66 -171.773 -57.4 c -40.48 -18.087 -79.024 -39.465 -113.587 -67.57 c -32.255 -26.227 -58.028 -57.269 -73.067 -98.018 c -6.761 -19.35 -9.065 -37.98 -9.357 -56.889 c -0.317 -20.484 -0.278 -40.975 -0.26 -62.312 c 0.045 -4.28 -0.044 -7.711 -0.014 -11.91 c -0.032 -2.302 -0.183 -3.837 -0.07 -6.269 c 0.265 -16.51 0.265 -32.122 0.265 -47.36 l 0.237 -11.234 Z"
                    />

                    <path className="stroke-[#bada55] fill-[#00618a] dark:fill-[white]"
                        d="M492.296 1701.875c-33.218-17.787-45.717-26.643-73.077-52.867-13.23-12.68-26.098-25.75-38.883-38.885-18.171-18.667-37.657-35.79-58.357-51.604-45.588-34.828-89.182-71.998-130.487-111.835-46.358-44.711-90.646-91.319-129-143.198-12.254-16.574-24.958-33.22-34.346-51.435-31.1-60.346-60.78-121.424-91.03-182.21-1.08-2.17-2.414-4.212-3.63-6.314l-2.087-.019c-2.346 7.882-5.303 15.64-6.918 23.67-3.936 19.557-7.664 39.176-10.724 58.886-5.565 35.855-10.589 71.794-15.832 107.7-3.754 25.704-7.719 51.378-16.047 76.1-7.535 22.367-18.27 42.927-35.848 59.188-35.955 33.26-97.383 48.728-153.702 20.42-29.322-14.738-53.809-35.628-75.415-59.974-46.082-51.929-79.727-111.36-104.82-175.817-22.298-57.275-37.47-116.496-47.892-177-7.76-45.047-12.418-90.44-14.084-136.081-2.461-67.388.055-134.58 9.834-201.41 5.645-38.576 12.67-76.898 23.318-114.39 12.366-43.54 24.536-87.062 33.35-131.527 5.108-25.771 11.358-51.777 25.935-74.039 7.096-10.838 6.085-19.788 1.096-29.606-3.435-6.76-7.527-13.388-12.405-19.162-5.995-7.095-12.93-13.439-19.791-19.747-9.846-9.054-19.275-18.428-26.417-29.838-16.071-25.674-32.546-51.11-48.056-77.12-34.878-58.49-63.29-120.108-86.754-183.987-17.207-46.847-33.662-93.97-50.736-140.866-14.005-38.467-28.289-76.867-37.319-116.868-7.966-35.291-23.28-67.089-42.731-97.262-32.368-50.207-70.632-96.06-106.048-144.013-21.964-29.739-45.58-58.256-67.635-87.93-19.688-26.488-37.05-54.549-50.94-84.59-13.93-30.128-23.798-61.445-26.263-94.747-2.466-33.305 4.365-64.932 18.137-95.142 23.424-51.382 61.272-86.4 116.347-101.464 32.62-8.922 65.91-9.23 99.22-5.898 41.594 4.162 81.747 14.88 121.198 28.454 63.478 21.84 123.494 51.124 181.751 84.212 32.175 18.274 64.103 36.908 91.02 62.815 3.118 3 6.341 5.943 9.803 8.528 15.452 11.54 30.842 23.179 46.648 34.22 3.869 2.703 9.153 4.384 13.9 4.67 40.248 2.424 80.53 4.292 120.787 6.595 18.274 1.045 36.945.677 54.684 4.468 43.9 9.382 87.507 20.252 130.972 31.525 54.558 14.15 107.806 32.236 156.986 60.303 33.53 19.136 66.509 39.272 99.33 59.613C349.304-529.253 463.903-447.51 570.64-354.97c93.161 80.77 178.51 169.071 256.38 264.653C893.188-9.1 953.146 76.529 1009.192 164.961c25.158 39.695 54.267 87.554 72.51 131.006L928.03 319.162C823.529 125.568 687.455-60.963 528.248-212.873c-74.642-71.22-154.447-136.119-240.205-196.003-53.036-36.975-107.742-71.28-164.418-102.4-70.995-38.98-144.353-72.722-220.965-99.223-23.634-8.175-47.461-15.578-72.489-17.922-21.886-2.05-43.811-3.7-65.733-5.333-27.24-2.03-54.614-2.858-81.707-6.082-24.14-2.872-48.098-6.948-72.508-5.336-8.969.592-17.043-1.809-25.03-5.49-16.851-7.765-31.05-19.283-45.044-31.154-16.762-14.22-32.478-30.05-50.69-42.094-28.265-18.694-57.783-35.655-87.623-51.771-50.12-27.07-103.077-48.06-155.723-69.593-22.484-9.197-45.501-17.165-69.575-21.15-21.104-3.494-42.41-6.806-61.81 6.592-18.563 3.236-28.028 15.226-34.224 32.334-3.937 10.869-7.283 21.321-6.596 32.856 1.106 18.573 7.186 35.863 14.468 52.686 13.032 30.105 29.97 58.03 50.303 83.7 48.207 60.863 95.744 122.212 139.906 186.107 21.225 30.708 42.129 61.717 57.049 96.05 14.314 32.938 28.493 66.064 40.197 99.982 21.701 62.892 41.63 126.397 62.159 189.692 24.834 76.57 55.523 150.414 98.689 218.78 18.601 29.46 38.388 57.626 65.047 80.474 6.816 5.841 13.073 12.381 19.229 18.936 17.205 18.323 29.772 39.293 33.844 64.407 2.709 16.705-.783 33.235-4.078 49.538-6.011 29.746-15.379 58.557-25.812 87.01-11.568 31.55-24.621 62.612-34.862 94.58-25.079 78.284-35.262 159.127-37.794 241.012-1.825 59.061 1.424 117.892 9.259 176.5 10.204 76.335 29.01 150.222 60.877 220.548 12.089 26.678 23.297 53.803 40.297 77.938 15.865 22.52 35.438 40.503 61.432 50.852 8.55 3.404 16.772 6.102 25.177-1.97 4.749-41.82 9.55-84.508 14.455-127.184 4.943-43.015 11.184-85.811 20.532-128.14 15.505-70.207 44.279-133.646 92.665-187.704 17.063-19.063 32.445-39.631 48.936-59.933 5.889 2.471 9.924 7.43 12.562 13.115 3.763 8.111 7.32 16.452 9.69 25.047 5.406 19.605 11.952 38.722 20.03 57.41 26.673 61.707 51.865 124.1 82.294 184.094 68.174 134.413 144.027 264.286 230.814 387.653 46.67 66.342 95.762 130.696 154.52 186.931 17.348 16.603 36.954 30.846 56.74 47.172l-.237 11.234Z"
                    />
                    {/*<path className="fill-[#d8d8d8] dark:fill-none"*/}
                    {/*    d="M310.541 415.725c-50.79-1005.516-24.328-571.163-52.668-1011.081l247.19 4.275c32.481 352.893 52.723 696.57 60.727 1006.806H310.541Z"*/}
                    {/*/>*/}
                    <path className={"fill-white dark:fill-dark-100"}
                        d="M1251.52 937.452c-16.302-.932-32.602-1.912-48.908-2.788-64.58-3.47-128.792-10.358-192.737-20.032-66.872-10.117-133.007-23.597-197.966-42.512-62.424-18.175-123.248-40.385-179.924-72.812-1.017-.582-2.348-.612-4.141-1.047v10.556c0 134.659.143 269.317-.212 403.975-.037 13.979 4.167 25.427 13.099 35.484 5.075 5.715 10.446 11.233 16.165 16.298 17.057 15.107 36.355 26.97 56.464 37.475 47.408 24.767 97.728 41.935 149.098 56.186 54.258 15.052 109.286 26.67 165.067 34.269 43.217 5.886 86.505 11.776 129.953 15.296 48.464 3.926 97.121 6.01 145.737 7.404 86.708 2.487 173.27-1.252 259.6-9.61 55.033-5.328 109.788-12.81 164.116-23.271 62.82-12.096 124.688-27.649 184.693-50.079 35.612-13.311 70.206-28.749 101.883-50.054 16.653-11.201 32.307-23.56 44.06-40.182 5.545-7.843 8.307-16.31 8.296-26.108-.143-136.659-.096-273.317-.095-409.975V798c-2.264.642-3.267.727-4.058 1.18-53.717 30.794-111.232 52.401-170.33 70.056-109.55 32.727-221.857 50.523-335.465 60.812-58.423 5.292-116.991 8.488-175.685 8.813-1.455.009-112.166-2.856-128.71-1.409Z"
                        style={{
                            stroke: "#bada55",
                        }}
                    />
                    <path className={"fill-white dark:fill-dark-100"}
                        d="M1656.439 2006.019c11.503-1.861 23.01-3.695 34.507-5.59 62.131-10.243 123.432-23.994 183.367-43.49 43.425-14.126 85.878-30.523 125.208-54.119 19.216-11.528 37.376-24.417 52.224-41.458 9.267-10.636 14.284-22.348 14.243-37.124-.376-134.33-.22-268.66-.22-402.991v-10.985c-2.042.494-3.063.515-3.838.961-53.09 30.556-109.993 51.854-168.434 69.416-97.585 29.326-197.47 47.076-298.655 57.214-55.334 5.544-110.914 9.604-166.481 11.627-84.623 3.082-169.266 1.589-253.798-4.723-67.48-5.039-134.596-12.693-201.298-24.134-63.371-10.869-125.93-25.054-187.311-44.298-53.453-16.76-105.443-36.962-154.158-64.962-.986-.567-2.331-.507-3.951-.826v10.585c0 134.33.16 268.662-.234 402.99-.043 14.378 4.497 25.895 13.414 36.413 11.535 13.607 25.408 24.471 40.19 34.238 42.026 27.772 88.43 45.959 135.96 61.547 57.334 18.805 116.006 32.12 175.42 42.455 54.515 9.483 109.323 16.855 164.469 20.855 49.17 3.568 98.473 5.75 147.757 7.214 68.67 2.038 137.359.392 205.822-5.219 48.11-3.942 96.032-10.188 145.797-15.596Z"
                        style={{
                            stroke: "#bada55",
                        }}
                    />
                    <path className={"fill-white dark:fill-dark-100"}
                        d="M1277.16 417.068c68.324-2.588 134.628-1.274 200.858 2.547 61.862 3.568 123.481 9.74 184.781 19.157 72.143 11.083 143.352 26.064 212.876 48.491 42.181 13.607 83.313 29.747 121.676 52.252 17.277 10.135 33.92 21.261 47.93 35.717 5.75 5.933 10.87 12.605 15.498 19.466 7.033 10.426 6.932 21.441-.224 31.786-4.71 6.81-9.789 13.522-15.608 19.379-18.741 18.86-41.156 32.691-64.533 44.901-50.09 26.162-103.388 43.825-157.758 58.488-65.659 17.707-132.412 29.732-199.804 38.535-102.288 13.359-205.022 18.385-308.11 17.227-.977-.011-179.051-9.792-183.088-10.199-79.9-8.064-159.134-20.196-237.152-39.526-44.255-10.966-87.83-24.15-130.16-41.228-35.425-14.441-68.238-30.478-97.631-52.81-11.995-9.112-22.88-19.279-31.582-31.732-8.911-12.755-8.962-25.189-.186-37.985 12.124-17.677 28.633-30.522 46.151-42.228 33.421-22.333 70.003-38.241 107.59-51.897 34.959-12.7 98.406-29.643 158.58-44.152 46.115-11.119 66.985-15.982 143.218-26.866 110.47-12.783 138.906-8.269 186.678-9.323Z"
                        style={{
                            paintOrder: "stroke",
                            stroke: "#000",
                        }}
                    />
                </g>
            </svg>
        </div>
    );
};
export default MySqlDbIcon
