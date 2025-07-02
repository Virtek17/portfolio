import clsx from "clsx";
import { useState } from "react";

const ContactPage = () => {
  const initialServices = [
    {
      name: "Верстка блока",
      price: 2000,
      added: false,
    },
    {
      name: "Лендинг под ключ",
      price: 20000,
      added: false,
    },
    {
      name: "Натяжка верстки на Wordpress",
      price: 7000,
      added: false,
    },
    {
      name: "Магазин на Woocommerce",
      price: 80000,
      added: false,
    },
    {
      name: "Перенос на хостинг",
      price: 3000,
      added: false,
    },
  ];

  const [services, setServices] = useState(initialServices);

  const handleAdd = (index: number) => {
    setServices((prev) =>
      prev.map((service, i) =>
        i === index ? { ...service, added: !service.added } : service
      )
    );
  };

  const total = services
    .filter((s) => s.added)
    .reduce((sum, s) => sum + s.price, 0);

  const addedServicesList = services.filter((s) => s.added);

  const convertPrice = (price: number) => {
    const str = price.toString();

    if (str.length >= 4) {
      const arr = str.split("");
      const a = Math.ceil(str.length / 2 - 1);
      arr.splice(a, 0, " ");

      const cleanNumber = arr.join("") + " ₽";
      return cleanNumber;
    }
  };

  return (
    <div className="page-form">
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="services__item">
            <div className="services__name">{service.name}</div>
            <div className="services__price">{convertPrice(service.price)}</div>
            <button className="add" onClick={() => handleAdd(index)}>
              <svg
                className={clsx(
                  "btn-icon",
                  service.added ? "btn-icon--active" : ""
                )}
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 26H12C11.4333 26 10.9587 25.808 10.576 25.424C10.1933 25.04 10.0013 24.5653 10 24C9.99867 23.4347 10.1907 22.96 10.576 22.576C10.9613 22.192 11.436 22 12 22H22V12C22 11.4333 22.192 10.9587 22.576 10.576C22.96 10.1933 23.4347 10.0013 24 10C24.5653 9.99867 25.0407 10.1907 25.426 10.576C25.8113 10.9613 26.0027 11.436 26 12V22H36C36.5667 22 37.042 22.192 37.426 22.576C37.81 22.96 38.0013 23.4347 38 24C37.9987 24.5653 37.8067 25.0407 37.424 25.426C37.0413 25.8113 36.5667 26.0027 36 26H26V36C26 36.5667 25.808 37.042 25.424 37.426C25.04 37.81 24.5653 38.0013 24 38C23.4347 37.9987 22.96 37.8067 22.576 37.424C22.192 37.0413 22 36.5667 22 36V26Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="frame-row form-row">
        <form className="form">
          <div className="form__header">Заказать консультацию</div>
          <div className="input-row">
            <div className="text">Выберите удобный способ связи</div>
            <div className="radio-inputs">
              <label>
                <input className="radio-input tg" type="radio" name="engine" />
                <span className="radio-tile tg">
                  <span className="radio-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM33.28 17.6C32.98 20.76 31.68 28.44 31.02 31.98C30.74 33.48 30.18 33.98 29.66 34.04C28.5 34.14 27.62 33.28 26.5 32.54C24.74 31.38 23.74 30.66 22.04 29.54C20.06 28.24 21.34 27.52 22.48 26.36C22.78 26.06 27.9 21.4 28 20.98C28.0139 20.9164 28.012 20.8503 27.9946 20.7876C27.9772 20.7249 27.9447 20.6673 27.9 20.62C27.78 20.52 27.62 20.56 27.48 20.58C27.3 20.62 24.5 22.48 19.04 26.16C18.24 26.7 17.52 26.98 16.88 26.96C16.16 26.94 14.8 26.56 13.78 26.22C12.52 25.82 11.54 25.6 11.62 24.9C11.66 24.54 12.16 24.18 13.1 23.8C18.94 21.26 22.82 19.58 24.76 18.78C30.32 16.46 31.46 16.06 32.22 16.06C32.38 16.06 32.76 16.1 33 16.3C33.2 16.46 33.26 16.68 33.28 16.84C33.26 16.96 33.3 17.32 33.28 17.6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </label>

              <label>
                <input className="radio-input vk" type="radio" name="engine" />
                <span className="radio-tile vk">
                  <span className="radio-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.146 4H17.876C6.664 4 4 6.666 4 17.854V30.126C4 41.334 6.646 44 17.854 44H30.126C41.334 44 44 41.354 44 30.146V17.876C44 6.664 41.354 4 30.146 4ZM36.292 32.54H33.374C32.27 32.54 31.938 31.646 29.958 29.666C28.23 28 27.5 27.792 27.062 27.792C26.458 27.792 26.292 27.958 26.292 28.792V31.416C26.292 32.126 26.062 32.542 24.208 32.542C22.409 32.4198 20.6647 31.8726 19.1182 30.9454C17.5718 30.0181 16.2673 28.7373 15.312 27.208C13.0447 24.389 11.4681 21.0789 10.708 17.542C10.708 17.104 10.874 16.708 11.708 16.708H14.626C15.376 16.708 15.646 17.042 15.938 17.812C17.354 21.98 19.77 25.604 20.75 25.604C21.126 25.604 21.29 25.438 21.29 24.5V20.208C21.166 18.25 20.126 18.084 20.126 17.376C20.1394 17.1893 20.2249 17.0151 20.3646 16.8904C20.5042 16.7657 20.6869 16.7002 20.874 16.708H25.458C26.084 16.708 26.292 17.02 26.292 17.77V23.562C26.292 24.188 26.562 24.396 26.75 24.396C27.126 24.396 27.416 24.188 28.104 23.5C29.5817 21.6979 30.789 19.6901 31.688 17.54C31.7805 17.2821 31.9544 17.0614 32.1836 16.9112C32.4128 16.7611 32.6846 16.6898 32.958 16.708H35.876C36.75 16.708 36.936 17.146 36.75 17.77C35.689 20.1469 34.3762 22.4031 32.834 24.5C32.52 24.98 32.394 25.23 32.834 25.792C33.124 26.23 34.146 27.084 34.834 27.896C35.8334 28.8936 36.6636 30.0474 37.292 31.312C37.542 32.124 37.124 32.54 36.292 32.54Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </label>

              <label>
                <input
                  className="radio-input whatsap"
                  type="radio"
                  name="engine"
                />
                <span className="radio-tile whatsap">
                  <span className="radio-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.1001 9.82011C36.2662 7.96832 34.0821 6.50004 31.6751 5.50083C29.2681 4.50162 26.6863 3.99147 24.0801 4.00011C13.1601 4.00011 4.2601 12.9001 4.2601 23.8201C4.2601 27.3201 5.1801 30.7201 6.9001 33.7201L4.1001 44.0001L14.6001 41.2401C17.5001 42.8201 20.7601 43.6601 24.0801 43.6601C35.0001 43.6601 43.9001 34.7601 43.9001 23.8401C43.9001 18.5401 41.8401 13.5601 38.1001 9.82011ZM24.0801 40.3001C21.1201 40.3001 18.2201 39.5001 15.6801 38.0001L15.0801 37.6401L8.8401 39.2801L10.5001 33.2001L10.1001 32.5801C8.45519 29.9542 7.58195 26.9187 7.5801 23.8201C7.5801 14.7401 14.9801 7.34011 24.0601 7.34011C28.4601 7.34011 32.6001 9.06011 35.7001 12.1801C37.2353 13.7078 38.4519 15.5252 39.2793 17.5268C40.1068 19.5283 40.5285 21.6743 40.5201 23.8401C40.5601 32.9201 33.1601 40.3001 24.0801 40.3001ZM33.1201 27.9801C32.6201 27.7401 30.1801 26.5401 29.7401 26.3601C29.2801 26.2001 28.9601 26.1201 28.6201 26.6001C28.2801 27.1001 27.3401 28.2201 27.0601 28.5401C26.7801 28.8801 26.4801 28.9201 25.9801 28.6601C25.4801 28.4201 23.8801 27.8801 22.0001 26.2001C20.5201 24.8801 19.5401 23.2601 19.2401 22.7601C18.9601 22.2601 19.2001 22.0001 19.4601 21.7401C19.6801 21.5201 19.9601 21.1601 20.2001 20.8801C20.4401 20.6001 20.5401 20.3801 20.7001 20.0601C20.8601 19.7201 20.7801 19.4401 20.6601 19.2001C20.5401 18.9601 19.5401 16.5201 19.1401 15.5201C18.7401 14.5601 18.3201 14.6801 18.0201 14.6601H17.0601C16.7201 14.6601 16.2001 14.7801 15.7401 15.2801C15.3001 15.7801 14.0201 16.9801 14.0201 19.4201C14.0201 21.8601 15.8001 24.2201 16.0401 24.5401C16.2801 24.8801 19.5401 29.8801 24.5001 32.0201C25.6801 32.5401 26.6001 32.8401 27.3201 33.0601C28.5001 33.4401 29.5801 33.3801 30.4401 33.2601C31.4001 33.1201 33.3801 32.0601 33.7801 30.9001C34.2001 29.7401 34.2001 28.7601 34.0601 28.5401C33.9201 28.3201 33.6201 28.2201 33.1201 27.9801Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </label>
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="Имя"
                className="input"
                name="text"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="input"
                name="tel"
              />
              <input
                type="text"
                placeholder="ник тг/вк"
                className="input"
                name="other"
              />
            </div>
          </div>
          <div className="form__content">
            {addedServicesList.length > 0
              ? addedServicesList.map((service, index) => (
                  <div key={index} className="form-list__item">
                    <div>{service.name}</div>
                    <div>{convertPrice(service.price)}</div>
                  </div>
                ))
              : "Добавьте услугу"}
          </div>
          <div className="form__total">
            <div>Итого</div>
            <div>{total > 0 ? convertPrice(total) : "0 Р"}</div>
          </div>
          <div className="form__btn-row">
            <button className="form__btn button">Заказать</button>
          </div>
          <div className="frame__name">Форма</div>
          <div className="block block-1"></div>
          <div className="block block-2"></div>
          <div className="block block-3-form"></div>
          <div className="block block-4-form"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
