import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  control: any;
  label: string;
  description?: string;
  options?: { label: string; value: "true" | "false" }[];
  rules?: any;
  available?: true | false;
}

export const RadioBooleanField = ({
  available = true,
  name,
  control,
  label,
  description,
  options = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ],
  rules,
}: Props) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={"true"}
    render={({ field, fieldState }) => (
      <FormItem className="space-y-2">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <RadioGroup
            className="flex gap-4"
            onValueChange={field.onChange}
            defaultValue={available ? "true" : "false"}
          >
            {options.map((opt) => (
              <FormItem
                key={opt.value}
                className="flex items-center space-x-2 space-y-0"
              >
                <FormControl>
                  <RadioGroupItem value={opt.value} />
                </FormControl>
                <FormLabel className="font-normal">{opt.label}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        {fieldState.error && (
          <FormMessage>{fieldState.error.message}</FormMessage>
        )}
      </FormItem>
    )}
  />
);
