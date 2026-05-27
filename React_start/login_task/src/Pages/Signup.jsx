import { Form } from '../Components/Form';

export const Signup = () => {
  const data = [
    {
      _id: 1, // react compon
      name: 'name', // label, id, for
      placeholder: 'enter your user name',
      type: 'text',
    },
    {
      _id: 2, // react compon
      name: 'email', // label, id, for
      placeholder: 'enter your user email',
      type: 'email',
    },
    {
      _id: 3, // react compon
      name: 'password', // label, id, for
      placeholder: 'enter your user password',
      type: 'password',
    },
    {
      _id: 4, // react compon
      name: 'phone', // label, id, for
      placeholder: 'enter your user phone',
      type: 'tel',
    },
  ];
  return <Form props={{ data, name: 'signup' }} />;
};
