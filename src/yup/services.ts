import * as yup from 'yup';

export const yupCreateServiceInput = yup.object().shape({
  name: yup.string().required(),
});
