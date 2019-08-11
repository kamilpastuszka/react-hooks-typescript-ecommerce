import React from "react";
import { shallow } from "enzyme";
import Basket from "../../components/Basket";
import toJson from "enzyme-to-json";

test("It should render Basket correctly", () => {
  const wrapper = shallow(<Basket />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
