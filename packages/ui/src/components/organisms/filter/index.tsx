import { Checkbox } from "../../atoms";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../atoms";


export const Filter = () => {
    return (
      <div className="w-[199px] border border-red-200 px-0">
        <Accordion className="w-full !px-0">
          <AccordionItem
            value="item-1"
            className="w-full px-0"
          >
            <AccordionTrigger
              label="Filter"
              labelAs={"h2"}
              className="!bg-transparent !px-0"
            />
            <AccordionContent className="!bg-transparent w-full !px-0">
              <Accordion className="w-full !px-0">
                <AccordionItem
                  value="item-1"
                  className="w-full "
                >
                  <AccordionTrigger
                    label="Categories"
                    labelAs={"h3"}
                    className=" !bg-transparent w-full !px-0"
                  />
                  <AccordionContent className="!bg-transparent w-full !px-">
                    <Checkbox />  <p>Office furniture</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
};
