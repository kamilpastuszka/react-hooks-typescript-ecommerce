import React from "react";
import { shallow } from "enzyme";
import BasketItem from "../../components/BasketItem";
import toJson from "enzyme-to-json";

test("It should render BasketItem component correctly", () => {
  const onRemoveProductSpy = jest.fn();
  const wrapper = shallow(
    <BasketItem
      name={"Item 1"}
      price={100}
      removeProduct={onRemoveProductSpy}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
