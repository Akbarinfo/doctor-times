import { MdClose } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { PatternFormat } from "react-number-format";
import { useEffect, useRef, useState } from "react";

export default function Modal({ doctor, info, setOpen }) {
  const formRef = useRef();
  const [number, setNumber] = useState("");
  const [close, setClose] = useState(true);
  const [captcha, setCaptcha] = useState();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaText, setCaptchaText] = useState();
  const [captchaCode, setCaptchaCode] = useState([""]);
  const [numberError, setNumberError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  function generateCaptcha() {
    const letters = "acefghijklmnorstuvwxyz";
    function randomColor() {
      const randomRotation = Math.floor(Math.random() * 180) + 1; // Tasodifiy gradus
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16); // Tasodifiy rang
      return {
        color: randomColor,
        rotation: randomRotation,
      };
    }

    const captchaArray = [];
    const captchaLetter = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      captchaArray.push({
        ...randomColor(),
        letter: letters.charAt(randomIndex),
      });
      captchaLetter.push(letters.charAt(randomIndex));
    }
    setCaptchaCode(captchaLetter);
    return captchaArray;
  }

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
  }

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

    if (captchaCode.join("") !== captchaText) {
      setCaptchaError(true);
    }

    if (!number.includes("_") && number != "") {
      setSuccess(true);
    }
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
    setLoading(true);
  }, []);

  if (!loading) return <p>loading</p>;
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
                    <button
                      onClick={() => closeHandler()}
                      className="gilroyM primary-color text-base"
                    >
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
                      id="lastName"
                      name="lastName"
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
                      id="firstName"
                      name="firstName"
                      className="bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full"
                    />
                  </label>

                  <span className="flex gap-6 justify-between">
                    <label htmlFor="" className="block mb-7 flex-grow">
                      <p className="text-base gilroyR text-color">
                        Номер телефона <span className="text-[red]">*</span>
                      </p>
                      <span className="relative block overflow-hidden">
                        <span
                          className={`absolute top-0 left-0 h-full bg-[#42b2fc] border border-r-0 z-10 flex items-center px-[10px] rounded-s-lg text-white text-base gilroyM ${
                            numberError
                              ? "border-[#E53835]"
                              : "border-[#ABBED1]"
                          }`}
                        >
                          +998
                        </span>
                        <PatternFormat
                          mask="_"
                          required
                          value={number}
                          allowEmptyFormatting
                          format="              ## ### ####"
                          onChange={(e) => {
                            setNumber(e.target.value);
                            console.log(e.target.value);
                            if (!+number.includes("_")) {
                              setNumberError(false);
                            }
                          }}
                          className={`relative bg-[#F5F7FA] rounded-lg border outline-none text-base gilroyM text-color px-3 py-2 w-full ${
                            numberError
                              ? "border-[#E53835] text-[#e53835]"
                              : "border-[#ABBED1]"
                          }`}
                        />
                      </span>
                    </label>

                    <label htmlFor="" className="block mb-7 flex-grow">
                      <p className="text-base gilroyR text-color">
                        Серия и номер паспорта{" "}
                        <span className="text-[red]">*</span>
                      </p>

                      <input
                        required
                        id="check"
                        type="text"
                        name="check"
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

                  <span className="flex justify-between mb-4">
                    <span
                      className={`relative bg-[#F5F7FA] flex gap-3 py-1 px-3 text-lg captach before:rotate-45 after:rotate-[16deg] before:bg-[red] overflow-hidden`}
                    >
                      {captcha.map((item, key) => (
                        <span
                          key={key + 6}
                          className={`select-none font-bold`}
                          style={{
                            color: item.color,
                            transform: `rotate(${item.rotation}deg)`,
                          }}
                        >
                          {item.letter}
                        </span>
                      ))}
                    </span>

                    <button
                      type="button"
                      onClick={() => refreshCaptcha()}
                      className="inline-block h-8 border border-[#89939E] text-lg rounded px-1"
                    >
                      <BsArrowRepeat />
                    </button>
                  </span>

                  <label htmlFor="" className="block mb-7">
                    <p className="text-base gilroyR text-color">
                      Код проверки <span className="text-[red]">*</span>
                    </p>

                    <input
                      required
                      type="text"
                      id="captach"
                      name="captach"
                      onChange={(e) => {
                        setCaptchaError(false);
                        setCaptchaText(e.target.value);
                      }}
                      className={`bg-[#F5F7FA] rounded-lg border border-[#ABBED1] outline-none text-base gilroyM text-color px-3 py-2 w-full ${
                        captchaError
                          ? "border-[#E53835] text-[#e53835]"
                          : "border-[#ABBED1]"
                      }`}
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
