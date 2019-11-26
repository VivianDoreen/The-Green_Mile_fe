//react libraries
import React from "react";
import { mount } from "enzyme";

//components
import { UserLogin, mapDispatchToProps, mapStateToProps } from "./";

describe("User login", () => {
  const defaultProps = {
    loginUserRequest: jest.fn(),
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    data: {
      username: "nabulo",
      password: "vivian"
    }
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<UserLogin {...defaultProps} />);
    jest.spyOn(wrapper.instance(), "handleSubmit");
  });

  it("user login should render", () => expect(wrapper).toMatchSnapshot());

  it("should capture username correctly onChange", () => {
    const input = wrapper.find("input").at(0);
    input.instance().value = "nabulo";
    input.simulate("change");
    expect(wrapper.state().username).toEqual("nabulo");
  });

  it("should submit form", () => {
    const loginForm = wrapper.find("#loginForm");

    const e = {
      preventDefault: jest.fn()
    };
    loginForm.simulate("submit", e);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });
});
