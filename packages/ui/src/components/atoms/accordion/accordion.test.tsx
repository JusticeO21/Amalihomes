import { act, render, screen } from "@testing-library/react";
import { Accordion } from "./accordion";
import { AccordionContext } from "./accordion.context";

describe("Accordion", () => {
  const mockChildren = (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
    </>
  );

  it("renders children correctly", () => {
    render(<Accordion>{mockChildren}</Accordion>);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("initializes with default value", () => {
    const defaultValue = ["item1"];
    let contextValue: unknown;

    render(
      <Accordion defaultValue={defaultValue}>
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );

    expect(contextValue.value).toEqual(defaultValue);
  });

  it("initializes with empty array when no defaultValue provided", () => {
    let contextValue: unknown;

    render(
      <Accordion>
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );

    expect(contextValue.value).toEqual([]);
  });

  it("toggles single item", () => {
    let contextValue: unknown;
    const { rerender } = render(
      <Accordion type="single">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );

    expect(contextValue.value).toEqual([]);

    act(() => {
      contextValue.onValueChange("item1");
    });
    rerender(
      <Accordion type="single">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual(["item1"]);

    act(() => {
      contextValue.onValueChange("item1");
    });
    rerender(
      <Accordion type="single">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual([]);

    act(() => {
      contextValue.onValueChange("item1");
    });
    act(() => {
      contextValue.onValueChange("item2");
    });
    rerender(
      <Accordion type="single">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual(["item2"]);
  });

  it("toggles multiple items independently", () => {
    let contextValue: unknown;
    const { rerender } = render(
      <Accordion type="multiple">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );

    expect(contextValue.value).toEqual([]);

    act(() => {
      contextValue.onValueChange("item1");
    });
    rerender(
      <Accordion type="multiple">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual(["item1"]);

    act(() => {
      contextValue.onValueChange("item2");
    });
    rerender(
      <Accordion type="multiple">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual(["item1", "item2"]);

    act(() => {
      contextValue.onValueChange("item1");
    });
    rerender(
      <Accordion type="multiple">
        <AccordionContext.Consumer>
          {(value) => {
            contextValue = value;
            return mockChildren;
          }}
        </AccordionContext.Consumer>
      </Accordion>,
    );
    expect(contextValue.value).toEqual(["item2"]);
  });
});
