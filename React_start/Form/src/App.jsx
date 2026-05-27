import { Form } from './Components/Form';

export const App = () => {
  const data = [
    {
      _id: 1, // react compon
      name: 'userName', // label, id, for
      placeholder: 'enter your user name',
      type: 'text',
    },
    {
      _id: 2, // react compon
      name: 'userEmail', // label, id, for
      placeholder: 'enter your user email',
      type: 'email',
    },
    {
      _id: 3, // react compon
      name: 'userPassword', // label, id, for
      placeholder: 'enter your user password',
      type: 'password',
    },
    {
      _id: 4, // react compon
      name: 'userPhone', // label, id, for
      placeholder: 'enter your user phone',
      type: 'tel',
    },
  ];

  const showValue = (data) => {
    console.log(`🚀 ~ data:from parent compo`, data);
  };

  return (
    <>
      <Form props={{ data, showValue }} />
    </>
  );
};
