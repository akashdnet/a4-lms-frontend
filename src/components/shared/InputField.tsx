import { Controller } from "react-hook-form"
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface Props {
  name: string
  control: any
  label: string
  placeholder?: string
  description?: string
  rules?: any
}

export const InputField = ({ name, control, label, placeholder, description, rules }: Props) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
      </FormItem>
    )}
  />
)
