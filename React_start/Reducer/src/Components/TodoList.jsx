import { useContext } from 'react';
import { ReducerContext } from '../Context/ReducerContext';

import * as types from '../App/Actions';

export const TodoList = () => {
  const { state, dispatch, editText, setEditText } = useContext(ReducerContext);

  const handleDelete = (id) => {
    dispatch({ type: types.Todo_Delete, payload: id });
  };

  const handleEdits = (id) => {
    dispatch({ type: types.Todo_Update, payload: id });
  };

  const handleCancel = (id) => {
    dispatch({ type: types.Todo_Cancel, payload: id });
  };

  const handleConfirm = (id) => {
    dispatch({ type: types.Todo_Confirm, payload: { id: id, text: editText } });
  };

  const handleSelect = () => {
    dispatch({ type: types.Todo_All_Selected });
  };

  const handleDeSelect = () => {
    dispatch({ type: types.Todo_All_DeSelected });
  };

  const handleDeleted = () => {
    dispatch({ type: types.Todo_All_Deleted });
  };

  return (
    <>
      {state.todo.find((el) => el.isCompleted === true) ? (
        <>
          <button onClick={handleDeleted}>delete all</button>
          <button onClick={handleDeSelect}>deSelect all</button>
        </>
      ) : (
        state.todo.length > 0 && (
          <button onClick={handleSelect}>select all</button>
        )
      )}

      {state.todo?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <input
              checked={el.isCompleted}
              type="checkbox"
              onChange={(e) => {
                console.log(`🚀 ~ e:`, e);
                dispatch({
                  type: types.Todo_Complete,
                  payload: { id: el.id, status: e.target.checked },
                });
              }}
            />
            {el.isEdit ? (
              <input
                type="text"
                defaultValue={el.todo}
                onChange={(el) => setEditText(el.target.value)}
              />
            ) : (
              <p>{el.todo}</p>
            )}
            {el.isEdit ? (
              <>
                <button onClick={() => handleCancel(el.id)}>cancel</button>
                <button onClick={() => handleConfirm(el.id)}>confirm</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdits(el.id)}>edit</button>
                <button onClick={() => handleDelete(el.id)}>delete</button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
