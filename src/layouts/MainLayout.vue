<template>
  <div class="w-screen h-screen flex justify-center">
    <div class="w-[550px] flex flex-col border-2 mt-[15px] pl-[40px]">
      <div
        class="flex items-center justify-between w-[255px] h-[11px] pt-[20px] pb-[35px]"
      >
        <span class="text-[11px] font-semibold">Сеанс гемодеализа</span>
        <span class="text-[8px] font-semibold"
          >№ месяце
          <span class="text-blue-500 text-[8px] font-semibold">4</span></span
        >
      </div>
      <span class="text-[11px] font-semibold pb-[20px]"
        >Назначения сеанса гемодеализа</span
      >
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px]"
          >Программа аппарата</span
        >
        <div class="flex w-[205px] justify-between pb-[18px]">
          <button
            class="border border-gray-300 text-gray-500 w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold"
          >
            HD
          </button>
          <button
            class="border border-gray-300 text-gray-500 w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold"
          >
            HDF
          </button>
          <button
            class="border border-gray-300 text-gray-500 w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold"
          >
            UF
          </button>
        </div>
      </div>
      <div>
        <span class="text-[8px] font-semibold pb-[10px]">Диализатор</span>
        <div class="pb-[20px] flex w-[150px] flex justify-between">
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center"
          >
            Спр."Диализатора"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-[215px]">
        <div class="flex justify-between pb-[10px]">
          <span class="text-[8px] font-semibold">Концентратор</span>
          <span class="text-[8px] font-semibold">Объем л.</span>
        </div>
        <div class="pb-[20px] flex justify-between">
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center"
          >
            Спр."Концентратора"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
          <button
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center"
          >
            10 л.
          </button>
        </div>
      </div>
      <div class=" ">
        <span class="text-[8px] font-semibold">Тип инъекции</span>
        <div class="flex justify-between w-[133px] pt-[18px] pb-[14px]">
          <button
            class="border border-gray-300 text-gray-500 w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold"
          >
            Игла
          </button>
          <button
            class="border border-gray-300 text-gray-500 w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold"
          >
            Катетер
          </button>
        </div>
      </div>
      <div>
        <div class="w-[244px] flex justify-between pb-[15px]">
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center"
          >
            Спр."Иглы"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center"
          >
            Спр."Тип иглы"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
        </div>
        <div class="w-[244px] flex justify-between pb-[7px]">
          <button
            class="border border-gray-300 text-[8px] text-gray-500 font-semibold w-[85px] h-[20px] flex items-center"
          >
            Спр."Катетеры"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
          <button
            class="border border-gray-300 text-[8px] text-gray-500 font-semibold w-[85px] h-[20px] flex items-center"
          >
            Спр."Тип Катетеров"
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="pb-[20px] flex justify-between w-[325px] items-end pb-[10px]">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Бикорбанат</span>
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center"
          >
            XXX гр / л
          </button>
        </div>

        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="10px"
            viewBox="0 0 24 24"
            width="10px"
            fill="#000000"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path
              d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
            />
          </svg>
        </button>
        <div class="w-[50px] h-[48px]">
          <p class="text-[8px] font-semibold pb-[4px]">Сухой вес пациента</p>
          <button
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center"
          >
            XXX кг
          </button>
        </div>
        <div>
          <span class="text-[8px] font-semibold">Антикоагуляция</span>
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center"
          >
            Наименования
          </button>
        </div>

        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="10px"
            viewBox="0 0 24 24"
            width="10px"
            fill="#000000"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path
              d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
            />
          </svg>
        </button>
        <div>
          <span class="text-[8px] font-semibold">Объем</span>
          <button
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center"
          >
            XXX ед
          </button>
        </div>
      </div>
      <div class=" ">
        <button
          class="border border-gray-500 w-[110px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
        >
          Сформировать сеанс
        </button>
        <div
          class="border w-[330px] h-[100px] mb-[20px] flex flex-col gap-[10px] pl-[15px]"
        >
          <span>Назначение сеанса гемодиализа</span>
          <div class="flex">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <rect fill="none" height="24" width="24" />
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g />
                  <g>
                    <polygon points="6,22 18,22 12,16" />
                    <path
                      d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z"
                    />
                  </g>
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]">- Программа</span>
            </div>
            <div class="flex pl-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M7,19h10v1c0,1.1-0.9,2-2,2H9c-1.1,0-2-0.9-2-2V19z M7,18h10v-5H7V18z M17,3v6l-3.15-0.66c-0.01,0-0.01,0.01-0.02,0.02 c1.55,0.62,2.72,1.98,3.07,3.64H7.1c0.34-1.66,1.52-3.02,3.07-3.64c-0.33-0.26-0.6-0.58-0.8-0.95L5,6.5v-1l4.37-0.91 C9.87,3.65,10.86,3,12,3c0.7,0,1.34,0.25,1.85,0.66L17,3z M13,6c-0.03-0.59-0.45-1-1-1s-1,0.45-1,1s0.45,1,1,1S13,6.55,13,6z"
                  />
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Диализатор</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <path
                    d="M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z"
                  />
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Концентратор Объем</span
              >
            </div>
            <div class="flex pl-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24" />
                <path
                  d="M11,5.5H8V4h0.5c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1H6v1.5H3c-0.55,0-1,0.45-1,1 c0,0.55,0.45,1,1,1V15c0,1.1,0.9,2,2,2h1v4l2,1.5V17h1c1.1,0,2-0.9,2-2V7.5c0.55,0,1-0.45,1-1C12,5.95,11.55,5.5,11,5.5z M9,9H7.25 C6.84,9,6.5,9.34,6.5,9.75c0,0.41,0.34,0.75,0.75,0.75H9V12H7.25c-0.41,0-0.75,0.34-0.75,0.75c0,0.41,0.34,0.75,0.75,0.75H9L9,15H5 V7.5h4V9z M19.5,10.5V10c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-5c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1v0.5c0,0.5-1.5,1.16-1.5,3V20 c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-6.5C21,11.66,19.5,11,19.5,10.5z M16.5,10.5V10h1v0.5c0,1.6,1.5,2,1.5,3V14h-4 c0-0.21,0-0.39,0-0.5C15,12.5,16.5,12.1,16.5,10.5z M19,15.5V17h-4c0-0.51,0-1.02,0-1.5H19z M15,20c0,0,0-0.63,0-1.5h4V20H15z"
                />
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Игла/Катетер</span
              >
            </div>
            <div class="flex pl-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <path
                    d="M14,11V8c4.56-0.58,8-3.1,8-6H2c0,2.9,3.44,5.42,8,6l0,3c-3.68,0.73-8,3.61-8,11h6v-2H4.13c0.93-6.83,6.65-7.2,7.87-7.2 s6.94,0.37,7.87,7.2H16v2h6C22,14.61,17.68,11.73,14,11z M18.87,4C17.5,5.19,15,6.12,12,6.12C9,6.12,6.5,5.19,5.13,4H18.87z M12,22 c-1.1,0-2-0.9-2-2c0-0.55,0.22-1.05,0.59-1.41C11.39,17.79,16,16,16,16s-1.79,4.61-2.59,5.41C13.05,21.78,12.55,22,12,22z"
                  />
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Бикорбанат мл</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <path
                    d="M14,11V8c4.56-0.58,8-3.1,8-6H2c0,2.9,3.44,5.42,8,6l0,3c-3.68,0.73-8,3.61-8,11h6v-2H4.13c0.93-6.83,6.65-7.2,7.87-7.2 s6.94,0.37,7.87,7.2H16v2h6C22,14.61,17.68,11.73,14,11z M18.87,4C17.5,5.19,15,6.12,12,6.12C9,6.12,6.5,5.19,5.13,4H18.87z M12,22 c-1.1,0-2-0.9-2-2c0-0.55,0.22-1.05,0.59-1.41C11.39,17.79,16,16,16,16s-1.79,4.61-2.59,5.41C13.05,21.78,12.55,22,12,22z"
                  />
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Антикоагуляция ед.</span
              >
            </div>
            <div class="flex pl-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="12px"
                viewBox="0 0 24 24"
                width="12px"
                fill="#000000"
              >
                <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                <g>
                  <g>
                    <path
                      d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M12,6 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,6,12,6z M11,9.5h-1v-1h1V9.5z M12.5,9.5h-1v-1h1V9.5z M14,9.5h-1v-1h1V9.5z"
                    />
                  </g>
                </g>
              </svg>
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Сухой вес кг</span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class=" ">Назначение после сеанса</span>
        <div class="flex flex-col pt-[20px]">
          <span class="text-[8px] font-semibold pb-[7px]"
            >Лекарственный препарат</span
          >
          <div class="w-[235px] flex justify-between pb-[7px]">
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Препараты"
            </button>
            <button
              class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="10px"
                viewBox="0 0 24 24"
                width="10px"
                fill="#000000"
              >
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path
                  d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-[235px] flex justify-between pb-[20px]">
          <div class="w-[94px] flex justify-between pb-[7px]">
            <span class="text-[8px] font-semibold pb-[7px]">Путь приёма</span>
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Путь приёма"
            </button>
          </div>
          <div class="w-[135px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[7px]">Дозировка</span>
            <div class="w-[134px] flex justify-between pb-[7px]">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[106px] h-[20px] flex items-center justify-start"
              >
                Спр."Дозы препаратов"
              </button>
              <button
                class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#000000"
                >
                  <path d="M0,0h24v24H0V0z" fill="none" />
                  <path
                    d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="text-[8px] font-semibold">Номер сеансов:</span>
        <div class="flex w-[206px] justify-between pt-[10px] pb-[27px] ">
          <button
            class="border bg-blue-500 text-white w-[23px] h-[20px] text-[9px] justify-center flex items-center"
          >
            1
          </button>
          <button
            class="border bg-blue-500 text-white text-[9px] w-[23px] h-[20px] justify-center flex items-center"
          >
            2
          </button>
          <button
            class="border bg-blue-500 text-white text-[9px] w-[23px] h-[20px] justify-center flex items-center"
          >
            3
          </button>
          <button
            class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
          >
            4
          </button>
          <button
            class="border border-gray-300 text-[9px] w-[23px] h-[20px] justify-center flex items-center"
          >
            5
          </button>
          <button
            class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
          >
            6
          </button>
          <button
            class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
          >
            7
          </button>
        </div>
      </div>
      <div class="flex w-[290px] justify-between pb-[20px]">
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Начало приёма</span>
        <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Конец приёма</span>
          <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
         <span class="text-[8px] font-semibold flex items-end">Количество сеансов: <span class="text-[8px] font-semibold text-blue-500 pl-[5px] "> 3</span></span>
      </div>
      <div>
        <button
          class="border border-gray-500 w-[68px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
        >
          Сформировать
        </button>
        <div>
          <span class="text-[8px] font-semibold  ">Список назначений после сеанса</span>
          <table class="w-[470px] h-[72] border mt-[10px] mb-[35px] ">
            <thead>
              <tr class="text-[6px] font-semibold">
                <th class="border">Лекарственный препарат</th>
                <th class="border">Путь приёма</th>
                <th class="border">Дозировка</th>
                <th class="border">Начало приёма</th>
                <th class="border">Конец приёма</th>
                <th class="border">Номер сеанса</th>
                <th class="border">Дней</th>
                <th class="border"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-[6px] font-semibold">
                <th class="border">Лекарственный препарат №1</th>
                <th class="border">Перорально</th>
                <th class="border">20 мл</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">1,2,3</th>
                <th class="border">3</th>
                <th class="border pl-[7px] "><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="8px" viewBox="0 0 24 24" width="8px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,2 11.5,2 10.5,1 5.5,1 4.5,2 1,2 1,4 15,4"/><path d="M16,9c-0.7,0-1.37,0.1-2,0.29V5H2v12c0,1.1,0.9,2,2,2h5.68c1.12,2.36,3.53,4,6.32,4c3.87,0,7-3.13,7-7 C23,12.13,19.87,9,16,9z M9,16c0,0.34,0.03,0.67,0.08,1H4V7h8v3.26C10.19,11.53,9,13.62,9,16z M16,21c-2.76,0-5-2.24-5-5 s2.24-5,5-5s5,2.24,5,5S18.76,21,16,21z"/><polygon points="16.5,12 15,12 15,17 18.6,19.1 19.4,17.9 16.5,16.2"/></g></g></svg></th>
              </tr>
              <tr class="text-[6px] font-semibold">
                <th class="border">Лекарственный препарат №2</th>
                <th class="border">Внутривенно</th>
                <th class="border">150 мл</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">5</th>
                <th class="border">1</th>
                <th class="border pl-[7px]"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="8px" viewBox="0 0 24 24" width="8px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,2 11.5,2 10.5,1 5.5,1 4.5,2 1,2 1,4 15,4"/><path d="M16,9c-0.7,0-1.37,0.1-2,0.29V5H2v12c0,1.1,0.9,2,2,2h5.68c1.12,2.36,3.53,4,6.32,4c3.87,0,7-3.13,7-7 C23,12.13,19.87,9,16,9z M9,16c0,0.34,0.03,0.67,0.08,1H4V7h8v3.26C10.19,11.53,9,13.62,9,16z M16,21c-2.76,0-5-2.24-5-5 s2.24-5,5-5s5,2.24,5,5S18.76,21,16,21z"/><polygon points="16.5,12 15,12 15,17 18.6,19.1 19.4,17.9 16.5,16.2"/></g></g></svg></th>
              </tr>
              <tr class="text-[6px] font-semibold">
                <th class="border">Лекарственный препарат №3</th>
                <th class="border">Перорально</th>
                <th class="border">20 мл</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">DD.MM.YYYY</th>
                <th class="border">6, 7</th>
                <th class="border">2</th>
                <th class=" border pl-[7px]"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="8px" viewBox="0 0 24 24" width="8px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,2 11.5,2 10.5,1 5.5,1 4.5,2 1,2 1,4 15,4"/><path d="M16,9c-0.7,0-1.37,0.1-2,0.29V5H2v12c0,1.1,0.9,2,2,2h5.68c1.12,2.36,3.53,4,6.32,4c3.87,0,7-3.13,7-7 C23,12.13,19.87,9,16,9z M9,16c0,0.34,0.03,0.67,0.08,1H4V7h8v3.26C10.19,11.53,9,13.62,9,16z M16,21c-2.76,0-5-2.24-5-5 s2.24-5,5-5s5,2.24,5,5S18.76,21,16,21z"/><polygon points="16.5,12 15,12 15,17 18.6,19.1 19.4,17.9 16.5,16.2"/></g></g></svg></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <span class=" ">Лечение на дому</span>
        <div class="flex flex-col pt-[20px]">
          <span class="text-[8px] font-semibold pb-[7px]"
            >Лекарственный препарат</span
          >
          <div class="w-[235px] flex justify-between pb-[7px]">
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Препараты"
            </button>
            <button
              class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="10px"
                viewBox="0 0 24 24"
                width="10px"
                fill="#000000"
              >
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path
                  d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-[235px] flex justify-between pb-[20px]">
          <div class="w-[100px] flex justify-between pb-[7px]">
            <span class="text-[8px] font-semibold pb-[7px]">Путь приёма</span>
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Путь приёма"
            </button>
          </div>
          <div class="w-[130px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[7px]">Дозировка</span>
            <div class="w-[125px] flex justify-between pb-[7px]">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[95px] h-[20px] flex items-center justify-start"
              >
                Спр."Дозы препаратов"
              </button>
              <button
                class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#000000"
                >
                  <path d="M0,0h24v24H0V0z" fill="none" />
                  <path
                    d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-[321px] justify-between pb-[10px]">
          <div class="w-[130px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[10px]">Кратность приёма</span>
            <div class="w-[127px] flex justify-between">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[100px] h-[20px] flex items-center justify-start"
              >
                Спр."Кратность приёма"
              </button>
              <button
                class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#000000"
                >
                  <path d="M0,0h24v24H0V0z" fill="none" />
                  <path
                    d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
                  />
                </svg>
              </button>
            </div>
          </div>
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Начало приёма</span>
        <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Конец приёма</span>
          <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
      </div>
      <span class="text-[8px] font-semibold pb-[7px] flex w-[321px] justify-end">Количество дней <span class="text-[8px] font-semibold text-blue-500 pl-[5px] ">5</span></span>
      <div class="mb-[20px] ">
        <button
          class="border border-gray-500 w-[60px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
        >
          Добавить
        </button>
        <span class="text-[8px] font-semibold ">Лечение на дому</span>
        <div class="w-[330px] h-[105px] border mt-[10px] pl-[10px] flex flex-col pt-[15px] gap-[15px] ">
          <span class="text-[8px] font-semibold ">Лекарственный препарат Перорально 5 мг</span>
          <span class="text-[8px] font-semibold ">2 раза в день утром и вечером с 01.01.2022 по 10.01.2022 10 дней</span>
        </div>
      </div>
      <div>
        <span class="text-[15px] font-semibold  ">Рекомендации</span>
            <div class="w-[330px] flex justify-between mt-[15px]">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[300px] h-[20px] flex items-center justify-start"
              >
                Текст рекомендации врача
              </button>
              <button
                class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 24 24" width="12px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
            </div>
        <div class="w-[330px] h-[56px] border mt-[10px] mb-[10px] pl-[5px] flex flex-col pt-[10px] gap-[15px] ">
          <span class="text-[8px] font-semibold ">Рекомендации лечащего врача</span>
        </div>
      </div>
      <div class="w-[300px] flex justify-between mb-[20px] ">
        <input class="w-[87px] h-[21px] text-[8px] " type="date">
        <input class="w-[87px] h-[21px] text-[8px] " placeholder="ФИО лечащего врача" type="text">
        <input class="w-[87px] h-[21px] text-[8px] " placeholder="Должность" type="text">
      </div>
        <button
          class="border border-gray-500 w-[110px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
        >
          Сохранить назначения
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
