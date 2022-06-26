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
import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import countries from '../../../data/countries.json';
import countriesEn from '../../../data/countriesLocalized/en/countries.json';
import countriesFr from '../../../data/countriesLocalized/fr/countries.json';
import countriesNl from '../../../data/countriesLocalized/nl/countries.json';
import styles from './ContactForm.module.scss';
import Form from './Form';

type FormValues = {
  naam: string;
  email: string;
  bedrijf?: string;
  countryOption: { value: string; label: string };
  onderwerp: string;
  bericht: string;
  telefoon: string;
};

type Submit = {
  'form-name': string;
  land: string;
} & Omit<FormValues, 'countryOption'>;

function encode(values: Submit) {
  return Object.keys(values)
    .map(
      (key) =>
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(values?.[key as keyof Submit] ?? 'Niet opgegeven')
    )
    .join('&');
}

export const ContactForm = () => {
  const { t, lang } = useTranslation('common');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

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

  const onSubmit = useCallback((values: FormValues) => {
    const { countryOption, ...data } = values;
    try {
      setIsSubmitted(false);
      setIsSubmitting(true);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...data,
          land: `${countryOption.value} - ${countryOption.label}`,
        }),
      }).catch((error) => console.error(error));
      setIsSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <div className={styles.contact}>
      <Form
        className={styles.form}
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label style={{ display: 'none' }}>
          Don’t fill this out if you’re human:
          <input name="bot-field" />
        </label>
        <Input
          label={t('form.fullNameLabel')}
          type="text"
          iconLeft={<User />}
          placeholder={t('form.fullNameLabel')}
          required
          error={errors?.naam}
          {...register('naam', { required: true })}
        />
        <Input
          label={t('form.companyLabel')}
          type="text"
          iconLeft={<Building />}
          placeholder={t('form.companyPlaceholder')}
          {...register('bedrijf')}
        />
        <Input
          label={t('form.emailLabel')}
          type="email"
          iconLeft={<Stamp />}
          placeholder={t('form.emailPlaceholder')}
          error={errors?.email}
          required
          {...register('email', { required: true })}
        />
        <Input
          label={t('form.phoneLabel')}
          type="tel"
          iconLeft={<Mobile />}
          placeholder={t('form.phonePlaceholder')}
          required
          error={errors?.telefoon}
          {...register('telefoon', { required: true })}
        />
        <Controller
          name="countryOption"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, name, value } }) => (
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
              error={errors?.countryOption?.label}
              onChange={onChange}
              name={name}
              value={value}
              required
            />
          )}
        />
        <Input
          label={t('form.subjectLabel')}
          type="text"
          iconLeft={<Subject />}
          error={errors?.onderwerp}
          placeholder={t('form.subjectPlaceholder')}
          required
          {...register('onderwerp', { required: true })}
        />
        <TextArea
          label={t('form.messageLabel')}
          iconLeft={<Mail />}
          required
          placeholder={t('form.messagePlaceholder')}
          error={errors?.bericht}
          wrapperClassName={styles.form__textarea}
          {...register('bericht', { required: true })}
        />
        <Button
          type="submit"
          className={styles.form__button}
          iconRight={<Send />}
          loading={isSubmitting}
        >
          {t('form.button')}
        </Button>
        <p className={styles['message-received']}>
          {isSubmitted && 'Bericht succesvol verzonden!'}
        </p>
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
