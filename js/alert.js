export const AlertError = {
  alert: document.querySelector('.alert-error'),
  open: () => {
      AlertError.alert.classList.add('open');
  },
  close: () => {
      AlertError.alert.classList.remove('open');
  },
};
export const AlertErrorNumberParcel = {
  alert: document.querySelector('.alert-error-number-parcel'),
  open: () => {
    AlertErrorNumberParcel.alert.classList.add('open');
  },
  close: () => {
    AlertErrorNumberParcel.alert.classList.remove('open');
  },
};