import React, { FC } from 'react'

export const icons = {
  calendar: <path fillRule="evenodd" clipRule="evenodd" d="M16.9933 2.88338C16.9355 2.38604 16.5128 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3L8.99327 2.88338C8.93551 2.38604 8.51284 2 8 2C7.44772 2 7 2.44772 7 3V4H6C4.34315 4 3 5.34315 3 7V11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11V7C21 5.34315 19.6569 4 18 4H17V3L16.9933 2.88338ZM19 10V7C19 6.44772 18.5523 6 18 6H17V7C17 7.55228 16.5523 8 16 8C15.4872 8 15.0645 7.61396 15.0067 7.11662L15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.48716 8 7.06449 7.61396 7.00673 7.11662L7 7V6H6C5.44772 6 5 6.44772 5 7V10H19ZM5 12H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V12ZM12.9933 14.8834C12.9977 14.9216 13 14.9606 13 15V18C13 18.5523 12.5523 19 12 19C11.4872 19 11.0645 18.614 11.0067 18.1166L11 18V16C10.4477 16 10 15.5523 10 15C10 14.4872 10.386 14.0645 10.8834 14.0067L11 14H12C12.5128 14 12.9355 14.386 12.9933 14.8834C12.9933 14.8834 12.9933 14.8834 12.9933 14.8834Z" fill="currentColor"/>,
  check: <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289C21.0676 6.65338 21.0953 7.22061 20.7903 7.6129L20.7071 7.70711L10.7071 17.7071C10.3466 18.0676 9.77939 18.0953 9.3871 17.7903L9.29289 17.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.65338 10.9324 5.22061 10.9047 5.6129 11.2097L5.70711 11.2929L10 15.585L19.2929 6.29289Z" fill="currentColor"/>,
  chevron: <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.65338 7.93241 6.22061 7.90468 6.6129 8.2097L6.70711 8.29289L12 13.585L17.2929 8.29289C17.6534 7.93241 18.2206 7.90468 18.6129 8.2097L18.7071 8.29289C19.0676 8.65338 19.0953 9.22061 18.7903 9.6129L18.7071 9.70711L12.7071 15.7071C12.3466 16.0676 11.7794 16.0953 11.3871 15.7903L11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="currentColor"/>,
  close: <path fillRule="evenodd" clipRule="evenodd" d="M6.61339 5.2097C6.2211 4.90468 5.65387 4.93241 5.29338 5.29289C4.90286 5.68342 4.90286 6.31658 5.29338 6.70711L10.5863 12L5.29338 17.2929L5.21019 17.3871C4.90517 17.7794 4.9329 18.3466 5.29338 18.7071C5.68391 19.0976 6.31707 19.0976 6.7076 18.7071L12.0005 13.4142L17.2934 18.7071L17.3876 18.7903C17.7799 19.0953 18.3471 19.0676 18.7076 18.7071C19.0981 18.3166 19.0981 17.6834 18.7076 17.2929L13.4147 12L18.7076 6.70711L18.7908 6.6129C19.0958 6.22061 19.0681 5.65338 18.7076 5.29289C18.3171 4.90237 17.6839 4.90237 17.2934 5.29289L12.0005 10.5858L6.7076 5.29289L6.61339 5.2097Z" fill="currentColor"/>,
  eyeClosed: <path fillRule="evenodd" clipRule="evenodd" d="M2.29363 2.29289C2.65411 1.93241 3.22134 1.90468 3.61363 2.2097L3.70784 2.29289L17.9831 16.5681C18.039 16.6129 18.0907 16.6643 18.1371 16.7221L21.7078 20.2929C22.0984 20.6834 22.0984 21.3166 21.7078 21.7071C21.3474 22.0676 20.7801 22.0953 20.3878 21.7903L20.2936 21.7071L17.2067 18.6201C15.6027 19.538 13.863 19.9998 12.0007 19.9998C7.60513 19.9998 3.96421 17.4512 1.1325 12.496C0.95679 12.1885 0.956811 11.811 1.13256 11.5036C2.32343 9.42019 3.65339 7.76392 5.12772 6.5412L2.29363 3.70711C1.9031 3.31658 1.9031 2.68342 2.29363 2.29289ZM6.54924 7.96272C5.41004 8.87476 4.34657 10.1099 3.36243 11.673L3.16173 11.9998L3.27932 12.1939C5.63075 15.9933 8.42624 17.8899 11.7097 17.9952L12.0007 17.9998C13.3266 17.9998 14.565 17.7153 15.7287 17.1422L13.2953 14.7088C12.1791 15.2435 10.8008 15.0481 9.87634 14.1229C8.95236 13.1983 8.75767 11.8209 9.29201 10.7055L6.54924 7.96272ZM11.2356 12.6491L11.3517 12.7652C11.3309 12.7475 11.3107 12.7289 11.2911 12.7092C11.2716 12.6898 11.2531 12.6697 11.2356 12.6491ZM11.9998 3.99983C16.3954 3.99983 20.0364 6.54848 22.8681 11.5037C23.0438 11.8112 23.0438 12.1887 22.868 12.4962C22.0532 13.9216 21.1752 15.1454 20.2312 16.1666C19.8563 16.5722 19.2237 16.5971 18.8181 16.2223C18.4125 15.8474 18.3876 15.2147 18.7625 14.8091C19.4128 14.1055 20.0354 13.2829 20.6295 12.3406L20.8388 11.9999L20.7213 11.8058C18.3698 8.00638 15.5741 6.10975 12.2876 6.00447L11.9964 5.99982C11.1987 5.99705 10.4047 6.10697 9.63788 6.32632C9.10689 6.47822 8.55331 6.17091 8.40141 5.63992C8.24952 5.10894 8.55683 4.55535 9.08781 4.40345C10.0357 4.13228 11.0173 3.99641 11.9998 3.99983Z" fill="currentColor"/>,
  logout: <path fillRule="evenodd" clipRule="evenodd" d="M14.9949 5.82373C14.9037 4.24892 13.5977 3 12 3H5L4.82373 3.00509C3.24892 3.09634 2 4.40232 2 6V18L2.00509 18.1763C2.09634 19.7511 3.40232 21 5 21H12L12.1763 20.9949C13.7511 20.9037 15 19.5977 15 18V16L14.9933 15.8834C14.9355 15.386 14.5128 15 14 15C13.4477 15 13 15.4477 13 16V18L12.9933 18.1166C12.9355 18.614 12.5128 19 12 19H5L4.88338 18.9933C4.38604 18.9355 4 18.5128 4 18V6L4.00673 5.88338C4.06449 5.38604 4.48716 5 5 5H12L12.1166 5.00673C12.614 5.06449 13 5.48716 13 6V8L13.0067 8.11662C13.0645 8.61396 13.4872 9 14 9C14.5523 9 15 8.55228 15 8V6L14.9949 5.82373ZM18.7071 8.29289L18.6129 8.2097L18.5114 8.14038C18.1275 7.91161 17.6233 7.96245 17.2929 8.29289L17.2097 8.3871C16.9047 8.77939 16.9324 9.34662 17.2929 9.70711L18.585 11H7L6.88338 11.0067C6.38604 11.0645 6 11.4872 6 12C6 12.5523 6.44772 13 7 13H18.584L17.2929 14.2929L17.2097 14.3871C16.9047 14.7794 16.9324 15.3466 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6663 12.7489C21.7702 12.6552 21.8527 12.5407 21.9101 12.4151L21.9506 12.3111L21.9871 12.1651C22.0387 11.8678 21.9589 11.5446 21.7071 11.2929L18.7071 8.29289Z" fill="currentColor"/>,
  minus: <path fillRule="evenodd" clipRule="evenodd" d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5128 19.614 12.9355 19.1166 12.9933L19 13H5C4.44772 13 4 12.5523 4 12C4 11.4872 4.38604 11.0645 4.88338 11.0067L5 11H19Z" fill="currentColor"/>,
  plus: <path fillRule="evenodd" clipRule="evenodd" d="M12.9933 4.88338C12.9355 4.38604 12.5128 4 12 4C11.4477 4 11 4.44772 11 5V11H5L4.88338 11.0067C4.38604 11.0645 4 11.4872 4 12C4 12.5523 4.44772 13 5 13H11V19L11.0067 19.1166C11.0645 19.614 11.4872 20 12 20C12.5523 20 13 19.5523 13 19V13H19L19.1166 12.9933C19.614 12.9355 20 12.5128 20 12C20 11.4477 19.5523 11 19 11H13V5L12.9933 4.88338Z" fill="currentColor"/>,
  question: <path fillRule="evenodd" clipRule="evenodd" d="M11 14.9999C11 15.5522 11.4477 15.9999 12 15.9999C12.5523 15.9999 13 15.5522 13 14.9999C12.8512 13.7942 13.3874 12.6061 14.39 11.9199C16.0185 11.3181 17.0729 9.73455 17 7.99993C16.8552 5.656 14.8447 3.86896 12.5 3.99993H11.5C9.15526 3.86896 7.14484 5.656 7 7.99993C7 8.55221 7.44772 8.99993 8 8.99993C8.55228 8.99993 9 8.55221 9 7.99993C9.15643 6.76749 10.2633 5.88201 11.5 5.99993H12.5C13.7541 5.88352 14.8685 6.79737 15 8.04993C15.0509 8.93822 14.5089 9.75332 13.67 10.0499H13.58C11.8209 11.0485 10.8111 12.986 11 14.9999ZM11 18.9999C11 19.5522 11.4477 19.9999 12 19.9999C12.5523 19.9999 13 19.5522 13 18.9999C13 18.4476 12.5523 17.9999 12 17.9999C11.4477 17.9999 11 18.4476 11 18.9999Z" fill="currentColor"/>,
  eyeOpened: <path fillRule="evenodd" clipRule="evenodd" d="M12 4C16.2909 4 19.8627 6.4287 22.6646 11.154L22.8844 11.5329L22.9302 11.6328L22.9591 11.716L22.9736 11.7706L22.988 11.853L22.999 11.9535L22.9982 12.0639L22.9849 12.1744C22.9784 12.2112 22.9698 12.2477 22.9591 12.284L22.9203 12.3916L22.8844 12.4671L22.8682 12.4962C20.1039 17.3334 16.5685 19.8773 12.3127 19.9957L12 20C7.6044 20 3.96348 17.4514 1.13177 12.4962C0.956077 12.1887 0.956077 11.8113 1.13177 11.5038C3.96348 6.54862 7.6044 4 12 4ZM12 6C8.59033 6 5.69918 7.89478 3.27859 11.8059L3.161 12L3.27859 12.1941C5.63002 15.9935 8.42551 17.8901 11.709 17.9954L12 18C15.4097 18 18.3008 16.1052 20.7214 12.1941L20.838 12L20.7214 11.8059C18.37 8.00652 15.5745 6.10992 12.291 6.00464L12 6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11Z" fill="currentColor"/>,
  thumbsDown: <path fillRule="evenodd" clipRule="evenodd" d="M16.9152 3.00348C18.3212 2.88387 19.484 3.98805 19.9305 5.60706L19.9806 5.80377L20.9806 10.8038L21 10.9999C21 12.5976 19.7511 13.9035 18.1763 13.9948L18 13.9999L16 13.9989V17.9999C16 19.5976 14.7511 20.9035 13.1763 20.9948L13 20.9999C11.4023 20.9999 10.0963 19.751 10.0051 18.1762L10 17.9999V16.9999C10 15.4022 8.75108 14.0962 7.17627 14.005L7 13.9999H4C2.94564 13.9999 2.08183 13.184 2.00549 12.1491L2 11.9999V4.99988C2 3.94552 2.81588 3.08172 3.85074 3.00537L4 2.99988H6C6.59336 2.99988 7.12638 3.25828 7.49265 3.66869L7.6 3.79988L7.66785 3.74973C8.27388 3.3141 9.00671 3.04379 9.80036 3.00478L10 2.99988L16.9152 3.00348ZM17.0863 5.00039L10 4.99988C8.94564 4.99988 8.08183 5.81576 8.00549 6.85062L8 6.99888V12.1009L8.05897 12.1122C10.2435 12.5833 11.8972 14.4818 11.9954 16.783L12 16.9999V17.9999C12 18.5522 12.4477 18.9999 13 18.9999C13.5128 18.9999 13.9355 18.6138 13.9933 18.1165L14 17.9999V12.9999C14 12.487 14.386 12.0644 14.8834 12.0066L15 11.9999H18C18.5128 11.9999 18.9355 11.6138 18.9933 11.1165L18.995 11.0769L18.0264 6.22812C17.8463 5.45999 17.4614 5.03305 17.0863 5.00039ZM4 11.9999L6 11.9989V4.99988H4V11.9999Z" fill="currentColor"/>,
  thumbsUp: <path fillRule="evenodd" clipRule="evenodd" d="M13 3C14.5977 3 15.9037 4.24892 15.9949 5.82373L16 6V10H18C19.5977 10 20.9037 11.2489 20.9949 12.8237L21 13L20.9806 13.1961L19.9736 18.2282C19.5925 19.8538 18.4721 21.0241 17.1644 21.0082L17 21H10C9.12973 21 8.32438 20.7221 7.66785 20.2502L7.6 20.199C7.26046 20.6501 6.74061 20.9509 6.14926 20.9945L6 21H4C2.94564 21 2.08183 20.1841 2.00549 19.1493L2 19V12C2 10.9456 2.81588 10.0818 3.85074 10.0055L4 10H7C8.59768 10 9.90366 8.75108 9.99491 7.17627L10 7V6C10 4.34315 11.3431 3 13 3ZM13 5C12.4872 5 12.0645 5.38604 12.0067 5.88338L12 6V7C12 9.39808 10.3118 11.4018 8.05897 11.8876L8 11.898V17C8 18.0544 8.81588 18.9182 9.85074 18.9945L10 19L17.0848 19.0036C17.3784 19.0286 17.7714 18.6583 17.9757 17.9687L18.0194 17.8039L18.995 12.921L18.9933 12.8834C18.94 12.4243 18.5757 12.06 18.1166 12.0067L18 12H15C14.4872 12 14.0645 11.614 14.0067 11.1166L14 11V6C14 5.44772 13.5523 5 13 5ZM6 19V12H4V19H6Z" fill="currentColor"/>,
  upload: <>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.4341 6.03593C10.8361 5.55756 8.45415 7.08609 7.97892 9.21978C7.87705 9.67714 7.47114 10.0025 7.00237 10.0025C4.9122 10.0025 3.30071 11.6054 3.30071 13.5025C3.30071 15.3883 4.92085 17.0025 7.01238 17.0025C7.56491 17.0025 8.01283 17.4502 8.01283 18.0025C8.01283 18.5548 7.56491 19.0025 7.01238 19.0025C3.90156 19.0025 1.2998 16.5767 1.2998 13.5025C1.2998 10.6749 3.47888 8.40743 6.241 8.05122C7.30488 5.15086 10.5739 3.47623 13.7953 4.06878C16.8629 4.62593 19.1289 7.11088 19.114 10.0039C21.5421 10.0654 23.4998 12.0474 23.4998 14.5025C23.4998 16.9848 21.4812 19.0025 18.9978 19.0025H17.9973C17.4448 19.0025 16.9969 18.5548 16.9969 18.0025C16.9969 17.4502 17.4448 17.0025 17.9973 17.0025H18.9978C20.3761 17.0025 21.4989 15.8802 21.4989 14.5025C21.4989 13.1166 20.378 12.0025 18.9978 12.0025H17.9973C17.6932 12.0025 17.4056 11.8642 17.2157 11.6267C17.0259 11.3892 16.9544 11.0783 17.0215 10.7818C17.4949 8.69057 16.0071 6.50276 13.4367 6.0364L13.4341 6.03593Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.3072 11.2954C11.6979 10.9048 12.3314 10.9048 12.7221 11.2954L15.7234 14.2954C16.1141 14.6859 16.1141 15.3191 15.7234 15.7096C15.3327 16.1001 14.6993 16.1001 14.3086 15.7096L12.0146 13.4167L9.72071 15.7096C9.33 16.1001 8.69655 16.1001 8.30585 15.7096C7.91515 15.3191 7.91515 14.6859 8.30585 14.2954L11.3072 11.2954Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0146 11.0025C12.5672 11.0025 13.0151 11.4502 13.0151 12.0025V21.0025C13.0151 21.5548 12.5672 22.0025 12.0146 22.0025C11.4621 22.0025 11.0142 21.5548 11.0142 21.0025V12.0025C11.0142 11.4502 11.4621 11.0025 12.0146 11.0025Z" fill="currentColor"/>
  </>,
  user: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4ZM18.9954 18.7831C18.8818 16.1223 16.6888 14 14 14H10L9.78311 14.0046C7.12231 14.1182 5 16.3112 5 19V21L5.00673 21.1166C5.06449 21.614 5.48716 22 6 22C6.55228 22 7 21.5523 7 21V19L7.00509 18.8237C7.09634 17.2489 8.40232 16 10 16H14L14.1763 16.0051C15.7511 16.0963 17 17.4023 17 19V21L17.0067 21.1166C17.0645 21.614 17.4872 22 18 22C18.5523 22 19 21.5523 19 21V19L18.9954 18.7831Z" fill="currentColor"/>
}

type IconTypes = keyof typeof icons

type IconProps = {
  id: IconTypes,
  size?: number,
}

export const Icon: FC<IconProps> = ({ id, size = 24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {icons[id]}
  </svg>
)
