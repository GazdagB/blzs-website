import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="py-20 flex-col lg:flex-row  px-10 flex lg:gap-28 xl:gap-48">
        <h2 className="text-5xl font-black text-blzs-teal block lg:hidden">KAPCSOLAT</h2>
      <Image className="hidden lg:block" alt="Kapcsolat" src={"/contact.svg"} width={360} height={360} />

      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <h2 className="font-bold text-2xl text-blzs-teal">Küldj nekem üzenetet!</h2>
        <p className="py-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sunt sed harum numquam temporibus rerum odio odit non quisquam nostrum.</p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Vezetéknév <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                required
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Keresztnév <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                required
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Cégnév
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              E-mail <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Telefonszám
            </label>
            <div className="mt-2.5">
              <div className="flex px-3 rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blzs-teal">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+36 123 456 78"
                  className="block px-5 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Üzenet <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
                required
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block cursor-pointer w-full rounded-md bg-blzs-teal px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Beszéljünk!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
