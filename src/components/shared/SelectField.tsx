import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Controller } from "react-hook-form"

interface Option {
  label: string
  value: string
}

interface Props {
  name: string
  control: any
  label: string
  options: Option[]
  placeholder?: string
  description?: string
  rules?: any
  genre?:string
}

export const SelectField = ({
  name,
  genre,
  control,
  label,
  options,
  placeholder,
  description,
  rules,
}: Props) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Select value={field.value} onValueChange={field.onChange} defaultValue={genre}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder || "Select..."} defaultChecked/>
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
      </FormItem>
    )}
  />
)
