import { Col, Row, Slider } from "antd";
import { useState } from "react";
export const IntegerStep = ({ onSliderChange }) => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (newValue) => {
    setInputValue(newValue);
    if (typeof onSliderChange === "function") {
      onSliderChange(newValue);
    }
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={5}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
    </Row>
  );
};
