import React from "react";
import { shallow } from "enzyme";
import Product from "../../components/Product";
import toJson from "enzyme-to-json";

test("It should render Product component correctly", () => {
  const onAddProductSpy = jest.fn();
  const wrapper = shallow(
    <Product name={"item 1"} price={100} addProduct={onAddProductSpy} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
