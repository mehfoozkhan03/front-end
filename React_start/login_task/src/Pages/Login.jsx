import { Form } from '../Components/Form';

export const Login = () => {
  const data = [
    {
      _id: 1, // react compon
      name: 'email', // label, id, for
      placeholder: 'enter your user email',
      type: 'email',
    },
    {
      _id: 2, // react compon
      name: 'password', // label, id, for
      placeholder: 'enter your user password',
      type: 'password',
    },
  ];
  return <Form props={{ data, name: 'login' }} />;
};
