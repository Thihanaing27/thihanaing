import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Mail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_cjx7ets', 'template_zxfspfi', form.current, {
                publicKey: 'lbAI-3-tntgspXHJz',
            })
            .then(
                () => {
                    alert("Mail was sent sucessfully");
                    // console.log('SUCCESS!');
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    alert("Mail  senting fail!");
                },
            );
    };
    return <div className="w-full h-screen flex justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className=" w-1/2 h-2/3 flex flex-col justify-center items-center gap-5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600">
            <label>Name</label>
            <input type="text" name="user_name" className="w-[90%] rounded-2xl px-4 py-2 text-lg font-semibold text-black" />
            <label>Email</label>
            <input type="email" name="user_email" className="w-[90%] rounded-2xl px-4 py-2 text-lg font-semibold text-black" />
            <label>Message</label>
            <textarea name="message" className="w-[90%] rounded-2xl px-4 py-2 text-lg font-semibold text-black" />
            <input type="submit" value="Send" className="bg-gradient-to-t text-lg font-bold from-sky-300 to-green-800 px-4 py-2 rounded-xl cursor-pointer select-none" />
        </form>
    </div>
}