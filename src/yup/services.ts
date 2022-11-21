import * as yup from 'yup';

export const yupCreateServiceInput = yup.object().shape({
  name: yup.string().required(),
});

export const yupCreateCategoryInput = yup.object().shape({
  name: yup.string().required(),
});
