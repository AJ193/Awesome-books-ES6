/* eslint-disable no-undef */

const ourLocalDate = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
const { hour } = luxon.DateTime.local().c;
const minit = luxon.DateTime.local().c.minute;
export {
  ourLocalDate, hour, minit,
};