import { FormProvider, useForm, UseFormProps } from 'react-hook-form';

const FormexWrapper = ({
  children,
  reactHookFormProps,
}: {
  children: React.ReactNode;
  reactHookFormProps?: UseFormProps;
}) => {
  const form = useForm({
    ...reactHookFormProps,
    defaultValues: {
      items: [],
      activeIndex: -1,
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

export default FormexWrapper;
