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
  const { t, lang } = useTranslation('common');

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
          label={t('form.fullNameLabel')}
          type="text"
          iconLeft={<User />}
          placeholder={t('form.fullNameLabel')}
        />
        <Input
          label={t('form.companyLabel')}
          type="text"
          iconLeft={<Building />}
          placeholder={t('form.companyPlaceholder')}
        />
        <Input
          label={t('form.emailLabel')}
          type="email"
          iconLeft={<Stamp />}
          placeholder={t('form.emailPlaceholder')}
        />
        <Input
          label={t('form.phoneLabel')}
          type="tel"
          iconLeft={<Mobile />}
          placeholder={t('form.phonePlaceholder')}
        />
        <Select
          label={t('form.countryLabel')}
          instanceId="1"
          placeholder={t('form.countryPlaceholder')}
          options={countryOptions}
          getOptionLabel={(option) =>
            `${countries.find((opt) => opt.code === option.value)?.emoji} ${
              option.label
            }`
          }
        />
        <Input
          label={t('form.subjectLabel')}
          type="text"
          iconLeft={<Subject />}
          placeholder={t('form.subjectPlaceholder')}
        />
        <TextArea
          label={t('form.messageLabel')}
          iconLeft={<Mail />}
          placeholder={t('form.messagePlaceholder')}
          wrapperClassName={styles.form__textarea}
        />
        <Button
          type="submit"
          className={styles.form__button}
          iconRight={<Send />}
        >
          {t('form.button')}
        </Button>
      </Form>
      <div className={styles.contact__info}>
        <div>
          <Bar />
          <h3 className={cn(styles.title, styles.contact__info__title)}>
            {t('contact.title')}
          </h3>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            {t('contact.office')}
          </span>
          <span className={styles.contact__info__item__line}>
            Brucargo 752,
          </span>
          <span className={styles.contact__info__item__line}>
            1820 Steenokkerzeel,
          </span>
          <span className={styles.contact__info__item__line}>
            {t('contact.country')}
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            {t('contact.phone')}
          </span>
          <span className={styles.contact__info__item__line}>
            +32 02 751 50 45
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            {t('contact.email')}
          </span>
          <span className={styles.contact__info__item__line}>
            info@eagleair.be
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            {t('contact.fax')}
          </span>
          <span className={styles.contact__info__item__line}>
            +32 02 751 50 45
          </span>
        </div>
        <div className={styles.contact__info__item}>
          <span className={styles.contact__info__item__title}>
            {t('contact.vat')}
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
