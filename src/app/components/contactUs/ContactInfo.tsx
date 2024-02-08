import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { LuMapPin } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import SocialIcons from "../ui/SocialIcons";
import ContactDetailsSubtitle from "../ui/typography/ContactDetailsSubtitle";

const ContactInfo = () => {
  return (
    <>
      <div className="pb-4">
        <ContactDetailsSubtitle logo={<TfiEmail />} title="Say hello" />
        <div className="flex gap-2 pt-2">
          <p>Email:</p>
          <p className="text-black">lytvynvalery@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <p>Phone:</p>
          <p className="text-black">+38 050 967 8926</p>
        </div>
      </div>
      <div className="pb-4">
        <ContactDetailsSubtitle logo={<LuMapPin />} title="Find us in" />
        <div className="flex gap-2 pt-2">
          <p>Odesa, Ukraine</p>
        </div>
      </div>
      <div>
        <ContactDetailsSubtitle
          logo={<IoShareSocialOutline />}
          title="Social networks"
        />
        <div className="pt-2">
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
