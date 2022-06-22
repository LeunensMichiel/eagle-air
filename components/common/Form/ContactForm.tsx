import { Bar, TiltedBar } from '@components/common';
import {
  Building,
  Mail,
  Mobile,
  Send,
  Stamp,
  Subject,
  User,
} from '@components/icons';
import { Button, Input, Select, TextArea } from '@components/ui';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import countries from '../../../data/countries.json';
import countriesEn from '../../../data/countriesLocalized/en/countries.json';
import countriesFr from '../../../data/countriesLocalized/fr/countries.json';
import countriesNl from '../../../data/countriesLocalized/nl/countries.json';
import styles from './ContactForm.module.scss';
import Form from './Form';

export const ContactForm = () => {
  const { t, lang } = useTranslation();

  const countryOptions = countries
    .map(({ name, code }) => {
      let localisedCountry;
      switch (lang) {
        case 'nl':
          localisedCountry = countriesNl.find(
            (country) => country.alpha2.toUpperCase() === code
          )?.name;
          break;
        case 'fr':
          localisedCountry = countriesFr.find(
            (country) => country.alpha2.toUpperCase() === code
          )?.name;
          break;
        default:
          localisedCountry = countriesEn.find(
            (country) => country.alpha2.toUpperCase() === code
          )?.name;
          break;
      }
      return {
        value: code,
        label: localisedCountry ?? name,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
  return (
    <div className={styles.contact}>
      <Form className={styles.form}>
        <Input
          label="Full Name"
          type="text"
          iconLeft={<User />}
          placeholder="Firstname Lastname"
        />
        <Input
          label="Company"
          type="text"
          iconLeft={<Building />}
          placeholder="Your company"
        />
        <Input
          label="Email"
          type="email"
          iconLeft={<Stamp />}
          placeholder="address@provider.com"
        />
        <Input
          label="Phone"
          type="tel"
          iconLeft={<Mobile />}
          placeholder="+00 000 00 00 00"
        />
        <Select
          label="Country"
          instanceId="1"
          placeholder="Belgium"
          options={countryOptions}
          getOptionLabel={(option) =>
            `${countries.find((opt) => opt.code === option.value)?.emoji} ${
              option.label
            }`
          }
        />
        <Input
          label="Subject"
          type="text"
          iconLeft={<Subject />}
          placeholder="Subject of email"
        />
        <TextArea
          label="Message"
          iconLeft={<Mail />}
          placeholder="How can we be of service?"
          wrapperClassName={styles.form__textarea}
        />
        <Button
          type="submit"
          className={styles.form__button}
          iconRight={<Send />}
        >
          Send message
        </Button>
      </Form>
      <div className={styles.contact__info}>
        <div>
          <Bar />
          <h3 className={cn(styles.title, styles.contact__info__title)}>
            Our headquarters.
          </h3>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            Zaventem office
          </span>
          <span className={styles.contact__info__item__line}>
            Brucargo 752,
          </span>
          <span className={styles.contact__info__item__line}>
            1820 Steenokkerzeel,
          </span>
          <span className={styles.contact__info__item__line}>Belgium</span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>Phone</span>
          <span className={styles.contact__info__item__line}>
            +32 02 751 50 45
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>Email</span>
          <span className={styles.contact__info__item__line}>
            info@eagleair.be
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>Fax</span>
          <span className={styles.contact__info__item__line}>
            +32 02 751 50 45
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            Company number
          </span>
          <span className={styles.contact__info__item__line}>
            0712 23 45 24
          </span>
        </div>
        <TiltedBar />
      </div>
    </div>
  );
};
