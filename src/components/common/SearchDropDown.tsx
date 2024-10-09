import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Toptions } from "@/types";

type Props = {
  options: Toptions;
  values: Toptions;
  setValues: React.Dispatch<React.SetStateAction<Toptions>>;
};

/* eslint-disable */
const SearchDropDown = ({ options, setValues, values }: Props) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (value: string) => {
    const findValue = options?.find((framework) => framework.value === value);
    if (values?.map((item) => item?.value)?.includes(findValue?.value!)) {
      const filterValue = values?.filter(
        (item) => item?.value !== findValue?.value,
      );
      setValues(filterValue);
    } else {
      setValues([...values, findValue!]);
    }
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {/* {value
            ? options?.find((framework) => options?.value === value)?.label
            : "Select states..."} */}
          selectStates
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="xl:w-[400px] w-full p-0"
        side="bottom"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search states..." />
          <CommandList>
            <CommandEmpty>No states found.</CommandEmpty>
            <CommandGroup>
              {options?.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  //   onSelect={(currentValue) => {
                  //     setValue(currentValue === value ? "" : currentValue);
                  //     setOpen(false);
                  //   }}
                  onSelect={(currentValue) => handleSelect(currentValue)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      //   value === options.value ? "opacity-100" : "opacity-0"
                      values
                        ?.map((item) => item?.value)
                        ?.includes(option?.value)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchDropDown;
