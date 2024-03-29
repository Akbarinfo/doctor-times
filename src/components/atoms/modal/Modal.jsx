import { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { PatternFormat } from "react-number-format";

export default function Modal({ doctor, info, setOpen }) {
  const formRef = useRef();
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [close, setClose] = useState(true);
  const [numberError, setNumberError] = useState(false);

  const closeHandler = () => {
    setClose(false);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const resetForm = () => {
    setNumber("");
    formRef?.current?.reset();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (+number.includes("_") || number == "") {
      setNumberError(true);
    }

    if (!number.includes("_") && number != "") {
      setSuccess(true);
    }
  };

  return (
    <>
      <div
        className={`openPhoto__black ${close ? "" : "openPhoto__close"}`}
      ></div>
      <section className={`openPhoto ${close ? "" : "openPhoto__close-big"}`}>
        <div className="openPhoto__bigbox">
          <div className="relative flex justify-center items-center">
            <div className="relative w-[595px] bg-white rounded-2xl p-8">
              <button
                onClick={() => closeHandler()}
                className="absolute top-4 right-4 text-color text-4xl"
              >
                <MdClose />
              </button>

              <h2 className="text-2xl gilroyM mb-6">Запись к врачу</h2>

              <div
                className={`${
                  success && "flex justify-center items-center flex-col"
                }`}
              >
                {success && (
                  <div className="flex flex-col justify-center items-center mb-8">
                    <FiCheckCircle className="block text-6xl text-[#01B569] mb-6" />

                    <p className="text-color text-3xl gilroyM mb-5">
                      Вы успешно записались!
                    </p>
                    <p className="text-color gilroyR">
                      Желаем вам крепкого здоровья
                    </p>
                  </div>
                )}

                <p className="flex text-color text-base gilroyM">
                  <span className="gilroyR text-[14px] text-color-gray mr-1">
                    Врач:
                  </span>
                  {doctor.name}
                </p>
                <div className="flex gap-16 mb-8">
                  <p className="flex text-color text-base gilroyM">
                    <span className="gilroyR text-[14px] text-color-gray mr-1">
                      Дата:
                    </span>
                    {info?.day} {info?.month}, {info?.time}
                  </p>

                  {!success && (
                    <button className="gilroyM primary-color text-base">
                      Изменить
                    </button>
                  )}
                </div>
              </div>
              {success && (
                <button
                  type="button"
                  onClick={() => closeHandler()}
                  className="bg-[#42b2fc] border border-[#42b2fc] rounded-lg w-full py-[14px] text-base text-white gilroyM transition hover:bg-transparent hover:text-[#42b2fc]"
                >
                  Закрыть
                </button>
              )}
              {!success && (
                <form ref={formRef} onSubmit={(e) => onSubmit(e)}>
                  <label htmlFor="" className="block mb-7">
                    <p className="text-base gilroyR text-color">
                      Ваше фамилия <span className="text-[red]">*</span>
                    </p>

                    <input
                      required
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full"
                    />
                  </label>
                  <label htmlFor="" className="block mb-7">
                    <p className="text-base gilroyR text-color">
                      Ваше имя <span className="text-[red]">*</span>
                    </p>

                    <input
                      required
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full"
                    />
                  </label>

                  <span className="flex gap-6 justify-between">
                    <label htmlFor="" className="block mb-7 flex-grow">
                      <p className="text-base gilroyR text-color">
                        Номер телефона <span className="text-[red]">*</span>
                      </p>
                      <PatternFormat
                        mask="_"
                        required
                        value={number}
                        allowEmptyFormatting
                        format="+998 ## ### ####"
                        onChange={(e) => {
                          setNumber(e.target.value);
                          if (!+number.includes("_")) {
                            setNumberError(false);
                          }
                        }}
                        className={`bg-[#F5F7FA] rounded-lg border outline-none text-base gilroyM text-color px-3 py-2 w-full ${
                          numberError
                            ? "border-[#E53835] text-[#e53835]"
                            : "border-[#ABBED1]"
                        }`}
                      />
                    </label>

                    <label htmlFor="" className="block mb-7 flex-grow">
                      <p className="text-base gilroyR text-color">
                        Серия и номер паспорта{" "}
                        <span className="text-[red]">*</span>
                      </p>

                      <input
                        required
                        type="text"
                        name="check"
                        id="check"
                        className="bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full"
                      />
                    </label>
                  </span>

                  <label htmlFor="" className="block mb-7">
                    <p className="text-base gilroyR text-color">
                      Что вас беспокоит?
                    </p>

                    <textarea
                      id="what"
                      name="what"
                      className="bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full min-h-24 resize-none"
                    />
                  </label>

                  <label
                    htmlFor=""
                    className="flex mb-7 items-center justify-between"
                  >
                    <span className="flex">
                      <input
                        required
                        id="check"
                        name="check"
                        type="checkbox"
                        className="w-[22px] h-[22px] rounded-2xl"
                      />

                      <p className="text-base gilroyR text-color ml-2">
                        Я согласен(а) с правилами пользования
                      </p>
                    </span>

                    <button
                      type="button"
                      onClick={() => resetForm()}
                      className="text-base gilroyR text-[#E53835]"
                    >
                      Очистить
                    </button>
                  </label>

                  <button
                    type="submit"
                    className="bg-[#42b2fc] border border-[#42b2fc] rounded-lg w-full py-[14px] text-base text-white gilroyM transition hover:bg-transparent hover:text-[#42b2fc]"
                  >
                    Записаться
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
