import { Col, Row, Slider } from "antd";
import { useState } from "react";
export const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={100}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      {/* <Col span={14}>
        <InputNumber
          min={1}
          max={100}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col> */}
    </Row>
  );
};
