import { Layout } from '@components/common';
import { ContactForm } from '@components/common/Form';

import styles from './styles/contact.module.scss';

const ContactPage = () => {
  return (
    <section className="py-container--sm">
      <div className="container">
        <ContactForm />
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10063.263834796418!2d4.458571!3d50.9086214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3926daa4e7c4a699!2sEagle%20Air%20Agencies%20NV!5e0!3m2!1snl!2sbe!4v1655925235208!5m2!1snl!2sbe"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
ContactPage.Layout = Layout;
