/* eslint-disable no-new */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle, XCircle } from 'react-feather';

const AppInlineEdit = ({ value, onChange, type = 'text', id, customClass, range }) => {
  // state
  const [initialValue, setInitialValue] = useState(value);
  const [newValue, setNewValue] = useState(initialValue);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);

  // ref
  const ref = useRef(null);

  // edit input element
  const handleEdit = useCallback(() => {
    setEdit(true);
  }, []);

  // update input element
  const handleUpdate = () => {
    if (newValue) {
      setInitialValue(newValue);
      setEdit(false);
    }
  };

  // disable button
  function btnDisabled() {
    if (range && range.length) {
      if (newValue >= range[0] && newValue <= range[1]) {
        return '';
      }
      return 'disabled';
    }
    if (newValue) {
      return '';
    }
    return 'disabled';
  }

  // update by enter key event
  const enterKeyEvent = (e) => {
    if (e.keyCode === 13) {
      if (newValue) {
        if (range && range.length) {
          if (newValue >= range[0] && newValue <= range[1]) {
            setInitialValue(newValue);
            setEdit(false);
          }
        } else {
          setInitialValue(newValue);
          setEdit(false);
        }
      }
    }
  };

  // change input element
  const handleChange = (e) => {
    const val = e.target.value;
    if (range && range.length) {
      if (val >= range[0] && val <= range[1]) {
        setError(false);
      } else {
        setError(true);
      }
    }
    setNewValue(val);
  };

  // prevent negative input
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  // prevent negative input on copy paste
  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  // cancel input element
  const handleCancel = () => {
    setEdit(false);
    setNewValue(initialValue);
  };

  // focus when edit is true
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    edit && ref.current.focus();
  }, [edit]);

  // callback trigger when state change
  useEffect(() => {
    if (onChange) {
      onChange(initialValue);
    }
  }, [initialValue, onChange]);

  return (
    <>
      {!edit ? (
        <span onClick={handleEdit} role="button" tabIndex="0" className="pe-1 ps-1">
          <span className={customClass}>{initialValue}</span>
        </span>
      ) : (
        <span>
          <span className="inline-edit-input customTooltip">
            {(() => (
              <input
                ref={ref}
                min="0"
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                id={id}
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => enterKeyEvent(e)}
                value={newValue}
              />
            ))()}
            {error && (
              <span className="customTooltip__invalid">
                The value should be in between {range[0]} to {range[1]}
              </span>
            )}
          </span>

          <span className="inline-edit-input-button">
            <span
              role="button"
              className={`text-success me-2 ${btnDisabled()}`}
              tabIndex="0"
              onClick={handleUpdate}
            >
              <CheckCircle />
            </span>
            <span role="button" className="text-danger me-2" tabIndex="0" onClick={handleCancel}>
              <XCircle />
            </span>
          </span>
        </span>
      )}
    </>
  );
};

export default AppInlineEdit;
