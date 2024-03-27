import { el, mount } from 'redom';
// eslint-disable-next-line no-unused-vars
import styles from './css/style.css';

class InputSection {
  constructor(title, className, dataName) {
    this.titleEl = el('span.form__label-text', title);
    this.inputEl = el(`input.form__${className}-input.form__input`, { name: dataName, required: true });
    this.el = el(`label.form__${className}.form__label`);
    mount(this.el, this.titleEl);
    mount(this.el, this.inputEl);
  }
}

const emailSection = new InputSection('E-mail', 'email', 'email');
const numberSection = new InputSection('Номер карты', 'number', 'cardNumber');
const dateSection = new InputSection('Срок действия', 'date', 'cardExpirationDate');
const codeSection = new InputSection('CVC/CVV', 'code', 'cardCode');

const numberWrapperEl = el('div.form__number-wrapper');
const cardLogoEl = el('div.form__card-logo');
mount(numberWrapperEl, numberSection);
mount(numberWrapperEl, cardLogoEl);

const wrapperEl = el('div.form__wrapper');
mount(wrapperEl, dateSection);
mount(wrapperEl, codeSection);

const formEl = el('form.form');
const titleEl = el('p.form__title', 'Введите данные для оплаты');
const buttonEl = el('button.form__btn', 'Оплатить', { disabled: true });
mount(formEl, titleEl);
mount(formEl, emailSection);
mount(formEl, numberWrapperEl);
mount(formEl, wrapperEl);
mount(formEl, buttonEl);
mount(document.body, formEl);

export {
  emailSection,
  numberSection,
  dateSection,
  codeSection,
  cardLogoEl,
  buttonEl,
};
