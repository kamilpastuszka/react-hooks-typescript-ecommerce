import React from "react";
import { shallow } from "enzyme";
import Nav from "../../components/Nav";
import toJson from "enzyme-to-json";

test("should render Basket correctly", () => {
  const wrapper = shallow(<Nav />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
