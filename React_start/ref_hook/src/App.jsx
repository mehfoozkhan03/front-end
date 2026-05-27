import React from 'react';

export const App = () => {
  const ownData = React.useRef(null);
  const [text, setText] = React.useState();

  const textChange = () => {
    // setText(e.target.value);
    let textValue = ownData.current.value;
    setText(textValue);
  };

  console.log(`🚀 ~ text:`, text);

  return (
    <>
      <input
        name="text input"
        type="text"
        placeholder="enter the text..."
        // onChange={(event) => textChange(event)}
        ref={ownData}
      />
      <button onClick={textChange}>get</button>
    </>
  );
};
