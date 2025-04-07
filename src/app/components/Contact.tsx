import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import {AnimatePresence, motion } from "motion/react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

type FormFields = {
  lastName: string;
  firstName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Contact = () => {

    const serviceId  = process.env.NEXT_PUBLIC_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
    reset
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> =async (data) => {

        const timeNow = new Date(); 

        const year : number  = timeNow.getFullYear(); 
        const month :string  = String(timeNow.getMonth() + 1).padStart(2, '0');
        const date :string  = String(timeNow.getDate()).padStart(2, '0');
   
        const daysOfWeek : string[]  = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök','Péntek','Szombat']
        const dayOfWeek :string  = daysOfWeek[timeNow.getDay()];

        const hours :string  = String(timeNow.getHours()).padStart(2,'0'); 
        const minutes :string  = String(timeNow.getMinutes()).padStart(2,'0');

        const dateString :string = `${year}.${month}.${date} ${dayOfWeek} ${hours}:${minutes}`

        const dataToSend = {...data, time: dateString}

        try {
            console.log(data)
            await emailjs.send(serviceId, templateId, dataToSend, { publicKey: publicKey });
            Swal.fire({
                title: "Üzenet elküldve!",
                text: "Köszönöm az érdeklődést! Válaszolni fogok!",
                icon: "success",
                confirmButtonColor: "#005A67"
              });

              reset() // Resets all of the form values 
        } catch (error) {
            console.log(error);

            let errorMessage = "Valami hiba történt!";
            
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === "string") {
                errorMessage = error;
            } else {
                errorMessage = JSON.stringify(error);
            }
        
            Swal.fire({
                title: 'Hiba!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
        
      
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // ✅ Stagger animation
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

    
  return (
    <section
    id="contact"
    className="py-20 flex-col lg:flex-row  px-10 flex lg:gap-28 xl:gap-48">
      <h2 className="text-5xl font-black text-blzs-teal block lg:hidden">
        KAPCSOLAT
      </h2>
   
        <motion.div className="flex items-center justify-center"
        viewport={{once: true,amount: .3}}
        initial={{x: -400, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: .5}}
        >
          <Image
            className="hidden lg:block"
            alt="Kapcsolat"
            src={"/contact.svg"}
            width={360}
            height={360}
          />
        </motion.div>
    

      <motion.form
        viewport={{once: true, amount: .3}}
        initial= "hidden"
        whileInView="show"
        variants={containerVariants}
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <motion.h2 className="font-bold text-2xl text-blzs-teal"
        variants={itemVariants}
        >
          Küldj nekem üzenetet!
        </motion.h2>
        <motion.p
        variants={itemVariants}
        className="py-5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          sunt sed harum numquam temporibus rerum odio odit non quisquam
          nostrum.
        </motion.p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 transition-all duration-300">
          <motion.div 
          variants={itemVariants}
          >
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Vezetéknév <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                {...register("lastName", {
                  required: "Vezetéknév szükséges!",
                })}
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
                <AnimatePresence>
              {errors.lastName && (
                <motion.div
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 overflow-hidden"
                >
                  {errors.lastName.message}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
          variants={itemVariants}
          >
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Keresztnév <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                {...register("firstName", {
                  required: "Keresztnév szükséges!",
                })}
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
               <AnimatePresence>
              {errors.firstName && (
                <motion.div
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 overflow-hidden"
                >
                  {errors.firstName.message}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
          variants={itemVariants}
          className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Cégnév
            </label>
            <div className="mt-2.5">
              <input
                {...register("companyName")}
                id="company"
                name="companyName"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            </div>
          </motion.div>
          <motion.div
          variants={itemVariants}
          className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              E-mail <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                {...register("email", {
                  required: "E-mail megadás szükséges",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Érvénytelen e-mail cím!"
                  }
                })}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />
            <AnimatePresence>
              {errors.email && (
                <motion.div
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 overflow-hidden"
                >
                  {errors.email.message}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
          variants={itemVariants}
          className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Telefonszám
            </label>
            <div className="mt-2.5">
              <div className="flex px-3 rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blzs-teal">
                <input
                {...register("phoneNumber")}
                  id="phone-number"
                  name="phoneNumber"
                  type="text"
                  placeholder="+36 123 456 78"
                  className="block px-5 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={itemVariants}
          className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Üzenet <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("message", {
                  required: "Üzenet megadása kötelező!",
                })}
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blzs-teal"
              />

            <AnimatePresence>
              {errors.message && (
                <motion.div
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 overflow-hidden"
                >
                  {errors.message.message}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <motion.div
        variants={itemVariants}
        className="mt-10">
          <button
            disabled={isSubmitting}
            type="submit"
            className="block cursor-pointer w-full rounded-md bg-blzs-teal px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isSubmitting ? "Küldés...": "Beszéljünk"}
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default Contact;
