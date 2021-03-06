import React from "react";
import { shallow } from "enzyme";
import Products from "../../components/Products";
import toJson from "enzyme-to-json";
import productData from "../fixtures/data";

test("It should render Product component correctly", () => {
  const wrapper = shallow(<Products data={productData} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
